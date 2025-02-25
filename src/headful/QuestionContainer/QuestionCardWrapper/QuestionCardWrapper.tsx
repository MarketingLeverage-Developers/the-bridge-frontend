import React from 'react';
import styles from './QuestionCardWrapper.module.scss';

type QuestionCardWrapperProps = {
    children: React.ReactNode;
};

const QuestionCardWrapper = ({ children }: QuestionCardWrapperProps) => {
    return <div className={styles.questionCardWrapper}>{children}</div>;
};

export default QuestionCardWrapper;
