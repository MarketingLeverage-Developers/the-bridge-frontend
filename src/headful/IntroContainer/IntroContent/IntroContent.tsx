import React from 'react';
import styles from './IntroContent.module.scss';

type IntroContentProps = {
    children: React.ReactNode;
};

const IntroContent = ({ children }: IntroContentProps) => {
    return <div className={styles.introContent}>{children}</div>;
};

export default IntroContent;
