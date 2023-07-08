import "./styles.scss";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown"; 
import { server } from "@/app/_config";
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

export const runtime = 'edge';

export async function generateMetadata({ params }: { params: { slug: string }}) {
  const res = await fetch(server + "/posts/" + params.slug + ".md");
  const data = await Promise.resolve(res.text());
  const { data: frontmatter } = matter(data);
  
  return {
    title: frontmatter.title,
    description: frontmatter.description,
    authors: { name: frontmatter.author },
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      url: params.slug,
      siteName: "Anthony Du's Blog",
      locale: "en_US",
      type: "article",
    },
    alternatives: {
      canonical: params.slug,
    },
  }
}

export default async function Page({ params }: { params: { slug: string }}) {
  const res = await fetch(server + "/posts/" + params.slug + ".md");
  const data = await Promise.resolve(res.text());
  const { content: markdownBody } = matter(data);

  return (
    <ReactMarkdown className="markdown py-8" remarkPlugins={[ remarkGfm ]} rehypePlugins={[ rehypeRaw ]}>{markdownBody}</ReactMarkdown>
  )
}