import { Html, Head, Main, NextScript } from 'next/document';
import { MarkProvider } from '@/context/MarkContext';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <MarkProvider>
          <Main />
          <NextScript />
        </MarkProvider>
      </body>
    </Html>
  );
}
