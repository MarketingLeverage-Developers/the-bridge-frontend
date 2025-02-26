'use client';
import Dropdown from '@/headless/Dropdown/Dropdown';
import SelectGroup from '@/headless/SelectGroup/SelectGroup';
import React from 'react';
import ContactSelectItem from './ContactSelectItem/ContactSelectItem';
import ContactSelectContent from './ContactSelectContent/ContactSelectContent';
import ContactSelectTrigger from './ContactSelectTrigger/ContactSelectTrigger';
import styles from './ContactSelect.module.scss';

type ContactSelectProps = {
    children: React.ReactNode;
    defaultValue: string;
};

const ContactSelect = ({ children, defaultValue }: ContactSelectProps) => {
    return (
        <SelectGroup defaultValue={defaultValue}>
            <Dropdown>
                <Dropdown.Box className={styles['contact-select__box']}>{children}</Dropdown.Box>
            </Dropdown>
        </SelectGroup>
    );
};

export default ContactSelect;

ContactSelect.Item = ContactSelectItem;
ContactSelect.Content = ContactSelectContent;
ContactSelect.Trigger = ContactSelectTrigger;
