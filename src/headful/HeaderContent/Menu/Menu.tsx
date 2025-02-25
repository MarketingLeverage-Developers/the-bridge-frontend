import React from 'react';
import styles from './Menu.module.scss';

const Menu = () => {
    return (
        <div className={styles.menu}>
            <MenuItem>회사소개</MenuItem>
            <MenuItem>정책자금</MenuItem>
            <MenuItem>정부지원금</MenuItem>
            <MenuItem>기업인증</MenuItem>
        </div>
    );
};

export default Menu;

type MenuItemProps = {
    children: React.ReactNode;
};
const MenuItem = ({ children }: MenuItemProps) => {
    return <span className={styles.menuItem}>{children}</span>;
};
