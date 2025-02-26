import React from 'react';
import styles from './ContactContainer.module.scss';

type ContactContainerProps = {
    children: React.ReactNode;
};

const ContactContainer = ({ children }: ContactContainerProps) => {
    return <div className={styles.contactContainer}>{children}</div>;
};

export default ContactContainer;
