'use client';
import React from 'react';
import Dropdown from '@/headless/Dropdown/Dropdown';
import SelectGroup, { useSelectGroup } from '@/headless/SelectGroup/SelectGroup';
import styles from './IntroSelectTrigger.module.scss';
import SelectArrowImage from '@/assets/images/select-arrow.svg';

type IntroSelectTriggerProps = {
    label: React.ReactNode;
    placeholder: string;
};

const IntroSelectTrigger = ({ label, placeholder }: IntroSelectTriggerProps) => {
    const { selectGroupValue } = useSelectGroup();

    const isNotSeleted = selectGroupValue === '';

    return (
        <Dropdown.Trigger className={styles.introTrigger}>
            <label className={styles.label}>{label}</label>

            <div className={styles.introDisplay}>
                {isNotSeleted && <div className={styles.placeholder}>{placeholder}</div>}
                <SelectGroup.Display />
                <img loading="lazy" className={styles.selectArrow} src={SelectArrowImage.src} />
            </div>
        </Dropdown.Trigger>
    );
};

export default IntroSelectTrigger;
