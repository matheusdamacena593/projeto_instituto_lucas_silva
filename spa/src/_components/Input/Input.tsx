import styles from './InputStyle.module.scss';

type TypeInputProps = 'text' | 'password';

interface InputProps {
    placeholder?: string;
    type?: TypeInputProps;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
    placeholder,
    type = 'text',
    value,
    onChange,
}: InputProps) {
    return (
        <div>
            <input
                placeholder={placeholder}
                type={type}
                className={styles.customInput}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}