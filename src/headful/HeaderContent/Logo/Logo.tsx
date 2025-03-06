import React, { ImgHTMLAttributes } from 'react';
import LogoImage from '@/assets/images/logo.svg';

type LogoProps = ImgHTMLAttributes<HTMLImageElement> & {};

const Logo = ({ ...props }: LogoProps) => {
    return <img loading="lazy" {...props} src={LogoImage.src} />;
};

export default Logo;
