import React from 'react';
import styles from './ChangeAfter.module.scss';

type changeAfterProps = {
    imageSource: string;
};

const ChangeAfter = ({ imageSource }: changeAfterProps) => {
    return <img className={styles.changeAfter} src={imageSource}></img>;
};

export default ChangeAfter;
