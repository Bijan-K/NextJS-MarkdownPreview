import Head from 'next/head';

export default function Layout({ title, keywords, description, children }) {
  return (
    <div className="h-screen">
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="keywords" content={description} />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className="w-full h-full">{children}</main>
    </div>
  );
}

Layout.defaultProps = {
  title: 'Markdown Preview',
  keywords: 'markdown,preview,coding',
  description: 'markdown preview client',
};
