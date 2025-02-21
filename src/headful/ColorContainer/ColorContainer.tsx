import React, { HTMLAttributes } from 'react';
import styles from './ColorContainer.module.scss';

type ColorContainerProps = HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
    backgroundColor: string;
};

const ColorContainer = ({ children, backgroundColor, ...props }: ColorContainerProps) => {
    return (
        <div {...props} className={styles.colorContainer} style={{ backgroundColor }}>
            {children}
        </div>
    );
};

export default ColorContainer;
