import React from 'react';
import styles from './RightCard.module.scss';
import RightProfileImage from '@/assets/images/right-profile.png';
import MobileCard from '../MobileCard/MobileCard';

const RightCard = () => {
    return (
        <>
            <div className={styles.rightCard}>
                <RightTextCircle />
                <RightProfileCircle />
            </div>
            <MobileCard
                text={
                    <div>
                        높아지는 세금 부담,
                        <br />
                        지금 할 수 있는
                        <br /> <span style={{ color: '#FFDD54' }}>절세 전략</span>은?
                    </div>
                }
                profileSource={RightProfileImage.src}
            />
        </>
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
