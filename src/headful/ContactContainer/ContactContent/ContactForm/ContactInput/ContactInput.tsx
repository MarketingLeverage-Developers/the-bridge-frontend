import React, { forwardRef } from 'react';
import styles from './ContactInput.module.scss';

type ContactInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
};

const ContactInput = forwardRef<HTMLInputElement, ContactInputProps>(({ label, ...props }, ref) => {
    return (
        <div className={styles.contactInput}>
            <label className={styles.label}>{label}</label>
            <input ref={ref} {...props} />
        </div>
    );
});

export default ContactInput;
