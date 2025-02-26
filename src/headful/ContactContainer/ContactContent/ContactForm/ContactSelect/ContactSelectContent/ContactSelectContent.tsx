import React from 'react';
import Dropdown from '@/headless/Dropdown/Dropdown';
import styles from './ContactSelectContent.module.scss';

type ContactSelectContentProps = {
    children: React.ReactNode;
};

const ContactSelectContent = ({ children }: ContactSelectContentProps) => {
    return <Dropdown.Content className={styles.contactSelectContent}>{children}</Dropdown.Content>;
};

export default ContactSelectContent;
