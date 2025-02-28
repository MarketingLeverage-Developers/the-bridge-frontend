import React from 'react';
import styles from './QuestionContainer.module.scss';

type QuestionContainerProps = {
    children: React.ReactNode;
};

const QuestionContainer = ({ children }: QuestionContainerProps) => {
    return (
        <div id="question" className={styles.questionContainer}>
            {children}
        </div>
    );
};

export default QuestionContainer;
