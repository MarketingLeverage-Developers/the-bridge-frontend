'use client';
import React from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // 기본 스타일
// 필요에 따라 Navigation, Pagination 스타일 import 가능
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import styles from './TalkSwiper.module.scss';
import Talk1Image from '@/assets/images/talk1.webp';
import Talk2Image from '@/assets/images/talk2.webp';
import Talk3Image from '@/assets/images/talk3.webp';

const TalkSwiper = () => {
    const imgStyle = {
        width: '100%',
        aspectRatio: '370 / 453',
        objectFit: 'cover',
    } as React.CSSProperties;

    return (
        <div className={styles.talkSwiper}>
            <Swiper
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                direction="vertical"
                modules={[Autoplay]} // Autoplay 모듈 추가
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
                loop={true}
                freeMode={true} // free mode 활성화
                autoplay={{
                    delay: 0, // 딜레이 없이 연속적으로 이동
                    disableOnInteraction: false,
                }}
                speed={10000} // 전환 시간 (ms) - 값이 클수록 천천히 이동
                allowTouchMove={false} // 터치 이동 비활성화
            >
                <SwiperSlide>
                    <img loading="lazy" src={Talk1Image.src} />
                </SwiperSlide>
                <SwiperSlide>
                    <img loading="lazy" src={Talk2Image.src} />
                </SwiperSlide>
                <SwiperSlide>
                    <img loading="lazy" src={Talk3Image.src} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default TalkSwiper;
