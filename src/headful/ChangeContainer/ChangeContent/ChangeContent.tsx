import React from 'react';
import styles from './ChangeContent.module.scss';

type ChangeContentProps = {
    children: React.ReactNode;
};

const ChangeContent = ({ children }: ChangeContentProps) => {
    return <div className={styles.changeContent}>{children}</div>;
};

export default ChangeContent;
