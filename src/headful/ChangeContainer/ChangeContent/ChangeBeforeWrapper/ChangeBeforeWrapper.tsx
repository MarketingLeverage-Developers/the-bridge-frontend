import React from 'react';
import styles from './ChangeBeforeWrapper.module.scss';

type ChangeBeforeWrapperProps = {
    children: React.ReactNode;
};

const ChangeBeforeWrapper = ({ children }: ChangeBeforeWrapperProps) => {
    return <div className={styles.changeBeforeWrapper}>{children}</div>;
};

export default ChangeBeforeWrapper;
