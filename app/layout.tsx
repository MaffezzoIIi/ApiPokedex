import { Metadata, Viewport } from 'next';
import React, { ReactNode } from 'react';
import './global.css';


export const metadata: Metadata = {
    title: 'Pokemons',
    description: 'Web site created using create-react-app',
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
};

export default function RootLayout({
    children,
}: {
    children: ReactNode;
}) {
    return <html lang="en">
        <head>
            <meta charSet="utf-8" />
        </head>
        <body>
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <div id="root">
                {children}
            </div>
        </body>
    </html>
}