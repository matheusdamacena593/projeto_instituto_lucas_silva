import styles from './ButtonStyle.module.scss';

type TypeButtonProps = 'submit' | 'reset' | 'button';

interface ButtonProps {
    text: string;
    onClick?: () => void;
    type?: TypeButtonProps;
    disabled?: boolean;
}

export default function Button({
    text,
    onClick,
    type = 'button',
    disabled = false
}: ButtonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            title={text}
            className={styles.customButton}
            disabled={disabled}
        >
            {text}
        </button>
    )
}