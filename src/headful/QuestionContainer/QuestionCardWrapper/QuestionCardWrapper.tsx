'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from './QuestionCardWrapper.module.scss';

type QuestionCardWrapperProps = {
    children: React.ReactNode;
};

const QuestionCardWrapper = ({ children }: QuestionCardWrapperProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.intersectionRatio >= 0.3) {
                    setVisible(true);
                    observer.disconnect(); // 30% 이상 보이면 더 이상 감시하지 않음
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
        <div ref={ref} className={`${styles.questionCardWrapper} ${visible ? styles.visible : styles.hidden}`}>
            {children}
        </div>
    );
};

export default QuestionCardWrapper;
