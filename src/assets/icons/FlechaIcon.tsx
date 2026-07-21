import type { iconProps } from '../../types/iconProps';

export function FlechaIcon({ className = '' }: iconProps) {
    return (
        <svg viewBox="0 0 15.549 15.549" fill="currentColor" aria-label="Flecha hacia la derecha" className={className}>
            <path d="M11.832 8.746H0V6.802H11.832L6.39 1.361L7.775 0L15.549 7.775L7.775 15.549L6.39 14.188L11.832 8.746Z" />
        </svg>
    );
}
