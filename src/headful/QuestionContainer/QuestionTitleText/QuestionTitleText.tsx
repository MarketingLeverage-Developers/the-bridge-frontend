import React from 'react';
import styles from './QuestionTitleText.module.scss';

const QuestionTitleText = () => {
    return (
        <div className={styles.questionTitleText}>
            <div className={styles.first}>기업 운영 부담 줄이는</div>
            <div className={styles.second}>현실적인 해결책</div>
            <div className={styles.third}>더 브릿지 랩</div>
        </div>
    );
};

export default QuestionTitleText;
