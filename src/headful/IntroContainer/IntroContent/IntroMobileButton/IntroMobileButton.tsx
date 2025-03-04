import React from 'react';
import styles from './IntroMobileButton.module.scss';

const IntroMobileButton = () => {
    return (
        <button className={styles.introInquiryButton}>
            <a href="#contact">상담 신청하기</a>
        </button>
    );
};

export default IntroMobileButton;
