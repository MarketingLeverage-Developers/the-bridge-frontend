'use client';
import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // 기본 스타일
import 'swiper/css/navigation'; // 네비게이션 버튼 스타일
import 'swiper/css/pagination'; // 페이지네이션 스타일
import styles from './BannerContainer.module.scss';
import Banner1Image from '@/assets/images/banner1.webp';
import Banner2Image from '@/assets/images/banner2.webp';
import Banner3Image from '@/assets/images/banner3.webp';
import IntroContainer from '../IntroContainer/IntroContainer';
import IntroContent from '../IntroContainer/IntroContent/IntroContent';
import FlexBox from '../FlexBox/FlexBox';
import IntroTitleText from '../IntroContainer/IntroContent/IntroTitleText/IntroTitleText';
import IntroDescriptionText from '../IntroContainer/IntroContent/IntroDescriptionText/IntroDescriptionText';
import IntroForm from '../IntroContainer/IntroContent/IntroForm/IntroForm';
import IntroMobileButton from '../IntroContainer/IntroContent/IntroMobileButton/IntroMobileButton';

const BannerContainer = () => {
    const imgStyle = {
        width: '100%',
        aspectRatio: '1920 / 1006',
        objectFit: 'cover',
    } as React.CSSProperties;

    return (
        <div className={styles.bannerContainer}>
            <Swiper
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation={true} // 좌우 이동 버튼 활성화
                autoplay={{
                    delay: 2000, // 5000ms = 5초 후 자동 전환
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Navigation, Pagination]} // 모듈 등록
            >
                <SwiperSlide>
                    <IntroContainer imageSource={Banner1Image.src}>
                        <IntroContent>
                            <FlexBox flexDirection="column" gap={15} justifyContent="center" alignItems="center">
                                <IntroTitleText>
                                    소상공인과 기업을
                                    <br />
                                    위한 정책자금 컨설팅
                                </IntroTitleText>
                                <IntroDescriptionText>
                                    소상공인과 기업을 위한 정책자금 컨설팅
                                    <br /> 최대 100억 원까지 받을 수 있는
                                    <br /> 정부지원금 체크하세요
                                </IntroDescriptionText>
                                <IntroMobileButton />
                            </FlexBox>
                            <IntroForm />
                        </IntroContent>
                    </IntroContainer>
                </SwiperSlide>
                <SwiperSlide style={{ height: '100%' }}>
                    <IntroContainer imageSource={Banner2Image.src}>
                        <IntroContent>
                            <FlexBox
                                flexDirection="column"
                                gap={15}
                                justifyContent="center"
                                alignItems="center"
                                height={'100%'}
                            >
                                <IntroTitleText>5분 상담으로도</IntroTitleText>
                                <IntroDescriptionText>
                                    모든 자금조달방법을
                                    <br />
                                    얻을 수 있습니다.
                                </IntroDescriptionText>
                                <IntroMobileButton />
                            </FlexBox>
                            <IntroForm />
                        </IntroContent>
                    </IntroContainer>
                </SwiperSlide>
                <SwiperSlide>
                    <IntroContainer imageSource={Banner3Image.src}>
                        <IntroContent>
                            <FlexBox flexDirection="column" gap={15} justifyContent="center" alignItems="center">
                                <IntroTitleText>저희와 함께하세요.</IntroTitleText>
                                <IntroDescriptionText>
                                    대표님의 사업성공을 위해
                                    <br />
                                    함께하겠습니다.
                                </IntroDescriptionText>
                                <IntroMobileButton />
                            </FlexBox>
                            <IntroForm />
                        </IntroContent>
                    </IntroContainer>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default BannerContainer;
