'use client';
import React, { ChangeEventHandler, MouseEventHandler, useRef, useState } from 'react';
import styles from './MobileContactForm.module.scss';
import Grid from '@/headful/Grid/Grid';
import ContactInput from '../ContactForm/ContactInput/ContactInput';
import ContactSelect from '../ContactForm/ContactSelect/ContactSelect';
import ContactCheck from '../ContactForm/ContactCheck/ContactCheck';
import ContactButton from '../ContactForm/ContactButton/ContactButton';
import axiosInstance from '@/axios';
import axios from 'axios';

const MobileContactForm = () => {
    const [name, setName] = useState('');
    const firstPhoneRef = useRef<HTMLInputElement>(null);
    const middlePhoneRef = useRef<HTMLInputElement>(null);
    const lastPhoneRef = useRef<HTMLInputElement>(null);
    const [firstPhone, setFirstPhone] = useState('');
    const [middlePhone, setMiddlePhone] = useState('');
    const [lastPhone, setLastPhone] = useState('');
    const [isAgree, setIsAgree] = useState(true);

    const handleNameInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setName(e.target.value);
    };

    const handleFirstPhoneInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const numericValue = e.target.value.replace(/\D/g, '');
        setFirstPhone(numericValue);
        if (numericValue.length === 3 && middlePhoneRef.current) {
            middlePhoneRef.current.focus();
        }
    };

    const handleMiddlePhoneInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const numericValue = e.target.value.replace(/\D/g, '');
        setMiddlePhone(numericValue);
        if (numericValue.length === 4 && lastPhoneRef.current) {
            lastPhoneRef.current.focus();
        }
    };

    const handleLastPhoneInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const numericValue = e.target.value.replace(/\D/g, '');
        setLastPhone(numericValue);
    };

    const handleCheckBoxChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setIsAgree(e.target.checked);
    };

    const handleSubmitButtonClick: MouseEventHandler<HTMLButtonElement> = async (e) => {
        e.preventDefault();
        try {
            await axiosInstance.post('/client/inquire', {
                name,
                firstPhone,
                middlePhone,
                lastPhone,
                code: 'bridge-1',
                inquireLocation: '메인-상단',
            });
            window.alert('문의가 접수되었습니다!');
            setName('');
            setFirstPhone('');
            setMiddlePhone('');
            setLastPhone('');
            setIsAgree(true);
        } catch (e) {
            if (axios.isAxiosError(e) && e.response?.data?.result?.message) {
                window.alert(e.response.data.result.message);
            } else if (e instanceof Error) {
                window.alert(e.message);
            } else {
                window.alert('An unknown error occurred');
            }
        }
    };

    const submitAbled = name && firstPhone.length === 3 && middlePhone.length === 4 && lastPhone.length === 4;
    const submitDisabled = !submitAbled;

    return (
        <div className={styles.mobileContactForm}>
            <Grid gap="50px">
                <Grid.Row>
                    <ContactInput
                        label="회사명"
                        placeholder="회사명을 입력해주세요."
                        onChange={handleNameInputChange}
                    />
                </Grid.Row>
                <Grid.Row>
                    <ContactInput label="성함" placeholder="성함을 입력해주세요." onChange={handleNameInputChange} />
                </Grid.Row>
                <Grid.Row>
                    <ContactInput label="연락처" placeholder="연락처를 입력해주세요." />
                </Grid.Row>
                <Grid.Row>
                    <ContactSelect defaultValue="">
                        <ContactSelect.Trigger label="지역" placeholder="지역을 선택해주세요." />
                        <ContactSelect.Content>
                            <ContactSelect.Item value="dd">dd</ContactSelect.Item>
                        </ContactSelect.Content>
                    </ContactSelect>
                </Grid.Row>
                <Grid.Row>
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
                    <ContactCheck checked={false} onCheckBoxClick={handleCheckBoxChange} />
                </Grid.Row>
                <Grid.Row>
                    <ContactButton onClick={handleSubmitButtonClick}>상담 신청하기</ContactButton>
                </Grid.Row>
            </Grid>
        </div>
    );
};

export default MobileContactForm;
