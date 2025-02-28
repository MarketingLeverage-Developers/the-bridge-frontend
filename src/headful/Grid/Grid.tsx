import React, { FC, ReactNode, CSSProperties } from 'react';

interface GridProps {
    children: ReactNode;
    gap?: string;
    className?: string;
}

interface GridRowProps {
    children: ReactNode;
    gap?: string;
    className?: string;
}

const Grid: FC<GridProps> & { Row: FC<GridRowProps> } = ({ children, gap = '10px', className }) => {
    return (
        <div className={className} style={{ display: 'flex', flexDirection: 'column', gap }}>
            {children}
        </div>
    );
};

const GridRow: FC<GridRowProps> = ({ children, gap = '10px', className }) => {
    const itemCount = React.Children.count(children);
    const style: CSSProperties = {
        display: 'grid',
        gridTemplateColumns: `repeat(${itemCount}, 1fr)`,
        gap,
        alignItems: 'end',
    };

    return <div style={style}>{children}</div>;
};

Grid.Row = GridRow;

export default Grid;
