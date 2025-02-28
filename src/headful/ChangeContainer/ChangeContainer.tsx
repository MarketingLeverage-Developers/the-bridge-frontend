import React from 'react';
import styles from './ChangeContainer.module.scss';

type ChangeContainerProps = {
    children: React.ReactNode;
};

const ChangeContainer = ({ children }: ChangeContainerProps) => {
    return (
        <div id="change" className={styles.changeContainer}>
            {children}
        </div>
    );
};

export default ChangeContainer;
