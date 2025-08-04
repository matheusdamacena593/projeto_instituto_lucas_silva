import styles from './InputStyle.module.scss';

type TypeInputProps = 'text' | 'password';

interface InputProps {
    placeholder?: string;
    type?: TypeInputProps;
}

export default function Input({
    placeholder,
    type = 'text',
}: InputProps) {
    return (
        <div>
            <input
                placeholder={placeholder}
                type={type}
                className={styles.customInput}
            />
        </div>
    )
}