import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Layout from '@/components/Layout';
import MarkInput from '@/components/MarkInput';
import MarkOutput from '@/components/MarkOutput';
import TheLine from '@/components/TheLine';

export default function Home() {
  return (
    <Layout>
      <Header />
      <div className="flex h-5/6">
        <MarkInput />
        <TheLine />
        <MarkOutput />
      </div>
      <Footer />
    </Layout>
  );
}
