import React from 'react';
import styles from './MobileCard.module.scss';

type MobileCardProps = {
    text: React.ReactNode;
    profileSource: string;
};

const MobileCard = ({ text, profileSource }: MobileCardProps) => {
    return (
        <div className={styles.mobileCard}>
            <div className={styles.text}>{text}</div>
            <div className={styles.circle}>
                <img loading="lazy" src={profileSource} className={styles.profile} />
            </div>
        </div>
    );
};

export default MobileCard;
