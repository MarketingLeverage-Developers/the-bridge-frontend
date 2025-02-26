import React from 'react';
import styles from './LeftCard.module.scss';
import LeftProfileImage from '@/assets/images/left-profile.png';
import MobileCard from '../MobileCard/MobileCard';

const LeftCard = () => {
    return (
        <>
            <div className={styles.leftCard}>
                <LeftTextCircle />
                <LeftProfileCircle />
            </div>
            <MobileCard
                text={
                    <div>
                        우리 기업에 맞는
                        <br /> 정부 지원금, <br /> <span style={{ color: '#FFDD54' }}>무엇을 </span> 받을 수 있을까?
                    </div>
                }
                profileSource={LeftProfileImage.src}
            />
        </>
    );
};

export default LeftCard;

const LeftTextCircle = () => {
    return (
        <div className={styles.leftTextCircle}>
            <div>
                직원 채용 부담을
                <br />
                <span style={{ color: '#929292' }}>줄이는</span> <br />
                지원금이 있다면?
            </div>
        </div>
    );
};

const LeftProfileCircle = () => {
    return (
        <div className={styles.leftProfileCircle}>
            <LeftProfie />
        </div>
    );
};

const LeftProfie = () => {
    return <img className={styles.leftProfile} src={LeftProfileImage.src} />;
};
