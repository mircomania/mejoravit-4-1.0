'use client';

import { useMemo, useState } from 'react';

import PhoneInput from 'react-phone-input-2';

import 'react-phone-input-2/lib/style.css';

import styles from '../../styles/modules/form.module.css';

import { FlechaIcon } from '../../assets/icons/FlechaIcon';
import { SpinnerIcon } from '../../assets/icons/SpinnerIcon';
import { useForm } from '../../hooks/useForm';

import { CustomSelect, type SelectOption } from './CustomSelect';
import { estados } from './estadosMexicos';

export const Form = () => {
    const [showPhoneUI, setShowPhoneUI] = useState(false);

    const estadosOptions = useMemo<SelectOption[]>(
        () =>
            estados.map((estado) => ({
                value: estado,
                label: estado,
            })),
        [],
    );

    const { formData, errors, loading, handleChange, updateField, handleSubmit, showAlert } = useForm(
        {
            nombre: '',
            email: '',
            telefono: '',
            estado: '',
        },
        {
            onSuccess: () => {
                void showAlert('Excelente', 'Datos enviados correctamente.<br>Pronto nos pondremos en contacto contigo.', 'success', '#7f8ac7');
            },

            onError: () => {
                void showAlert('Ups', 'Hubo un error al enviar los datos.', 'error', '#ac3150');
            },
        },
    );

    const hasErrors = Object.keys(errors).length > 0;

    return (
        <form onSubmit={handleSubmit} className={styles.form} noValidate>
            <div className={styles.inputsContainer}>
                <div className={styles.inputContainer}>
                    <label htmlFor="nombre" className={`alliance-text ${errors.nombre ? styles.labelError : ''}`}>
                        Nombre completo
                    </label>

                    <input
                        type="text"
                        className={styles.input}
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        autoComplete="name"
                        required
                        aria-invalid={Boolean(errors.nombre)}
                        aria-describedby={errors.nombre ? 'nombre-error' : undefined}
                        placeholder="Como aparece en tu identificación"
                    />

                    {errors.nombre && (
                        <span id="nombre-error" className={styles.fieldError}>
                            Ingresa tu nombre y apellido
                        </span>
                    )}
                </div>

                <div className={styles.inputContainer}>
                    <label htmlFor="telefono" className={`alliance-text ${errors.telefono ? styles.labelError : ''}`}>
                        Número de teléfono
                    </label>

                    <PhoneInput
                        country={showPhoneUI ? 'mx' : undefined}
                        value={formData.telefono}
                        onFocus={() => {
                            setShowPhoneUI(true);
                        }}
                        onChange={(phone: string) => {
                            const formattedPhone = phone ? `+${phone}` : '';

                            updateField('telefono', formattedPhone);
                        }}
                        inputClass={styles.input}
                        containerClass={showPhoneUI ? 'phone-visible' : 'phone-hidden'}
                        inputProps={{
                            name: 'telefono',
                            required: true,
                            autoComplete: 'tel',
                            id: 'telefono',
                            placeholder: '10 dígitos',
                            'aria-invalid': Boolean(errors.telefono),
                            'aria-describedby': errors.telefono ? 'telefono-error' : undefined,
                        }}
                        enableSearch
                        preferredCountries={['mx', 'us']}
                    />

                    {errors.telefono && (
                        <span id="telefono-error" className={styles.fieldError}>
                            Ingresa un teléfono válido
                        </span>
                    )}
                </div>

                <div className={styles.inputContainer}>
                    <label htmlFor="email" className={`alliance-text ${errors.email ? styles.labelError : ''}`}>
                        Correo electrónico
                    </label>

                    <input
                        type="email"
                        className={styles.input}
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="email"
                        required
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        placeholder="ejemplo@correo.com"
                    />

                    {errors.email && (
                        <span id="email-error" className={styles.fieldError}>
                            Ingresa un correo electrónico válido
                        </span>
                    )}
                </div>

                <CustomSelect
                    label="Estado"
                    name="estado"
                    options={estadosOptions}
                    value={formData.estado}
                    onChange={updateField}
                    error={errors.estado}
                    placeholder="Selecciona..."
                />

                <div className={styles.contentEnvio}>
                    <button type="submit" className="boton-form alliance-text" disabled={loading} aria-busy={loading}>
                        {loading ? (
                            <SpinnerIcon size={22} color="var(--color-white)" strokeWidth={3} speed={1} />
                        ) : (
                            <>
                                Enviar <FlechaIcon className="boton-icono" />
                            </>
                        )}
                    </button>
                </div>

                {hasErrors && (
                    <div className={styles.mensajeErrorGeneral} role="alert" aria-live="polite">
                        <p className="alliance-text">Por favor completa el formulario.</p>
                    </div>
                )}
            </div>
        </form>
    );
};
