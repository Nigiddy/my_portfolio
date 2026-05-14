import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllPosts, getPostBySlug } from '../../../lib/blog';
import Wrapper from '../../../components/Wrapper';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return (
    <div className="min-h-screen bg-white py-20">
      <Wrapper className="max-w-3xl mx-auto">
        <Link 
          href="/blog" 
          className="text-sm text-gray-400 hover:text-blue-600 transition-colors inline-flex items-center mb-8"
        >
          ← Back to writing
        </Link>

        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {post.frontmatter.title}
          </h1>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <span className="bg-blue-50 text-blue-600 text-xs px-2 py-0.5 rounded-full font-medium">
              {post.frontmatter.tag}
            </span>
            <span>·</span>
            <span className="text-gray-400">
              {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
            <span>·</span>
            <span className="text-gray-400">{post.frontmatter.readingTime}</span>
          </div>
        </header>

        <div className="h-px bg-blue-100 w-full my-8" />

        <article className="prose max-w-none">
          <p>RAW CONTENT: {post.rawContent}</p>
        </article>

        <div className="mt-16 pt-8 border-t border-gray-100">
          <Link 
            href="/blog" 
            className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center"
          >
            More posts →
          </Link>
        </div>
      </Wrapper>
    </div>
  );
}
