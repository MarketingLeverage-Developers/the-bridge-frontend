'use client';
import React from 'react';
import Dropdown from '@/headless/Dropdown/Dropdown';
import SelectGroup, { useSelectGroup } from '@/headless/SelectGroup/SelectGroup';
import styles from './ContactSelectTrigger.module.scss';
import SelectArrowImage from '@/assets/images/select-arrow.svg';

type ContactSelectTriggerProps = {
    label: React.ReactNode;
    placeholder: string;
};

const ContactSelectTrigger = ({ label, placeholder }: ContactSelectTriggerProps) => {
    const { selectGroupValue } = useSelectGroup();

    const isNotSeleted = selectGroupValue === '';

    return (
        <Dropdown.Trigger className={styles.contactTrigger}>
            <label className={styles.label}>{label}</label>
            <div className={styles.contactDisplay}>
                {isNotSeleted && <div className={styles.placeholder}>{placeholder}</div>}
                <SelectGroup.Display />
            </div>
            <img src={SelectArrowImage.src} />
        </Dropdown.Trigger>
    );
};

export default ContactSelectTrigger;
