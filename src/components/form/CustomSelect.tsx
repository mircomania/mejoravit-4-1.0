'use client';

import Select, { type SingleValue } from 'react-select';

import styles from '../../styles/modules/form.module.css';

import type { FormField } from '../../types/form';

import { stylesSelect } from './stylesSelect';

export interface SelectOption {
    value: string;
    label: string;
}

interface CustomSelectProps {
    label: string;
    name: FormField;
    options: SelectOption[];
    value: string;
    onChange: (name: FormField, value: string) => void;
    error?: boolean;
    placeholder?: string;
}

export const CustomSelect = ({ label, name, options, value, onChange, error = false, placeholder = 'Selecciona una opción' }: CustomSelectProps) => {
    const selectedOption = options.find((option) => option.value === value) ?? null;

    const handleSelectChange = (selected: SingleValue<SelectOption>): void => {
        onChange(name, selected?.value ?? '');
    };

    return (
        <div className={`${styles.inputContainer} select-scope`}>
            <label htmlFor={name} className={`alliance-text ${error ? styles.labelError : ''}`}>
                {label}
            </label>

            <Select<SelectOption, false>
                options={options}
                value={selectedOption}
                onChange={handleSelectChange}
                placeholder={placeholder}
                aria-invalid={error}
                aria-describedby={error ? `${name}-error` : undefined}
                isSearchable={false}
                inputId={name}
                name={name}
                styles={stylesSelect}
            />

            {error && (
                <span id={`${name}-error`} className={styles.fieldError}>
                    Selecciona una opción
                </span>
            )}
        </div>
    );
};
