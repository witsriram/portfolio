import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { getPostBySlug } from "../data/blog";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : null;

  if (!post) {
    return (
      <div className="flex min-h-screen items-center justify-center font-sans bg-void text-text-primary">
        <Header />
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">Post not found</h1>
          <Link
            to="/blog"
            className="text-[#14B8A6] underline-offset-4 hover:underline"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const { Component } = post;

  return (
    <div className="min-h-screen font-sans transition-colors duration-500 bg-void text-text-primary">
      <Header />

      <main className="mx-auto max-w-3xl px-6 pt-24 pb-20">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            to="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm transition-colors text-[#5c574e] hover:text-white"
          >
            <ArrowLeft size={14} />
            Back to Blog
          </Link>
        </motion.div>

        {/* Post header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl text-white">
            {post.title}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5 text-xs text-[#5c574e]">
              <Calendar size={12} />
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-[#5c574e]">
              <Clock size={12} />
              {post.readingTime}
            </span>
            <div className="flex items-center gap-1.5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1 rounded-md border px-2 py-0.5 text-[10px] font-medium border-[#262420] bg-[#1A1816] text-[#5c574e]"
                >
                  <Tag size={9} />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 h-px w-full bg-[#262420]" />
        </motion.div>

        {/* MDX content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="prose max-w-none prose-invert prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:leading-relaxed prose-p:mb-4
            prose-a:text-[#14B8A6] prose-a:no-underline hover:prose-a:underline
            prose-code:rounded prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm
            prose-pre:rounded-xl prose-pre:border
            prose-code:bg-[#1A1816] prose-code:text-[#e0e0e0] prose-pre:border-[#262420] prose-pre:bg-[#12110F]
            prose-li:marker:text-[#14B8A6]
            prose-blockquote:border-l-[#14B8A6] prose-blockquote:italic
            prose-blockquote:text-[#9a9488]
            prose-strong:font-semibold
            prose-strong:text-white"
        >
          <Component />
        </motion.article>
      </main>

      <Footer />
    </div>
  );
}
