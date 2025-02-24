import React from 'react';
import styles from './IntroContainer.module.scss';

type IntroContainerProps = {
    children: React.ReactNode;
};

const IntroContainer = ({ children }: IntroContainerProps) => {
    return <div className={styles.introContainer}>{children}</div>;
};

export default IntroContainer;
