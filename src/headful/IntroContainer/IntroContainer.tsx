import React from 'react';
import styles from './IntroContainer.module.scss';

type IntroContainerProps = {
    children: React.ReactNode;
};

const IntroContainer = ({ children }: IntroContainerProps) => {
    return (
        <div id="intro" className={styles.introContainer}>
            {children}
        </div>
    );
};

export default IntroContainer;
