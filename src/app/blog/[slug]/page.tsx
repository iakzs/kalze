import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostData, getSortedPostsData } from '@/lib/posts';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { formatDate } from '@/lib/utils';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Post({ params }: PageProps) {
  const { slug } = await params;
  let post;
  try {
    post = getPostData(slug);
  } catch (e) {
    notFound();
  }

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black selection:bg-[#e8b4d0] dark:selection:bg-[#e8b4d0]/30 font-mono">
      <main className="max-w-3xl mx-auto px-6 md:px-16 py-32">
        <Link
          href="/blog"
          className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-[#e8b4d0] transition-colors mb-12"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back to blog
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#e8b4d0] mb-4">
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
          <h1 className="text-4xl md:text-5xl font-black text-black dark:text-zinc-50 tracking-tight leading-tight mb-4 lowercase">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed italic border-l-4 border-[#e8b4d0]/20 pl-6 py-2">
              {post.excerpt}
            </p>
          )}
        </header>

        <article className="prose prose-zinc dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-a:text-[#e8b4d0] hover:prose-a:underline max-w-none">
          <MDXRemote source={post.content} />
        </article>
      </main>
    </div>
  );
}
