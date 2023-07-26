import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "./styles.module.scss";
import { Metadata } from "next";

export const runtime = "edge";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const res = await fetch(
    process.env.BASE_URL + "/posts/" + params.slug + ".md",
  );
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
    alternates: {
      canonical: params.slug,
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const res = await fetch(
    process.env.BASE_URL + "/posts/" + params.slug + ".md",
  );
  const data = await Promise.resolve(res.text());
  const { content: markdownBody } = matter(data);

  return (
    <ReactMarkdown
      className={styles.markdown + " py-8"}
      remarkPlugins={[remarkGfm]}
    >
      {markdownBody}
    </ReactMarkdown>
  );
}
