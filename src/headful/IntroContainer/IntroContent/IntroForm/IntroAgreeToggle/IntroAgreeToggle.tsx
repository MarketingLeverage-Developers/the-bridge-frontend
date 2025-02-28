import React, { ChangeEventHandler } from 'react';
import styles from './IntroAgreeToggle.module.scss';

type CotactCheckProps = {
    checked: boolean;
    onCheckBoxClick: ChangeEventHandler<HTMLInputElement>;
};

const IntroAgreeToggle = ({ checked, onCheckBoxClick }: CotactCheckProps) => {
    return (
        <div className={styles.introAgreeToggle}>
            <input type="checkbox" checked={checked} onChange={onCheckBoxClick} />
            <span>개인정보 수집 및 이용에 동의합니다.</span>
        </div>
    );
};

export default IntroAgreeToggle;
