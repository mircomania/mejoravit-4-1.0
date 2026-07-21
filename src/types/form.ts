export interface FormData {
    nombre: string;
    email: string;
    telefono: string;
    estado: string;
}

export type FormField = keyof FormData;

export type FormErrors = Partial<Record<FormField, boolean>>;

export interface UtmParams {
    utmSource: string;
    utmMedium: string;
    utmCampaign: string;
    timestamp?: number;
}

export interface FormPayload extends FormData {
    utmSource?: string;
    utmMedium?: string;
    utmCampaign?: string;
}

export interface ApiResponse {
    message?: string;
    data?: unknown;
    error?: string;
}

export type FormCallback = (response?: ApiResponse) => void;
