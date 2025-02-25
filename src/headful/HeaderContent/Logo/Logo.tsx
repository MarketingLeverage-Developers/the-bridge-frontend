import React from 'react';
import LogoImage from '@/assets/images/logo.svg';

const Logo = () => {
    return <img src={LogoImage.src} loading="lazy" />;
};

export default Logo;
