'use client';
import React, { useEffect, useRef, useState } from 'react';
import BracketImage from '@/assets/images/bracket.webp';
import styles from './ChangeBracket.module.scss';

const ChangeBracket = () => {
    const ref = useRef<HTMLImageElement>(null);
    const [rotated, setRotated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // 요소가 100% 보이면
                if (entry.intersectionRatio === 1) {
                    setRotated(true);
                    observer.disconnect();
                }
            },
            { threshold: 1.0 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <img
            loading="lazy"
            ref={ref}
            className={`${styles.changeBracket} ${rotated ? styles.rotated : ''}`}
            src={BracketImage.src}
            alt="Bracket"
        />
    );
};

export default ChangeBracket;
