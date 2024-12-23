import React, { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import StickyHeader from 'src/components/StickyHeader'
import GlobalStyle from 'src/global-style'

export default function Tickets() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const user = searchParams.get("user");

    useEffect(() => {
        if (!user) navigate('/');
    }, [user, navigate])

    return <>
        <GlobalStyle />
        <StickyHeader />
        <div className="container">
            <h1>{user ? user : 'Desconhecido'}</h1>
        </div>
    </>
}