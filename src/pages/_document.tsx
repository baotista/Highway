import { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

const Document = () => {
    return (
        <Html lang="en" data-theme="emerald">
            <Head>
                <meta property="og:title" content="Highway" key="title" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document