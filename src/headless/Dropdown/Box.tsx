import React from 'react';
import classNames from 'classnames';

type BoxProps = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
};

const Box = ({ children, className, style, ...props }: BoxProps) => {
    const baseStyle: React.CSSProperties = {
        position: 'relative',
        display: 'inline-block',
    };
    // 기본 CSS 클래스(styles.box)와 외부로 받은 className을 병합합니다.
    const combinedClassName = classNames(baseStyle, className);

    return (
        <div {...props} className={combinedClassName}>
            {children}
        </div>
    );
};

export default Box;
