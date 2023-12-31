import fs from "fs";
import matter from "gray-matter";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home | Anthony Du's Blog",
  description: "A blog about Anthony Du's life and thoughts.",
  openGraph: {
    title: "Home",
    description: "A blog about Anthony Du's life and thoughts.",
    url: "/",
    siteName: "Anthony Du's Blog",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const posts = fs
    .readdirSync("public/posts")
    .map((post) => {
      const slug = post.replace(".md", "");
      const content = fs.readFileSync(`public/posts/${post}`, "utf8");
      const { data: frontmatter } = matter(content);
      return { slug, frontmatter };
    })
    .sort((a, b) => {
      const pinned =
        (b.frontmatter.pinned === true ? 1 : 0) -
        (a.frontmatter.pinned === true ? 1 : 0);
      const date = Math.sign(
        (Date.parse(b.frontmatter.datePublished) || 0) -
          (Date.parse(a.frontmatter.datePublished) || 0),
      );

      return pinned * 2 + date;
    });

  return (
    <nav className="py-24 text-3xl font-semibold leading-tight">
      <ul className="pl-10">
        {posts.map((post) => {
          return (
            <li
              key={post.slug}
              className="my-5 transition duration-500 hover:translate-x-2.5"
            >
              {post.frontmatter.pinned ? (
                <div className="relative -left-10 h-0 w-0">📌</div>
              ) : null}
              <Link className="pr-2" href={post.slug}>
                {post.frontmatter.title}
              </Link>
              <p className="mt-1 whitespace-nowrap text-sm text-slate-500">
                {post.frontmatter.datePublished}
              </p>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
