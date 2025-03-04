// app/layout.tsx 또는 pages/_app.tsx
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Layout from '@/headful/Layout/Layout';
import HeaderContent from '@/headful/HeaderContent/HeaderContent';
import Menu from '@/headful/HeaderContent/Menu/Menu';
import Logo from '@/headful/HeaderContent/Logo/Logo';
import MobileCallButton from '@/headful/HeaderContent/MobileCallButton/MobileCallButton';
import MobileFixedContent from '@/headful/MobileFixedContent/MobileFixedContent';
import FixedContent from '@/headful/FixedContent/FixedContent';

const NotoSansKR = localFont({
    src: [
        {
            path: '../assets/fonts/NotoSans-Thin.woff2',
            weight: '100',
            style: 'normal',
        },
        {
            path: '../assets/fonts/NotoSans-Light.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../assets/fonts/NotoSans-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../assets/fonts/NotoSans-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../assets/fonts/NotoSans-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
    ],
    variable: '--font-NotoSansKR',
});

export const metadata: Metadata = {
    title: '더브릿지랩',
    description: '더브릿지랩',
    keywords: [],
    icons: {
        icon: '/favicon.ico', // public 폴더에 있는 favicon.ico 파일을 사용
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="kr" suppressHydrationWarning>
            <body suppressHydrationWarning className={NotoSansKR.className}>
                <div id="root"></div>
                <Layout>
                    <Layout.Header>
                        <HeaderContent>
                            <Logo />
                            <Menu />
                            <MobileCallButton />
                        </HeaderContent>
                    </Layout.Header>
                    <Layout.Main>{children}</Layout.Main>
                    <MobileFixedContent />
                    <FixedContent />
                </Layout>
            </body>
        </html>
    );
}
