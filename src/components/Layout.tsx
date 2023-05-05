import React, { PropsWithChildren } from 'react'
import Header from './Header'

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Header />
            <main className='p-6'>{children}</main>
        </>
    )
}

export default Layout