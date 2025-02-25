import React from 'react';
import styles from './CopyContainer.module.scss';

type CopyContainerProps = {
    children: React.ReactNode;
};

const CopyContainer = ({ children }: CopyContainerProps) => {
    return <div className={styles.introContainer}>{children}</div>;
};

export default CopyContainer;
