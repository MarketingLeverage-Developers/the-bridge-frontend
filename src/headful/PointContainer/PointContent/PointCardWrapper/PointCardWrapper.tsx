import React from 'react';
import styles from './PointCardWrapper.module.scss';

type PointCardWrapperProps = {
    children: React.ReactNode;
};

const PointCardWrapper = ({ children }: PointCardWrapperProps) => {
    return <div className={styles.pointCardWrapper}>{children}</div>;
};

export default PointCardWrapper;
