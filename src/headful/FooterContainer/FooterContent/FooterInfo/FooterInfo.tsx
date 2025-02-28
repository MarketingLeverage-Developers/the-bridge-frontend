import React from 'react';
import styles from './FooterInfo.module.scss';
import Logo from '@/headful/HeaderContent/Logo/Logo';

const FooterInfo = () => {
    return (
        <div className={styles.footerInfo}>
            <Logo style={{ height: 77, width: 235 }} />
            <div className={styles.text}>
                <div className={styles.license}>
                    <div className={styles.firstLine}>
                        <div className={styles.name}>
                            <span>대표자</span> 이지섭
                        </div>
                        <div className={styles.number}>
                            <span>사업자 등록번호</span> 616-86-30962
                        </div>
                    </div>
                    <div className={styles.secondLine}>
                        <span>주소</span>
                        경기도 남양주시 퇴계원읍 퇴계원로 117,
                        <br /> 3층 301-95호(염광빌딩)
                    </div>
                </div>
                <div className={styles.name}>
                    <span style={{ color: '#393939' }}>한국법인거래소</span> |{' '}
                    <span style={{ color: '#364F87' }}>더 브릿지 랩</span>
                </div>
            </div>
        </div>
    );
};

export default FooterInfo;
