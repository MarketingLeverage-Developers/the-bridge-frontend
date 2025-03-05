'use client';
import Dropdown, { useDropdown } from '@/headless/Dropdown/Dropdown';
import React, { useEffect, useRef, useState } from 'react';
import styles from './FixedContent.module.scss';
import FixedForm from './FixedForm/FixedForm';
import FixedImage from '@/assets/images/fixed.png';

const FixedContent = () => {
    return (
        <Dropdown>
            {/* <ScrollAutoClose /> */}
            <Dropdown.Box className={styles.fixedContent}>
                <Dropdown.Trigger className={styles.trigger}>
                    <img src={FixedImage.src} />
                </Dropdown.Trigger>
                <Dropdown.Content className={styles.form}>
                    <FixedForm />
                    <Closebutton />
                </Dropdown.Content>
            </Dropdown.Box>
        </Dropdown>
    );
};

export default FixedContent;

const Closebutton = () => {
    const { closeDropdown } = useDropdown();

    return (
        <button className={styles.closeButton} onClick={closeDropdown}>
            X
        </button>
    );
};

// const ScrollAutoClose = () => {
//     const { closeDropdown, dropdownValue } = useDropdown();
//     const initialScrollYRef = useRef<number | null>(null);

//     // Dropdown이 열릴 때 현재 스크롤 위치를 저장
//     useEffect(() => {
//         if (dropdownValue) {
//             initialScrollYRef.current = window.scrollY;
//         } else {
//             initialScrollYRef.current = null;
//         }
//     }, [dropdownValue]);

//     useEffect(() => {
//         if (!dropdownValue) return;

//         const handleScroll = () => {
//             if (initialScrollYRef.current === null) return;
//             const scrollDiff = Math.abs(window.scrollY - initialScrollYRef.current);
//             if (scrollDiff >= 500) {
//                 closeDropdown();
//             }
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, [dropdownValue, closeDropdown]);

//     return null;
// };
