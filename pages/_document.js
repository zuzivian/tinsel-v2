import NextDocument, {
    Html, Head, Main, NextScript
} from 'next/document';

export default function Document () {
    return (
        <Html>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Playfair+Display:ital,wght@0,500;1,500&display=swap" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}


