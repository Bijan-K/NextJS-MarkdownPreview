import { marked } from 'marked';
import DOMPurify from 'isomorphic-dompurify';

export default function MarkOutput() {
  return (
    <div
      className="w-1/2 text-start mx-4 my-4"
      id="content"
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(
          marked.parse('# Marked in browser\n\nRendered by **marked**.')
        ),
      }}
    ></div>
  );
}
