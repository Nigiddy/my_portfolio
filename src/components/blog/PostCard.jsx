import Link from 'next/link';

export default function PostCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="block">
      <article className="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-200 hover:shadow-sm transition-all flex flex-col gap-3">
        <div className="flex items-start">
          <span className="bg-blue-50 text-blue-600 text-xs px-2 py-0.5 rounded-full font-medium">
            {post.tag}
          </span>
        </div>
        
        <div>
          <h3 className="text-gray-900 font-semibold text-lg hover:text-blue-600 transition-colors">
            {post.title}
          </h3>
          <p className="text-gray-500 text-sm line-clamp-2 mt-1">
            {post.description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-2">
          <span className="text-xs text-gray-400">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </span>
          <span className="text-xs text-gray-400">{post.readingTime}</span>
        </div>
      </article>
    </Link>
  );
}
