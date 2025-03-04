import React from 'react';
import styles from './IntroTitleText.module.scss';

type IntroTitleTextProps = {
    children: React.ReactNode;
};

const IntroTitleText = ({ children }: IntroTitleTextProps) => {
    return <div className={styles.introTitleText}>{children}</div>;
};

export default IntroTitleText;
