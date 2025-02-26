import React, { ImgHTMLAttributes } from 'react';
import LogoImage from '@/assets/images/logo.svg';

type LogoProps = ImgHTMLAttributes<HTMLImageElement> & {};

const Logo = ({ ...props }: LogoProps) => {
    return <img {...props} src={LogoImage.src} loading="lazy" />;
};

export default Logo;
