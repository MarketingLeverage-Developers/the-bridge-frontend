import React from 'react';
import BracketImage from '@/assets/images/bracket.png';
import styles from './ChangeBracket.module.scss';

const ChangeBracket = () => {
    return <img className={styles.changeBracket} src={BracketImage.src} />;
};

export default ChangeBracket;
