import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';

export default function Home() {
  const posts = fs.readdirSync('public/posts').map(post => {
    const slug = post.replace('.md', '');
    const content = fs.readFileSync(`public/posts/${post}`, 'utf8');
    const { data: frontmatter } = matter(content);

    return {
      slug,
      frontmatter
    }
  });

  return (
    <nav className="fixed inset-0 flex justify-center items-center font-bold text-3xl">
      <ul className="absolute left-1/4">
        {
          posts.map(post => (
            <li key={post.slug} className="my-5 transition duration-500 hover:translate-x-2.5">
              <Link href={post.slug}>
                {post.frontmatter.title}
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}
