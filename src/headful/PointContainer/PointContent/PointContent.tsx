import React from 'react';
import styles from './PointContent.module.scss';

type PointContentProps = {
    children: React.ReactNode;
};

const PointContent = ({ children }: PointContentProps) => {
    return <div className={styles.pointContent}>{children}</div>;
};

export default PointContent;
