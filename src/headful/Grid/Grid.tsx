import React, { FC, ReactNode, CSSProperties } from 'react';

interface GridProps {
    children: ReactNode;
    gap?: string;
}

interface GridRowProps {
    children: ReactNode;
    gap?: string;
}

const Grid: FC<GridProps> & { Row: FC<GridRowProps> } = ({ children, gap = '10px' }) => {
    return <div style={{ display: 'flex', flexDirection: 'column', gap }}>{children}</div>;
};

const GridRow: FC<GridRowProps> = ({ children, gap = '10px' }) => {
    // 자식의 개수에 따라 그리드 컬럼을 설정합니다.
    const itemCount = React.Children.count(children);
    const style: CSSProperties = {
        display: 'grid',
        gridTemplateColumns: `repeat(${itemCount}, 1fr)`,
        gap,
    };

    return <div style={style}>{children}</div>;
};

Grid.Row = GridRow;

export default Grid;
