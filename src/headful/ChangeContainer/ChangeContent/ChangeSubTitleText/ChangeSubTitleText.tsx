import React from 'react';
import styles from './ChangeSubTitleText.module.scss';

const ChangeSubTitleText = () => {
    return (
        <div className={styles.changeSubTitleText}>
            기업 컨설팅 <span style={{ fontWeight: 700 }}>적용 후</span>
            <br />
            <span style={{ fontWeight: 700, color: '#4C9BE8' }}>이렇게 달라졌습니다!</span>
        </div>
    );
};

export default ChangeSubTitleText;
