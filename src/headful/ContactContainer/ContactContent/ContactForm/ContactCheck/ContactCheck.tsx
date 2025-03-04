import React, { ChangeEventHandler } from 'react';
import styles from './ContactCheck.module.scss';
import TermModal from '@/headful/TermModal/TermModal';

type CotactCheckProps = {
    checked: boolean;
    onCheckBoxClick: ChangeEventHandler<HTMLInputElement>;
};

const ContactCheck = ({ checked, onCheckBoxClick }: CotactCheckProps) => {
    return (
        <div className={styles.contactCheck}>
            <input className={styles.checkbox} type="checkbox" checked={checked} onChange={onCheckBoxClick} />
            <span>개인정보 수집 및 이용에 동의합니다.</span>
            <TermModal />
        </div>
    );
};

export default ContactCheck;
