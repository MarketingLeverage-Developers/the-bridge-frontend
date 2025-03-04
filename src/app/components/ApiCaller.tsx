'use client';
import React, { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

type ApiData = any; // 실제 데이터 타입에 맞게 수정하세요.

interface ApiCallerProps {
    onDataFetched?: (data: ApiData) => void;
}

export default function ApiCaller({ onDataFetched }: ApiCallerProps) {
    const searchParams = useSearchParams();
    const n_query = searchParams.get('n_query');

    useEffect(() => {
        // n_query 값이 있을 경우에만 utm_query를 추가합니다.
        const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/client/home`;
        const url = n_query ? `${baseUrl}?utm_query=${n_query}` : baseUrl;

        fetch(url, {
            next: { revalidate: 60 },
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then((json) => {
                onDataFetched && onDataFetched(json);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [n_query, onDataFetched]);

    return <div>{/* 필요에 따라 데이터를 렌더링하거나 다른 컴포넌트로 전달할 수 있습니다 */}</div>;
}
