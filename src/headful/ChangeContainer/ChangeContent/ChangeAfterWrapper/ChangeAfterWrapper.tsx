import React from 'react';
import styles from './ChangeAfterWrapper.module.scss';

type ChangeAfterWrapperProps = {
    children: React.ReactNode;
};

const ChangeAfterWrapper = ({ children }: ChangeAfterWrapperProps) => {
    return <div className={styles.changeAfterWrapper}>{children}</div>;
};

export default ChangeAfterWrapper;
