import React from 'react';
import styles from './PointCard.module.scss';

type PointCardProps = {
    iconSoruce: string;
    title: React.ReactNode;
    subTitle: React.ReactNode;
};

const PointCard = ({ iconSoruce, title, subTitle }: PointCardProps) => {
    return (
        <div className={styles.pointCard}>
            <div className={styles.imageWrapper}>
                <img src={iconSoruce} />
            </div>
            <div className={styles.title}>{title}</div>
            <div className={styles.subTitle}>{subTitle}</div>
        </div>
    );
};

export default PointCard;
