import { getAllPosts } from '../../lib/blog';
import PostCard from '../../components/blog/PostCard';
import Wrapper from '../../components/Wrapper';

export const metadata = {
  title: 'Writing',
  description: 'Thoughts on development, design, and building things.',
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-white py-20">
      <Wrapper className="max-w-3xl mx-auto">
        <header className="mb-12">
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">Writing</h1>
          <p className="text-gray-500">Thoughts on development, design, and building things.</p>
        </header>

        <div className="flex flex-col gap-6">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </Wrapper>
    </div>
  );
}
