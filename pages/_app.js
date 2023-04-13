import '@/styles/globals.css';
import { MarkProvider } from '@/context/MarkContext';

export default function App({ Component, pageProps }) {
  return (
    <MarkProvider>
      <Component {...pageProps} />
    </MarkProvider>
  );
}
