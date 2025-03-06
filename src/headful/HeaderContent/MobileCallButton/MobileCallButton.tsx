import React from 'react';
import styles from './MobileCallButton.module.scss';
import CallImage from '@/assets/images/call.webp';

const MobileCallButton = () => {
    return (
        <a href="tel:05082010040" className={`${styles.callImage} ${styles.glowing}`}>
            <img loading="lazy" src={CallImage.src} alt="전화 이미지" className={styles.image} />
        </a>
    );
};

export default MobileCallButton;
