'use client';
import Dropdown from '@/headless/Dropdown/Dropdown';
import React from 'react';
import styles from './FixedContent.module.scss';
import FixedForm from './FixedForm/FixedForm';
import FixedImage from '@/assets/images/fixed.png';

const FixedContent = () => {
    return (
        <Dropdown>
            <Dropdown.Box className={styles.fixedContent}>
                <Dropdown.Trigger className={styles.trigger}>
                    <img src={FixedImage.src} />
                </Dropdown.Trigger>
                <Dropdown.Content className={styles.form}>
                    <FixedForm />
                </Dropdown.Content>
            </Dropdown.Box>
        </Dropdown>
    );
};

export default FixedContent;
