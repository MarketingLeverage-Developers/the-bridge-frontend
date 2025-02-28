'use client';
import Grid from '@/headful/Grid/Grid';
import React, { ChangeEventHandler, MouseEventHandler, useEffect, useRef, useState } from 'react';
import IntroInput from './IntroInput/IntroInput';
import styles from './IntroForm.module.scss';
import IntroSelect from './IntroSelect/IntroSelect';
import ContactCheck from '@/headful/ContactContainer/ContactContent/ContactForm/ContactCheck/ContactCheck';
import axiosInstance from '@/axios';
import axios from 'axios';
import CheckboxGroup from '@/headless/CheckboxGroup/CheckboxGroup';
import IntroCheckBoxGroup from './IntroCheckBoxGroup/IntroCheckBoxGroup';
import IntroAgreeToggle from './IntroAgreeToggle/IntroAgreeToggle';
import FlexBox from '@/headful/FlexBox/FlexBox';
import IntroButton from './IntroButton/IntroButton';

const IntroForm = () => {
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

    const handleCompanyNameInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setCompanyName(e.target.value);
    };

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
                companyName,
                firstPhone,
                middlePhone,
                lastPhone,
                siteUrl: 'thebridgelab.kr',
                inquireLocation: '메인-상단',
                location,
                sales,
                service: service.join(','),
            });
            window.alert('문의가 접수되었습니다!');
            setName('');
            setCompanyName('');
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
        <div className={styles.introForm}>
            <Grid gap="20px">
                <Grid.Row>
                    <IntroInput
                        label="회사명"
                        value={companyName}
                        placeholder="회사명을 입력해주세요."
                        onChange={handleCompanyNameInputChange}
                    />
                </Grid.Row>
                <Grid.Row>
                    <IntroInput
                        label="성함"
                        value={name}
                        placeholder="성함을 입력해주세요."
                        onChange={handleNameInputChange}
                    />
                </Grid.Row>
                <Grid.Row>
                    <IntroInput
                        label="연락처"
                        placeholder="ex) 010"
                        ref={firstPhoneRef}
                        value={firstPhone}
                        onChange={handleFirstPhoneInputChange}
                    />
                    <IntroInput ref={middlePhoneRef} value={middlePhone} onChange={handleMiddlePhoneInputChange} />
                    <IntroInput ref={lastPhoneRef} value={lastPhone} onChange={handleLastPhoneInputChange} />
                </Grid.Row>
                <Grid.Row>
                    <IntroSelect defaultValue={location}>
                        <IntroSelect.Trigger label="지역" placeholder="지역을 선택해주세요." />
                        <IntroSelect.Content>
                            {locationList.map((location: any) => (
                                <IntroSelect.Item
                                    key={location.name}
                                    value={location.name}
                                    onIntroSelectItemClick={handleLocationSelectChange}
                                >
                                    {location.name}
                                </IntroSelect.Item>
                            ))}
                        </IntroSelect.Content>
                    </IntroSelect>
                    <IntroSelect defaultValue={sales}>
                        <IntroSelect.Trigger label="매출" placeholder="매출을 선택해주세요." />
                        <IntroSelect.Content>
                            {saleList.map((sale: any) => (
                                <IntroSelect.Item
                                    key={sale.sales}
                                    value={sale.sales}
                                    onIntroSelectItemClick={handleSaleSelectChange}
                                >
                                    {sale.sales}
                                </IntroSelect.Item>
                            ))}
                        </IntroSelect.Content>
                    </IntroSelect>
                </Grid.Row>
                <Grid.Row>
                    <FlexBox flexDirection="column" gap={16}>
                        <div style={{ fontSize: 14, color: '#666' }}>상담 원하시는 서비스(중복가능)</div>
                        <IntroCheckBoxGroup defaultValue={service}>
                            {serviceList.map((service: any) => (
                                <IntroCheckBoxGroup.Item
                                    key={service.name}
                                    value={service.name}
                                    onCheckboxGroupItemClick={handleServiceCheckboxClick}
                                >
                                    {service.name}
                                </IntroCheckBoxGroup.Item>
                            ))}
                        </IntroCheckBoxGroup>
                    </FlexBox>
                </Grid.Row>

                <Grid.Row>
                    <IntroAgreeToggle checked={isAgree} onCheckBoxClick={handleCheckBoxChange} />
                </Grid.Row>
                <Grid.Row>
                    <IntroButton disabled={submitDisabled} onClick={handleSubmitButtonClick}>
                        상담 신청하기
                    </IntroButton>
                </Grid.Row>
            </Grid>
        </div>
    );
};

export default IntroForm;
