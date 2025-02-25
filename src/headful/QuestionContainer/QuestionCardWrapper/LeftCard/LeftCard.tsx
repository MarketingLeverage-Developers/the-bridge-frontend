import React from 'react';
import styles from './LeftCard.module.scss';
import LeftProfileImage from '@/assets/images/left-profile.png';

const LeftCard = () => {
    return (
        <div className={styles.leftCard}>
            <LeftTextCircle />
            <LeftProfileCircle />
        </div>
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
