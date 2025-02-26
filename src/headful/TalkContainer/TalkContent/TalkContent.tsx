import React from 'react';
import styles from './TalkContent.module.scss';

type TalkContentProps = {
    children: React.ReactNode;
};

const TalkContent = ({ children }: TalkContentProps) => {
    return <div className={styles.talkContent}>{children}</div>;
};

export default TalkContent;
