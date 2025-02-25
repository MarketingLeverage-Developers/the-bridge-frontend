import React from 'react';
import styles from './RightCard.module.scss';
import RightProfileImage from '@/assets/images/right-profile.png';

const RightCard = () => {
    return (
        <div className={styles.rightCard}>
            <RightTextCircle />
            <RightProfileCircle />
        </div>
    );
};

export default RightCard;

const RightTextCircle = () => {
    return (
        <div className={styles.rightTextCircle}>
            <div>
                직원 채용 부담을
                <br />
                <span style={{ color: '#929292' }}>줄이는</span> <br />
                지원금이 있다면?
            </div>
        </div>
    );
};

const RightProfileCircle = () => {
    return (
        <div className={styles.rightProfileCircle}>
            <RightProfie />
        </div>
    );
};

const RightProfie = () => {
    return <img className={styles.rightProfile} src={RightProfileImage.src} />;
};
