import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return <div>{children}</div>;
};

export default Layout;

Layout.Header = Header;
Layout.Main = Main;
