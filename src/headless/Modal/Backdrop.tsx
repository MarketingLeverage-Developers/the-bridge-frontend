import React from 'react';
import { useModal } from './Modal';

type BackdropProps = React.HTMLAttributes<HTMLDivElement>;

const backdropStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 99,
};

const Backdrop = (props: BackdropProps) => {
    const { modalValue, closeModal } = useModal();

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation(); // 이벤트 버블링 중단
        if (props.onMouseDown) {
            props.onMouseDown(e);
        }
        closeModal();
    };

    return <>{modalValue && <div style={backdropStyle} onMouseDown={handleMouseDown} {...props} />}</>;
};

export default Backdrop;
