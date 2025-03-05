import React from 'react';
import styles from './TalkImage.module.scss';
import TalkImg from '@/assets/images/talk.webp';

const TalkImage = () => {
    return <img loading="lazy" className={styles.talkImage} src={TalkImg.src}></img>;
};

export default TalkImage;
