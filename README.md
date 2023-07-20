Simple Markdown Previewer(live)

![image](https://github.com/Bijan-K/NextJS-MarkdownPreview/assets/80640045/36e2713b-636b-42ef-938d-b5a6880b3005)

from what I learned tailwind and markdown don't mix well together.
you need to install specific packages for it to work.
'react-markdown' & 'remark-gfm' were cool(and useful).

need to double linebreak to go into the next line, I wanted to replace them with double linebreaks to make them work normally (with .replace(/\n/g, ' \n\n')) but that would have made tables and a bunch of other stuff break instead.

to run:
```bash
npm install

npm run dev
```
