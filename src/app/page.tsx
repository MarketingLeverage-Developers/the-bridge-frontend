import CopyContainer from '@/headful/CopyContainer/CopyContainer';
import CopyContent from '@/headful/CopyContainer/CopyContent/CopyContent';
import IntroContainer from '@/headful/IntroContainer/IntroContainer';
import IntroContent from '@/headful/IntroContainer/IntroContent/IntroContent';
import IntroDescriptionText from '@/headful/IntroContainer/IntroContent/IntroDescriptionText/IntroDescriptionText';
import IntroTitleText from '@/headful/IntroContainer/IntroContent/IntroTitleText/IntroTitleText';
import PointContainer from '@/headful/PointContainer/PointContainer';
import PointCard from '@/headful/PointContainer/PointContent/PointCardWrapper/PointCard/PointCard';
import PointCardWrapper from '@/headful/PointContainer/PointContent/PointCardWrapper/PointCardWrapper';
import PointContent from '@/headful/PointContainer/PointContent/PointContent';
import PointDescriptionText from '@/headful/PointContainer/PointContent/PointDescriptionText/PointDescriptionText';
import PointTitleText from '@/headful/PointContainer/PointContent/PointTitleText/PointTitleText';
import CenterCard from '@/headful/QuestionContainer/QuestionCardWrapper/CenterCard/CenterCard';
import LeftCard from '@/headful/QuestionContainer/QuestionCardWrapper/LeftCard/LeftCard';
import QuestionCardWrapper from '@/headful/QuestionContainer/QuestionCardWrapper/QuestionCardWrapper';
import RightCard from '@/headful/QuestionContainer/QuestionCardWrapper/RightCard/RightCard';
import QuestionContainer from '@/headful/QuestionContainer/QuestionContainer';
import QuestionContent from '@/headful/QuestionContainer/QuestionContent/QuestionContent';
import QuestionTitleText from '@/headful/QuestionContainer/QuestionTitleText/QuestionTitleText';
import PointImage1 from '@/assets/images/point1.png';
import PointImage2 from '@/assets/images/point2.png';
import PointImage3 from '@/assets/images/point3.png';
import PointImage4 from '@/assets/images/point4.png';
import PointImage5 from '@/assets/images/point5.png';
import PointImage6 from '@/assets/images/point6.png';
import PointImage7 from '@/assets/images/point7.png';
import PointInquiryButton from '@/headful/PointContainer/PointContent/PointInquiryButton/PointInquiryButton';
import ChangeContainer from '@/headful/ChangeContainer/ChangeContainer';
import ChangeContent from '@/headful/ChangeContainer/ChangeContent/ChangeContent';
import ChangeTitleText from '@/headful/ChangeContainer/ChangeContent/ChangeTitleText/ChangeTitleText';
import ChangeBeforeWrapper from '@/headful/ChangeContainer/ChangeContent/ChangeBeforeWrapper/ChangeBeforeWrapper';
import ChangeBefore from '@/headful/ChangeContainer/ChangeContent/ChangeBeforeWrapper/ChangeBefore/ChangeBefore';
import ChangeImage1 from '@/assets/images/change1.png';
import ChangeImage2 from '@/assets/images/change2.png';
import ChangeImage3 from '@/assets/images/change3.png';
import ChangeBracket from '@/headful/ChangeContainer/ChangeContent/ChangeBracket/ChangeBracket';
import ChangeSubTitleText from '@/headful/ChangeContainer/ChangeContent/ChangeSubTitleText/ChangeSubTitleText';
import ChangeAfterWrapper from '@/headful/ChangeContainer/ChangeContent/ChangeAfterWrapper/ChangeAfterWrapper';
import ChangeAfter from '@/headful/ChangeContainer/ChangeContent/ChangeAfterWrapper/ChangeAfter/ChangeAfter';
import AfterImage1 from '@/assets/images/after1.png';
import AfterImage2 from '@/assets/images/after2.png';
import AfterImage3 from '@/assets/images/after3.png';
import TalkContainer from '@/headful/TalkContainer/TalkContainer';
import TalkContent from '@/headful/TalkContainer/TalkContent/TalkContent';
import TalkTitleText from '@/headful/TalkContainer/TalkContent/TalkTitleText/TalkTitleText';
import TalkImage from '@/headful/TalkContainer/TalkContent/TalkImage/TalkImage';
import ContactContainer from '@/headful/ContactContainer/ContactContainer';
import ContactContent from '@/headful/ContactContainer/ContactContent/ContactContent';
import ContactText from '@/headful/ContactContainer/ContactContent/ContactText/ContactText';
import ContactForm from '@/headful/ContactContainer/ContactContent/ContactForm/ContactForm';
import MobileContactForm from '@/headful/ContactContainer/ContactContent/MobileContactForm/MobileContactForm';
import FooterContent from '@/headful/FooterContainer/FooterContent/FooterContent';
import FooterContainer from '@/headful/FooterContainer/FooterContainer';
import FooterInfo from '@/headful/FooterContainer/FooterContent/FooterInfo/FooterInfo';
import FooterRight from '@/headful/FooterContainer/FooterContent/FooterRight/FooterRight';
import IntroForm from '@/headful/IntroContainer/IntroContent/IntroForm/IntroForm';
import FlexBox from '@/headful/FlexBox/FlexBox';
import TalkSwiper from '@/headful/TalkContainer/TalkContent/TalkSwiper/TalkSwiper';
import IntroMobileButton from '@/headful/IntroContainer/IntroContent/IntroMobileButton/IntroMobileButton';
import ApiCaller from './components/ApiCaller';
import MobileFixedContent from '@/headful/MobileFixedContent/MobileFixedContent';
import BannerContainer from '@/headful/BannerContainer/BannerContainer';

