import { useContext } from 'react';
import MarkContext from '@/context/MarkContext';
import { marked } from 'marked';
import DOMPurify from 'isomorphic-dompurify';

export default function MarkOutput() {
  const { MarkOutput } = useContext(MarkContext);

  return (
    <div
      className="w-1/2 text-start mx-4 my-4 text-lg overflow-scroll"
      id="content"
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(
          marked.parse(MarkOutput.replace(/\n/g, '<br>'))
        ),
      }}
    ></div>
  );
}
