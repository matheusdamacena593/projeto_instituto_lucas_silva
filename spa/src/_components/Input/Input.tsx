import styles from './InputStyle.module.scss';

type TypeInputProps = 'text' | 'password';

interface InputProps {
    placeholder?: string;
    type?: TypeInputProps;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}

export default function Input({
    placeholder,
    type = 'text',
    value,
    onChange,
    value,
    onChange,
    required = false,
}: InputProps) {
    return (
        <div>
            <input
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={onChange}
                className={styles.customInput}
                value={value}
                onChange={onChange}
                required={required}
            />
        </div>
    );
}
