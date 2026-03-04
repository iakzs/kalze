import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';
import { formatDate } from '@/lib/utils';

export default function Blog() {
  const posts = getSortedPostsData();

  return (
    <div className="min-h-screen bg-white dark:bg-black selection:bg-[#e8b4d0] dark:selection:bg-[#e8b4d0]/30 font-mono">
      <main className="max-w-4xl mx-auto px-6 md:px-16 py-32">
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-black dark:text-zinc-50 lowercase tracking-tight mb-4">
            thoughts
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl">
            sharing some experiments, research, and whatever comes to mind. i'm mostly interested in how things work under the hood.
          </p>
        </header>

        <div className="space-y-12">
          {posts.map((post) => (
            <article key={post.slug} className="group relative flex flex-col items-start">
              <Link href={`/blog/${post.slug}`} className="flex flex-col w-full">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                  <h2 className="text-2xl font-bold text-black dark:text-zinc-50 group-hover:text-[#e8b4d0] transition-colors tracking-tight">
                    {post.title}
                  </h2>
                  <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
                    <time dateTime={post.date}>
                      {formatDate(post.date)}
                    </time>
                    {post.readingTime && (
                      <>
                        <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-800" />
                        <span>{post.readingTime}</span>
                      </>
                    )}
                  </div>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4 max-w-2xl">
                  {post.excerpt}
                </p>
                <div className="text-sm font-bold text-[#e8b4d0] uppercase tracking-wider group-hover:translate-x-1 transition-transform inline-flex items-center">
                  read more <span className="ml-1">→</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
