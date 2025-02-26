import React from 'react';
import styles from './ContactText.module.scss';

const ContactText = () => {
    return (
        <div className={styles.contactText}>
            <div className={styles.title}>상담신청</div>
            <div className={styles.description}>
                기업 운영에 필요한 <span style={{ color: '#4C9BE8' }}>정부지원</span>과{' '}
                <span style={{ color: '#4C9BE8' }}>정책자금</span>!
                <br />
                전문가의 컨설팅이 필요하다면 <span style={{ color: '#4C9BE8' }}>더 브릿지 랩</span>에 문의하세요.
                <br />
                <span style={{ color: '#4C9BE8' }}>빠르고 정확한 상담</span>으로 도와드리겠습니다!
            </div>
        </div>
    );
};

export default ContactText;
