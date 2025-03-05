'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from './ChangeBefore.module.scss';
import VerticalLineImage from '@/assets/images/vertical-line.svg';

type ChangeBeforeProps = {
    index: number;
    imageSource: string;
};

const ChangeBefore = ({ index, imageSource }: ChangeBeforeProps) => {
    const [visible, setVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // 50% 이상 보일 때 visible을 true로 설정합니다.
                if (entry.intersectionRatio >= 0.5) {
                    setVisible(true);
                    observer.disconnect(); // 한 번만 애니메이션 되도록 observer 종료
                }
            },
            { threshold: 0.5 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div ref={containerRef} className={`${styles.changeBefore} ${visible ? styles.visible : ''}`}>
            <div className={styles.indexArea}>
                <div className={styles.circle}>{index}</div>
                <img loading="lazy" className={styles.verticalLine} src={VerticalLineImage.src} alt="Vertical Line" />
            </div>
            <img loading="lazy" className={styles.changeBeforeImage} src={imageSource} alt="Change Before" />
        </div>
    );
};

export default ChangeBefore;
