import matter from "gray-matter";
import ReactMarkdown from "react-markdown"; 
import { server } from '../../../config';

export const runtime = 'edge';

export default async function Page({ params }: { params: { slug: string }}) {
  const res = await fetch(server + "/posts/" + params.slug + ".md");
  const data = await Promise.resolve(res.text());
  const { content: markdownBody } = matter(data);

  return (
    <ReactMarkdown className="markdown">{markdownBody}</ReactMarkdown>
  )
}