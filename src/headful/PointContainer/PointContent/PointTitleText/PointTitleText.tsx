import React from 'react';
import styles from './PointTitleText.module.scss';

const PointTitleText = () => {
    return (
        <div className={styles.pointTitleText}>
            <div>기업에 컨디션에 맞게</div>
            <div>
                <span className={styles.strong}>맞춤형 자금 컨설팅</span>을 해드립니다.
            </div>
        </div>
    );
};

export default PointTitleText;
