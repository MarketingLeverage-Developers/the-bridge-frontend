import React from 'react';
import styles from './IntroDescriptionText.module.scss';

type IntroDescriptionTextProps = {
    children: React.ReactNode;
};

const IntroDescriptionText = ({ children }: IntroDescriptionTextProps) => {
    //     const text = `소상공인과 기업을 위한 정책자금 컨설팅
    // 최대 100억 원까지 받을 수 있는
    // 정부지원금 체크하세요`;

    //     const characters = text.split('').map((char, index) => {
    //         if (char === '\n') {
    //             return <br key={index} />;
    //         }
    //         return (
    //             <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
    //                 {char}
    //             </span>
    //         );
    //     });

    return <div className={styles.introDescriptionText}>{children}</div>;
};

export default IntroDescriptionText;
