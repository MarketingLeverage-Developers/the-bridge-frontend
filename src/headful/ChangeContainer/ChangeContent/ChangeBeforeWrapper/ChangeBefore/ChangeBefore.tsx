import React from 'react';
import styles from './ChangeBefore.module.scss';
import VerticalLineImage from '@/assets/images/vertical-line.svg';

type ChangeBeforeProps = {
    index: number;
    imageSource: string;
};

const ChangeBefore = ({ index, imageSource }: ChangeBeforeProps) => {
    return (
        <div className={styles.changeBefore}>
            <div className={styles.indexArea}>
                <div className={styles.circle}>{index}</div>
                <img className={styles.verticalLine} src={VerticalLineImage.src} />
            </div>
            <img className={styles.changeBeforeImage} src={imageSource} />
        </div>
    );
};

export default ChangeBefore;
