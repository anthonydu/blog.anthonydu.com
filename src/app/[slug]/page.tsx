import fs from 'fs';
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

export const runtime = 'edge';

export default function Page({ params }: {params: { slug: string}}) {
  const content = fs.readFileSync(`public/posts/${params.slug}.md`, 'utf8');
  const { data: frontmatter, content: markdownBody } = matter(content);

  return (
    <ReactMarkdown className="markdown">{markdownBody}</ReactMarkdown>
  )
}