import CopyContainer from '@/headful/CopyContainer/CopyContainer';
import CopyContent from '@/headful/CopyContainer/CopyContent/CopyContent';
import IntroContainer from '@/headful/IntroContainer/IntroContainer';
import IntroContent from '@/headful/IntroContainer/IntroContent/IntroContent';
import IntroDescriptionText from '@/headful/IntroContainer/IntroContent/IntroDescriptionText/IntroDescriptionText';
import IntroTitleText from '@/headful/IntroContainer/IntroContent/IntroTitleText/IntroTitleText';
import CenterCard from '@/headful/QuestionContainer/QuestionCardWrapper/CenterCard/CenterCard';
import LeftCard from '@/headful/QuestionContainer/QuestionCardWrapper/LeftCard/LeftCard';
import QuestionCardWrapper from '@/headful/QuestionContainer/QuestionCardWrapper/QuestionCardWrapper';
import RightCard from '@/headful/QuestionContainer/QuestionCardWrapper/RightCard/RightCard';
import QuestionContainer from '@/headful/QuestionContainer/QuestionContainer';
import QuestionContent from '@/headful/QuestionContainer/QuestionContent/QuestionContent';
import QuestionTitleText from '@/headful/QuestionContainer/QuestionTitleText/QuestionTitleText';

export default function Home() {
    return (
        <>
            <IntroContainer>
                <IntroContent>
                    <IntroTitleText />
                    <IntroDescriptionText />
                </IntroContent>
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
            </IntroContainer>
        </>
    );
}
