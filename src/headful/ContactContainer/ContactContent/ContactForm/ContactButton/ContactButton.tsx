import React, { ButtonHTMLAttributes } from 'react';
import styles from './ContactButton.module.scss';

type ContactButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
};

const ContactButton = ({ children, ...props }: ContactButtonProps) => {
    return (
        <button {...props} className={styles.contactButton}>
            {children}
        </button>
    );
};

export default ContactButton;
