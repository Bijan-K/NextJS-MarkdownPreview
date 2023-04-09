import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="keywords" content={description} />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: 'Markdown Preview',
  keywords: 'markdown,preview,coding',
  description: 'markdown preview client',
};
