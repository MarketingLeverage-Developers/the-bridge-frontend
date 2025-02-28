import React from 'react';
import styles from './Menu.module.scss';

const Menu = () => {
    return (
        <div className={styles.menu}>
            <MenuItem href="#question">회사소개</MenuItem>
            <MenuItem href="#change">정책자금</MenuItem>
            <MenuItem href="#point">정부지원금</MenuItem>
            <MenuItem href="#talk">기업인증</MenuItem>
        </div>
    );
};

export default Menu;

type MenuItemProps = {
    children: React.ReactNode;
    href?: string;
};
const MenuItem = ({ children, href }: MenuItemProps) => {
    return (
        <a href={href} className={styles.menuItem}>
            {children}
        </a>
    );
};
