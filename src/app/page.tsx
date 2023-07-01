import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';

export const metadata = {
  title: 'Anthony Du\'s Blog',
  description: 'A blog about Anthony Du\'s life and thoughts.',
  openGraph: {
    title: 'Anthony Du\'s Blog',
    description: 'A blog about Anthony Du\'s life and thoughts.',
    url: "https://blog.anthonydu.com",
    siteName: "Anthony Du's Blog",
    locale: "en_US",
    type: "website",
  },
  alternatives: {
    canonical: "https://blog.anthonydu.com",
  },
}

export default function Home() {
  const posts = fs.readdirSync('public/posts')
    .sort((a, b) => { return fs.statSync(`public/posts/${b}`).mtime.getTime() - fs.statSync(`public/posts/${a}`).mtime.getTime() })
    .map(post => {
    const slug = post.replace('.md', '');
    const content = fs.readFileSync(`public/posts/${post}`, 'utf8');
    const { data: frontmatter } = matter(content);
    return { slug, frontmatter };
  });

  return (
    <nav className="fixed inset-0 flex justify-center items-center font-bold text-3xl overflow-hidden">
      <ul className="absolute left-1/4 mr-12">
        {
          posts.map(post => {
            return post.frontmatter.pinned ? (
            <li key={post.slug} className="my-5 transition duration-500 hover:translate-x-2.5">
              <div className='h-0 w-0 relative -left-12'>📌</div>
              <Link href={post.slug}>
                {post.frontmatter.title}
              </Link>
            </li>
            ) : null;
          })
        }
        {
          posts.map(post => {
            return post.frontmatter.pinned ? null :(
            <li key={post.slug} className="my-5 transition duration-500 hover:translate-x-2.5">
              <Link href={post.slug}>
                {post.frontmatter.title}
              </Link>
            </li>
            );
          })
        }
      </ul>
    </nav>
  )
}
