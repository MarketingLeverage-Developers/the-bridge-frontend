import React from 'react';
import styles from './PointInquiryButton.module.scss';

const PointInquiryButton = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <button className={styles.pointInquiryButton}>상담신청하기</button>
        </div>
    );
};

export default PointInquiryButton;
