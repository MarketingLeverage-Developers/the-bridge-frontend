import React from 'react';
import styles from './TalkImage.module.scss';
import TalkImg from '@/assets/images/talk.png';

const TalkImage = () => {
    return <img className={styles.talkImage} src={TalkImg.src}></img>;
};

export default TalkImage;
