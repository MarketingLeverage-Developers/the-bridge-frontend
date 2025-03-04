'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from './ChangeAfter.module.scss';

type ChangeAfterProps = {
    imageSource: string;
};

const ChangeAfter = ({ imageSource }: ChangeAfterProps) => {
    const ref = useRef<HTMLImageElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.intersectionRatio >= 0.3) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <img
            ref={ref}
            className={`${styles.changeAfter} ${visible ? styles.visible : styles.hidden}`}
            src={imageSource}
            alt="Change After"
        />
    );
};

export default ChangeAfter;
