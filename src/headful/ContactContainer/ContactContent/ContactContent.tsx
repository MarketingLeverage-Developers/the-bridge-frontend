import React from 'react';
import styles from './ContactContent.module.scss';

type ContactContentProps = {
    children: React.ReactNode;
};

const ContactContent = ({ children }: ContactContentProps) => {
    return <div className={styles.contactContent}>{children}</div>;
};

export default ContactContent;
