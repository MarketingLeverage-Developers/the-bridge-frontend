import React from 'react';
import styles from './ContactInput.module.scss';

type ContactInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
};

const ContactInput = ({ label, ...props }: ContactInputProps) => {
    return (
        <div className={styles.contactInput}>
            <label className={styles.label}>{label}</label>
            <input {...props} />
        </div>
    );
};

export default ContactInput;
