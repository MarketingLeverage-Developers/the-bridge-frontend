import React, { HTMLAttributes } from 'react';
import styles from './Container.module.scss';

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
    backgroundColor: string;
};

const Container = ({ children, backgroundColor, ...props }: ContainerProps) => {
    return (
        <div {...props} className={styles.container} style={{ backgroundColor }}>
            {children}
        </div>
    );
};

export default Container;
