import React, { forwardRef } from 'react';
import styles from './IntroInput.module.scss';

type IntroInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
};

const IntroInput = forwardRef<HTMLInputElement, IntroInputProps>(({ label, ...props }, ref) => {
    return (
        <div className={styles.introInput}>
            {label && <label className={styles.label}>{label}</label>}
            <input ref={ref} {...props} />
        </div>
    );
});

export default IntroInput;
