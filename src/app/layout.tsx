import '../../styles/globals.css'

import type { Metadata } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Roboto } from 'next/font/google'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { NextAuthProvider } from '@/app/Providers'
import React from 'react'

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Fishing Adventure',
    description: 'Powered by Marko Ristic',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={roboto.className}>
                <NextAuthProvider>
                    <Navbar />
                    {children}
                    <Footer />
                </NextAuthProvider>
            </body>
            <GoogleAnalytics gaId="G-7793CYE767" />
        </html>
    )
}
