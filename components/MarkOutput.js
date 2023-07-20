import { useContext } from 'react';
import MarkContext from '@/context/MarkContext';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

export default function MarkOutput() {
  const { MarkOutput } = useContext(MarkContext);

  return (
    <div
      className="w-1/2 text-start mx-4 my-4 text-lg text-white overflow-scroll prose max-w-none prose-strong:text-white prose-strong:font-extrabold"
      id="content"
    >
      <ReactMarkdown remarkPlugins={[gfm]} children={MarkOutput} />
    </div>
  );
}
