import React from 'react';
import styles from './QuestionContent.module.scss';

type QuestionContentProps = {
    children: React.ReactNode;
};

const QuestionContent = ({ children }: QuestionContentProps) => {
    return <div className={styles.questionContent}>{children}</div>;
};

export default QuestionContent;
