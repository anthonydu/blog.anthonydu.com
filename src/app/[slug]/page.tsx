import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "./styles.module.scss";
import { Metadata } from "next";
import TimeAgo from "./components/TimeAgo";

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
  const text = await Promise.resolve(res.text());
  const { data: frontmatter, content: markdownBody } = matter(text);
  const lastModified = await fetch(
    `https://api.github.com/repos/anthonydu/blog.anthonydu.com/commits?path=public/posts/${params.slug}.md`,
  ).then((res) => {
    return res.headers.get("Last-Modified");
  });

  return (
    <div className="py-14">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold leading-10">
          {frontmatter.title}
        </h1>
        <hr className="my-2 border-[0.5px] border-slate-700" />
        <p className="text-xs">
          By <strong>{frontmatter.author}</strong> &middot; Published on{" "}
          {new Date(frontmatter.datePublished).toDateString()} &middot; Updated{" "}
          <TimeAgo date={lastModified!}></TimeAgo>
        </p>
      </div>
      <ReactMarkdown className={styles.markdown} remarkPlugins={[remarkGfm]}>
        {markdownBody}
      </ReactMarkdown>
    </div>
  );
}
