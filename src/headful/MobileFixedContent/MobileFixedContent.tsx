import React from 'react';
import styles from './MobileFixedContent.module.scss';

const MobileFixedContent = () => {
    return (
        <div className={styles.mobileFixedContent}>
            <div className={styles.mobile}>
                <a href="#contact" className={styles.mobileButton}>
                    무료 견적 받기
                </a>
                <a href="tel:05082010149" className={`${styles.mobileButton} ${styles.glowing}`}>
                    전화 상담 하기
                </a>
            </div>
        </div>
    );
};

export default MobileFixedContent;
