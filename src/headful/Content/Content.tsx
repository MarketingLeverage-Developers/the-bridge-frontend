import React from 'react';

type ContentProps = {
    maxWidth: number | string;
    children?: React.ReactNode;
};

const Content = ({ maxWidth, children }: ContentProps) => {
    const style: React.CSSProperties = {
        maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth,
    };

    return <div style={style}>{children || 'Content'}</div>;
};

export default Content;
