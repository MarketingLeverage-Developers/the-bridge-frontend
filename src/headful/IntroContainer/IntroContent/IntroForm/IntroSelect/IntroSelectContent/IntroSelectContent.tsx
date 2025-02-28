import React from 'react';
import Dropdown from '@/headless/Dropdown/Dropdown';
import styles from './IntroSelectContent.module.scss';

type IntroSelectContentProps = {
    children: React.ReactNode;
};

const IntroSelectContent = ({ children }: IntroSelectContentProps) => {
    return <Dropdown.Content className={styles.introSelectContent}>{children}</Dropdown.Content>;
};

export default IntroSelectContent;
