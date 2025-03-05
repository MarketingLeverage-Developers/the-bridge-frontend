import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    env: {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL, // 클라이언트와 공유됨
    },
    eslint: {
        // 빌드 시 ESLint 오류를 무시하고 빌드를 진행합니다.
        ignoreDuringBuilds: true,
    },
    output: 'export',
};

export default nextConfig;
