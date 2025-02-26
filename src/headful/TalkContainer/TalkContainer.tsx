import React from 'react';
import styles from './TalkContainer.module.scss';

type TalkContainerProps = {
    children: React.ReactNode;
};

const TalkContainer = ({ children }: TalkContainerProps) => {
    return <div className={styles.talkContainer}>{children}</div>;
};

export default TalkContainer;
