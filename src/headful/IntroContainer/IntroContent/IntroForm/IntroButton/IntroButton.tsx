import React, { ButtonHTMLAttributes } from 'react';
import styles from './IntroButton.module.scss';

type IntroButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
};

const IntroButton = ({ children, ...props }: IntroButtonProps) => {
    return (
        <button {...props} className={styles.introButton}>
            {children}
        </button>
    );
};

export default IntroButton;
