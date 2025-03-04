'use client';
import React, { ChangeEventHandler, MouseEventHandler, useEffect, useRef, useState } from 'react';
import styles from './ContactForm.module.scss';
import ContactInput from './ContactInput/ContactInput';
import Grid from '@/headful/Grid/Grid';
import ContactSelect from './ContactSelect/ContactSelect';
import ContactButton from './ContactButton/ContactButton';
import ContactCheck from './ContactCheck/ContactCheck';
import axios from 'axios';
import axiosInstance from '@/axios';
import FlexBox from '@/headful/FlexBox/FlexBox';
import IntroCheckBoxGroup from '@/headful/IntroContainer/IntroContent/IntroForm/IntroCheckBoxGroup/IntroCheckBoxGroup';
import ContactCheckBoxItem from './ContactCheckBoxItem/ContactCheckBoxItem';

const ContactForm = () => {
    const [companyName, setCompanyName] = useState('');
    const [name, setName] = useState('');
    const firstPhoneRef = useRef<HTMLInputElement>(null);
    const middlePhoneRef = useRef<HTMLInputElement>(null);
    const lastPhoneRef = useRef<HTMLInputElement>(null);
    const [firstPhone, setFirstPhone] = useState('');
    const [middlePhone, setMiddlePhone] = useState('');
    const [lastPhone, setLastPhone] = useState('');
    const [isAgree, setIsAgree] = useState(true);
    const [saleList, setSaleList] = useState([]);
    const [locationList, setLocationList] = useState([]);
    const [serviceList, setServiceList] = useState([]);
    const [location, setLocation] = useState('');
    const [sales, setSales] = useState('');
    const [service, setService] = useState<string[]>([]);

    useEffect(() => {
        (async () => {
            const locationResponse = await axiosInstance.get('/client/list/location');
            const salesResponse = await axiosInstance.get('/client/list/sales');
            const serviceResponse = await axiosInstance.get('/client/list/service');
            console.log('locationResponse,', locationResponse);
            console.log('salesResponse', salesResponse);
            console.log('serviceResponse', serviceResponse);

            setLocationList(locationResponse.data.body);
            setSaleList(salesResponse.data.body);
            setServiceList(serviceResponse.data.body);
        })();
    }, []);

    // const handleCompanyNameInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    //     setCompanyName(e.target.value);
    // };

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

    const handleLocationSelectChange = (value: string) => {
        setLocation(value);
    };
    const handleSaleSelectChange = (value: string) => {
        setSales(value);
    };

    const handleServiceCheckboxClick = (value: string[]) => {
        setService(value);
    };

    const handleSubmitButtonClick: MouseEventHandler<HTMLButtonElement> = async (e) => {
        e.preventDefault();
        try {
            await axiosInstance.post('/client/inquire', {
                name,
                // companyName,
                firstPhone,
                middlePhone,
                lastPhone,
                siteUrl: 'thebridgelab.kr',
                inquireLocation: '메인-하단',
                location,
                sales,
                service: service.join(','),
            });
            window.alert('문의가 접수되었습니다!');
            setName('');
            // setCompanyName('');
            setFirstPhone('');
            setMiddlePhone('');
            setLastPhone('');
            setLocation('');
            setSales('');
            setService([]);
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

    const submitAbled =
        name &&
        firstPhone.length === 3 &&
        middlePhone.length === 4 &&
        lastPhone.length === 4 &&
        location &&
        sales &&
        service.length > 0 &&
        isAgree;
    const submitDisabled = !submitAbled;

    return (
        <div className={styles.contactForm}>
            <Grid gap="35px">
                <Grid.Row gap="15px" className={styles.gridStyle}>
                    {/* <ContactInput
                        label="회사명"
                        value={companyName}
                        placeholder="회사명을 입력해주세요."
                        onChange={handleCompanyNameInputChange}
                    /> */}
                    <ContactInput
                        label="회사명 또는 성함"
                        value={name}
                        placeholder="성함을 입력해주세요."
                        onChange={handleNameInputChange}
                    />
                </Grid.Row>
                <Grid.Row>
                    <ContactInput
                        label="연락처"
                        placeholder="ex) 010"
                        ref={firstPhoneRef}
                        value={firstPhone}
                        onChange={handleFirstPhoneInputChange}
                        maxLength={3}
                    />
                    <ContactInput
                        ref={middlePhoneRef}
                        value={middlePhone}
                        onChange={handleMiddlePhoneInputChange}
                        maxLength={4}
                    />
                    <ContactInput
                        ref={lastPhoneRef}
                        value={lastPhone}
                        onChange={handleLastPhoneInputChange}
                        maxLength={4}
                    />
                </Grid.Row>
                <Grid.Row gap="30px">
                    <ContactSelect defaultValue={location}>
                        <ContactSelect.Trigger label="지역" placeholder="지역을 선택해주세요." />
                        <ContactSelect.Content>
                            {locationList.map((location: any) => (
                                <ContactSelect.Item
                                    key={location.name}
                                    value={location.name}
                                    onContactSelectItemClick={handleLocationSelectChange}
                                >
                                    {location.name}
                                </ContactSelect.Item>
                            ))}
                        </ContactSelect.Content>
                    </ContactSelect>
                    <ContactSelect defaultValue={sales}>
                        <ContactSelect.Trigger label="매출" placeholder="매출을 선택해주세요." />
                        <ContactSelect.Content>
                            {saleList.map((sale: any) => (
                                <ContactSelect.Item
                                    key={sale.sales}
                                    value={sale.sales}
                                    onContactSelectItemClick={handleSaleSelectChange}
                                >
                                    {sale.sales}
                                </ContactSelect.Item>
                            ))}
                        </ContactSelect.Content>
                    </ContactSelect>
                </Grid.Row>
                <Grid.Row>
                    <FlexBox flexDirection="column" gap={16}>
                        <div className={styles.label}>상담 원하시는 서비스(중복가능)</div>
                        <IntroCheckBoxGroup defaultValue={service}>
                            {serviceList.map((service: any) => (
                                <ContactCheckBoxItem
                                    key={service.name}
                                    value={service.name}
                                    onCheckboxGroupItemClick={handleServiceCheckboxClick}
                                >
                                    {service.name}
                                </ContactCheckBoxItem>
                            ))}
                        </IntroCheckBoxGroup>
                    </FlexBox>
                </Grid.Row>
                <Grid.Row>
                    <ContactCheck checked={isAgree} onCheckBoxClick={handleCheckBoxChange} />
                </Grid.Row>
                <Grid.Row>
                    <ContactButton disabled={submitDisabled} onClick={handleSubmitButtonClick}>
                        1분 안에 무료 상담 신청하기
                    </ContactButton>
                </Grid.Row>
            </Grid>
        </div>
    );
};

export default ContactForm;
