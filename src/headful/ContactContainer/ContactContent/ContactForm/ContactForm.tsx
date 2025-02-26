'use client';
import React from 'react';
import styles from './ContactForm.module.scss';
import ContactInput from './ContactInput/ContactInput';
import Grid from '@/headful/Grid/Grid';
import ContactSelect from './ContactSelect/ContactSelect';
import ContactButton from './ContactButton/ContactButton';
import ContactCheck from './ContactCheck/ContactCheck';

const ContactForm = () => {
    return (
        <div className={styles.contactForm}>
            <Grid gap="50px">
                <Grid.Row gap="30px">
                    <ContactInput label="회사명" placeholder="회사명을 입력해주세요." />
                    <ContactInput label="회사명" placeholder="회사명을 입력해주세요." />
                </Grid.Row>
                <Grid.Row>
                    <ContactInput label="회사명" placeholder="회사명을 입력해주세요." />
                </Grid.Row>
                <Grid.Row gap="30px">
                    <ContactSelect defaultValue="">
                        <ContactSelect.Trigger label="지역" placeholder="지역을 선택해주세요." />
                        <ContactSelect.Content>
                            <ContactSelect.Item value="dd">dd</ContactSelect.Item>
                        </ContactSelect.Content>
                    </ContactSelect>
                    <ContactSelect defaultValue="">
                        <ContactSelect.Trigger label="매출" placeholder="매출을 선택해주세요." />
                        <ContactSelect.Content>
                            <ContactSelect.Item value="a">a</ContactSelect.Item>
                            <ContactSelect.Item value="b">b</ContactSelect.Item>
                            <ContactSelect.Item value="c">c</ContactSelect.Item>
                        </ContactSelect.Content>
                    </ContactSelect>
                </Grid.Row>
                <Grid.Row>
                    <ContactSelect defaultValue="">
                        <ContactSelect.Trigger
                            label="상담 원하시는 서비스(중복가능)"
                            placeholder="서비스를 선택해주세요."
                        />
                        <ContactSelect.Content>
                            <ContactSelect.Item value="dd">dd</ContactSelect.Item>
                        </ContactSelect.Content>
                    </ContactSelect>
                </Grid.Row>
                <Grid.Row>
                    <ContactCheck checked={false} onCheckBoxClick={() => {}} />
                </Grid.Row>
                <Grid.Row>
                    <ContactButton>1분 안에 무료 상담 신청하기</ContactButton>
                </Grid.Row>
            </Grid>
        </div>
    );
};

export default ContactForm;
