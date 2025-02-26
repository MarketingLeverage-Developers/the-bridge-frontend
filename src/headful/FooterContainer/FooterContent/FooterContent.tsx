import React from 'react';
import styles from './FooterContent.module.scss';

type FooterContentProps = {
    children: React.ReactNode;
};

const FooterContent = ({ children }: FooterContentProps) => {
    return <div className={styles.footerContent}>{children}</div>;
};

export default FooterContent;
