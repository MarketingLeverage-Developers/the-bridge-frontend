import React from 'react';
import styles from './IntroTitleText.module.scss';

const IntroTitleText = () => {
    const text = `소상공인과 기업을
위한 정책자금 컨설팅`;

    const characters = text.split('').map((char, index) => {
        if (char === '\n') {
            return <br key={index} />;
        }
        return (
            <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                {char}
            </span>
        );
    });

    return <div className={styles.introTitleText}>{characters}</div>;
};

export default IntroTitleText;
