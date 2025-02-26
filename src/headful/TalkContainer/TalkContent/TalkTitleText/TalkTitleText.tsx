import React from 'react';
import styles from './TalkTitleText.module.scss';

const TalkTitleText = () => {
    return (
        <div className={styles.talkTitleText}>
            <div className={styles.first}>비즈니스 성장을 위한</div>
            <div className={styles.second}>꾸준한 피드백, 맞춤 컨설팅</div>
            <div className={styles.third}>더브릿지 랩 지금 시작하세요!</div>
        </div>
    );
};

export default TalkTitleText;
