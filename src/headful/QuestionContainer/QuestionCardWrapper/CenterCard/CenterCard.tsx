import React from 'react';
import styles from './CenterCard.module.scss';
import CenterProfileImage from '@/assets/images/center-profile.png';
import MobileCard from '../MobileCard/MobileCard';

const CenterCard = () => {
    return (
        <>
            <div className={styles.centerCard}>
                <CenterTextCircle />
                <CenterProfileCircle />
            </div>
            <MobileCard
                text={
                    <div>
                        직원 채용 부담을
                        <br /> <span style={{ color: '#FFDD54' }}>줄이는</span>
                        <br /> 지원금이 있다면?
                    </div>
                }
                profileSource={CenterProfileImage.src}
            />
        </>
    );
};

export default CenterCard;

const CenterTextCircle = () => {
    return (
        <div className={styles.centerTextCircle}>
            <div>
                우리 기업에 맞는
                <br />
                정부지원금,
                <br />
                <span style={{ color: '#FFDD54' }}>무엇을</span>받을 수 있을까?
            </div>
        </div>
    );
};

const CenterProfileCircle = () => {
    return (
        <div className={styles.centerProfileCircle}>
            <CenterProfie />
        </div>
    );
};

const CenterProfie = () => {
    return <img className={styles.centerProfile} src={CenterProfileImage.src} />;
};
