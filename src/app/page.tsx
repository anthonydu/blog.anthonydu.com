import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";

export const metadata = {
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
  alternatives: {
    canonical: "/",
  },
};

export default function Home() {
  const posts = fs
    .readdirSync("public/posts")
    .sort((a, b) => {
      return (
        fs.statSync(`public/posts/${b}`).mtime.getTime() -
        fs.statSync(`public/posts/${a}`).mtime.getTime()
      );
    })
    .map((post) => {
      const slug = post.replace(".md", "");
      const content = fs.readFileSync(`public/posts/${post}`, "utf8");
      const { data: frontmatter } = matter(content);
      return { slug, frontmatter };
    });

  return (
    <nav className="py-24 text-3xl font-semibold leading-tight">
      <ul className="pl-10">
        {
          // pinned
          posts.map((post) => {
            return post.frontmatter.pinned ? (
              <li
                key={post.slug}
                className="my-5 transition duration-500 hover:translate-x-2.5"
              >
                <div className="h-0 w-0 relative -left-10">📌</div>
                <Link href={post.slug}>{post.frontmatter.title}</Link>
              </li>
            ) : null;
          })
        }
        {
          // unpinned
          posts.map((post) => {
            return post.frontmatter.pinned ? null : (
              <li
                key={post.slug}
                className="my-5 transition duration-500 hover:translate-x-2.5"
              >
                <Link href={post.slug}>{post.frontmatter.title}</Link>
              </li>
            );
          })
        }
      </ul>
    </nav>
  );
}
