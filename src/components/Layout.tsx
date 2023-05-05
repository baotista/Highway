import React, { useEffect, type PropsWithChildren } from 'react'
import Header from './Header'
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

const Layout = ({ children }: PropsWithChildren) => {
    const router = useRouter();
    const { status: sessionStatus } = useSession();
    const authorized = sessionStatus === 'authenticated';
    const unAuthorized = sessionStatus === 'unauthenticated';
    const loading = sessionStatus === 'loading';

    useEffect(() => {
        // check if the session is loading or the router is not ready
        if (loading || !router.isReady) return;
    }, [loading, unAuthorized, sessionStatus, router]);

    if (loading) {
        return <>Loading app...</>;
    }

    return (
        <>
            <Header />
            {authorized && <main className='p-6'>{children}</main>}
        </>
    )
}

export default Layout