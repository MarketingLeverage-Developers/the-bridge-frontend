'use client';
import Dropdown from '@/headless/Dropdown/Dropdown';
import SelectGroup from '@/headless/SelectGroup/SelectGroup';
import React from 'react';
import IntroSelectItem from './IntroSelectItem/IntroSelectItem';
import IntroSelectContent from './IntroSelectContent/IntroSelectContent';
import IntroSelectTrigger from './IntroSelectTrigger/IntroSelectTrigger';
import styles from './IntroSelect.module.scss';

type IntroSelectProps = {
    children: React.ReactNode;
    defaultValue: string;
};

const IntroSelect = ({ children, defaultValue }: IntroSelectProps) => {
    return (
        <SelectGroup defaultValue={defaultValue}>
            <Dropdown>
                <Dropdown.Box className={styles['intro-select__box']}>{children}</Dropdown.Box>
            </Dropdown>
        </SelectGroup>
    );
};

export default IntroSelect;

IntroSelect.Item = IntroSelectItem;
IntroSelect.Content = IntroSelectContent;
IntroSelect.Trigger = IntroSelectTrigger;