export default function Home() {
    return (
        <>
            <BannerContainer />
            {/* <IntroContainer>
                <IntroContent>
                    <FlexBox flexDirection="column" gap={15}>
                        <IntroTitleText />
                        <IntroDescriptionText />
                    </FlexBox>
                    <IntroForm />
                    <IntroMobileButton />
                </IntroContent>
            </IntroContainer> */}
            <CopyContainer>
                <CopyContent />
            </CopyContainer>
            <QuestionContainer>
                <QuestionContent>
                    <QuestionTitleText />
                    <QuestionCardWrapper>
                        <LeftCard />
                        <CenterCard />
                        <RightCard />
                    </QuestionCardWrapper>
                </QuestionContent>
            </QuestionContainer>
            <PointContainer>
                <PointContent>
                    <PointTitleText />
                    <PointDescriptionText />
                    <PointCardWrapper>
                        <PointCard iconSoruce={PointImage1.src} title={'신용보증'} subTitle={'대출 보증 지원'} />
                        <PointCard
                            iconSoruce={PointImage2.src}
                            title={'기업보증'}
                            subTitle={
                                <>
                                    기술 기업
                                    <br />
                                    금융 보증
                                </>
                            }
                        />
                        <PointCard
                            iconSoruce={PointImage3.src}
                            title={'농업종합자금'}
                            subTitle={'농어빈 저금리 대출'}
                        />
                        <PointCard
                            iconSoruce={PointImage4.src}
                            title={'관광진흥개발기금'}
                            subTitle={'관광업 운영자금 지원'}
                        />
                        <PointCard
                            iconSoruce={PointImage5.src}
                            title={'립스'}
                            subTitle={
                                <>
                                    지방 중소기업
                                    <br />
                                    맞춤자금
                                </>
                            }
                        />
                        <PointCard
                            iconSoruce={PointImage6.src}
                            title={'팁스'}
                            subTitle={
                                <>
                                    스타트업 R&D
                                    <br />
                                    투자 지원
                                </>
                            }
                        />
                        <PointCard
                            iconSoruce={PointImage7.src}
                            title={'튼튼론'}
                            subTitle={
                                <>
                                    소상공인 긴급
                                    <br />
                                    운영자금
                                </>
                            }
                        />
                    </PointCardWrapper>
                    <PointInquiryButton />
                </PointContent>
            </PointContainer>

            <ChangeContainer>
                <ChangeContent>
                    <ChangeTitleText />
                    <ChangeBeforeWrapper>
                        <ChangeBefore index={1} imageSource={ChangeImage1.src} />
                        <ChangeBefore index={2} imageSource={ChangeImage2.src} />
                        <ChangeBefore index={3} imageSource={ChangeImage3.src} />
                    </ChangeBeforeWrapper>
                    <ChangeBracket />
                    <ChangeSubTitleText />
                    <ChangeAfterWrapper>
                        <ChangeAfter imageSource={AfterImage1.src} />
                        <ChangeAfter imageSource={AfterImage2.src} />
                        <ChangeAfter imageSource={AfterImage3.src} />
                    </ChangeAfterWrapper>
                </ChangeContent>
            </ChangeContainer>
            <TalkContainer>
                <TalkContent>
                    <TalkTitleText />
                    <TalkSwiper />
                </TalkContent>
            </TalkContainer>
            <ContactContainer>
                <ContactContent>
                    <ContactText />
                    <ContactForm />
                    <MobileContactForm />
                </ContactContent>
            </ContactContainer>

            <FooterContainer>
                <FooterContent>
                    <FooterInfo />
                    <FooterRight />
                </FooterContent>
            </FooterContainer>
            <ApiCaller />
        </>
    );
}
