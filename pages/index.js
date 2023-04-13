import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Layout from '@/components/Layout';
import MarkInput from '@/components/MarkInput';
import MarkOutput from '@/components/MarkOutput';
import TheLine from '@/components/TheLine';

export default function Home() {
  return (
    <Layout>
      <div className="flex w-full relative h-screen bg-slate-700 flex-col">
        <Header />
        <div className="grow flex overflow-hidden">
          <MarkInput />
          <TheLine />
          <MarkOutput />
        </div>
        <Footer />
      </div>
    </Layout>
  );
}
