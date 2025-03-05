import React from 'react';
import styles from './FooterRight.module.scss';
import ArrowImage from '@/assets/images/button-arrow.webp';

const FooterRight = () => {
    return (
        <div className={styles.footerRight}>
            <div className={styles.title}>고객문의</div>
            <div className={styles.phoneNumber}>050-8201-0040</div>
            <div className={styles.time}>
                <span>상담시간</span> 09:00 ~ 18:00 <span>토 일요일, 공휴일 휴무</span>
            </div>
            <a href="#intro">
                <button>
                    간편 상담 바로가기 <img loading="lazy" style={{ height: 20 }} src={ArrowImage.src} />
                </button>
            </a>
        </div>
    );
};

export default FooterRight;
