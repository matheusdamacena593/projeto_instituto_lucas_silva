import styles from './ButtonStyle.module.scss';

type TypeButtonProps = 'submit' | 'reset' | 'button';

interface ButtonProps {
    text: string;
    onClick?: () => void;
    type?: TypeButtonProps;
}

export default function Button({
    text,
    onClick,
    type = 'button',
}: ButtonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            title={text}
            className={styles.customButton}
        >
            {text}
        </button>
    )
}