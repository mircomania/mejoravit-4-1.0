'use client';

import { useCallback, useEffect, useState } from 'react';

import type { SweetAlertIcon } from 'sweetalert2';

import type { ApiResponse, FormCallback, FormData, FormErrors, FormField, FormPayload, UtmParams } from '../types/form';

interface UseFormOptions {
    onSuccess?: FormCallback;
    onError?: FormCallback;
}

interface UseFormReturn {
    formData: FormData;
    errors: FormErrors;
    loading: boolean;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    updateField: (name: FormField, value: string) => void;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
    showAlert: (title: string, message: string, icon: SweetAlertIcon, color: string) => Promise<void>;
}

let swalPromise: Promise<typeof import('sweetalert2').default> | undefined;

const loadSwal = (): Promise<typeof import('sweetalert2').default> => {
    if (!swalPromise) {
        swalPromise = import('sweetalert2').then((module) => module.default);
    }

    return swalPromise;
};

const DEFAULT_UTM_PARAMS: UtmParams = {
    utmSource: '',
    utmMedium: '',
    utmCampaign: '',
};

export const useForm = (initialState: FormData, { onSuccess = () => undefined, onError = () => undefined }: UseFormOptions = {}): UseFormReturn => {
    const [formData, setFormData] = useState<FormData>(initialState);
    const [errors, setErrors] = useState<FormErrors>({});
    const [loading, setLoading] = useState(false);
    const [utmParams, setUtmParams] = useState<UtmParams>(DEFAULT_UTM_PARAMS);

    useEffect(() => {
        const DAYS_TO_EXPIRE = 15;
        const MS_IN_ONE_DAY = 1000 * 60 * 60 * 24;
        const now = Date.now();

        const urlParams = new URLSearchParams(window.location.search);

        const utmSource = urlParams.get('utm_source') ?? '';
        const utmMedium = urlParams.get('utm_medium') ?? '';
        const utmCampaign = urlParams.get('utm_campaign') ?? '';

        const storedData = localStorage.getItem('utmParams');

        if (utmSource || utmMedium || utmCampaign) {
            const newParams: UtmParams = {
                utmSource,
                utmMedium,
                utmCampaign,
                timestamp: now,
            };

            localStorage.setItem('utmParams', JSON.stringify(newParams));
            setUtmParams(newParams);

            return;
        }

        if (!storedData) return;

        try {
            const parsedData = JSON.parse(storedData) as UtmParams;

            if (typeof parsedData.timestamp !== 'number') {
                localStorage.removeItem('utmParams');
                return;
            }

            const ageInDays = (now - parsedData.timestamp) / MS_IN_ONE_DAY;

            if (ageInDays <= DAYS_TO_EXPIRE) {
                setUtmParams(parsedData);
            } else {
                localStorage.removeItem('utmParams');
            }
        } catch {
            localStorage.removeItem('utmParams');
        }
    }, []);

    const showAlert = useCallback(async (title: string, message: string, icon: SweetAlertIcon, color: string): Promise<void> => {
        const Swal = await loadSwal();

        await Swal.fire({
            title,
            html: `<div class="alliance-text"><p>${message}</p></div>`,
            icon,
            confirmButtonColor: color,
            scrollbarPadding: false,
            customClass: {
                title: 'formula-bold',
            },
            willOpen: () => {
                document.body.style.overflow = 'auto';
            },
            willClose: () => {
                document.body.style.overflow = 'auto';
            },
        });
    }, []);

    const removeFieldError = useCallback((name: FormField): void => {
        setErrors((previousErrors) => {
            const nextErrors = { ...previousErrors };

            delete nextErrors[name];

            return nextErrors;
        });
    }, []);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const name = event.target.name as FormField;
        const { value } = event.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value,
        }));

        removeFieldError(name);
    };

    const updateField = (name: FormField, value: string): void => {
        setFormData((previousData) => ({
            ...previousData,
            [name]: value,
        }));

        removeFieldError(name);
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.nombre.trim()) {
            newErrors.nombre = true;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.email.trim() || !emailRegex.test(formData.email)) {
            newErrors.email = true;
        }

        const isValidPhone = /^\+(52|1)\d{10}$/.test(formData.telefono);

        if (!isValidPhone) {
            newErrors.telefono = true;
        }

        if (!formData.estado.trim()) {
            newErrors.estado = true;
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const resetForm = (): void => {
        setFormData({
            ...initialState,
            telefono: '',
        });

        setErrors({});
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();

        if (!validateForm()) return;

        setLoading(true);

        try {
            const formDataToSend: FormPayload = {
                ...formData,
                utmSource: utmParams.utmSource,
                utmMedium: utmParams.utmMedium,
                utmCampaign: utmParams.utmCampaign,
            };

            const response = await fetch('/backend/submit.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formDataToSend),
            });

            const data = (await response.json()) as ApiResponse;

            if (!response.ok) {
                onError(data);
                return;
            }

            window.dataLayer = window.dataLayer ?? [];
            window.dataLayer.push({
                event: 'formulario_enviado',
            });

            onSuccess(data);
            resetForm();
        } catch (error: unknown) {
            console.error('Error al enviar el formulario:', error);

            onError({
                error: error instanceof Error ? error.message : 'Ocurrió un error desconocido.',
            });
        } finally {
            setLoading(false);
        }
    };

    return {
        formData,
        errors,
        loading,
        handleChange,
        updateField,
        handleSubmit,
        showAlert,
    };
};
