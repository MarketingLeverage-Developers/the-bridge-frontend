import React from 'react';
import styles from './IntroContainer.module.scss';

type IntroContainerProps = {
    children: React.ReactNode;
    imageSource: string;
};

const IntroContainer = ({ children, imageSource }: IntroContainerProps) => {
    return (
        <div id="intro" className={styles.introContainer} style={{ backgroundImage: `url(${imageSource})` }}>
            {children}
        </div>
    );
};

export default IntroContainer;
