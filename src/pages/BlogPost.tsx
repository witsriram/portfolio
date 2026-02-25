import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { useTheme } from "../components/ThemeContext";
import { getPostBySlug } from "../data/blog";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const post = slug ? getPostBySlug(slug) : null;

  if (!post) {
    return (
      <div
        className={`flex min-h-screen items-center justify-center font-sans ${
          isDark ? "bg-void text-text-primary" : "bg-[#f5f5f7] text-[#1a1a1a]"
        }`}
      >
        <Header />
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">Post not found</h1>
          <Link
            to="/blog"
            className="text-[#0EA5E9] underline-offset-4 hover:underline"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const { Component } = post;

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-500 ${
        isDark ? "bg-void text-text-primary" : "bg-[#f5f5f7] text-[#1a1a1a]"
      }`}
    >
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
            className={`mb-8 inline-flex items-center gap-2 text-sm transition-colors ${
              isDark
                ? "text-[#555] hover:text-white"
                : "text-[#aaa] hover:text-black"
            }`}
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
          <h1
            className={`text-3xl font-bold leading-tight sm:text-4xl ${
              isDark ? "text-white" : "text-[#1a1a1a]"
            }`}
          >
            {post.title}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-4">
            <span
              className={`flex items-center gap-1.5 text-xs ${
                isDark ? "text-[#555]" : "text-[#aaa]"
              }`}
            >
              <Calendar size={12} />
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span
              className={`flex items-center gap-1.5 text-xs ${
                isDark ? "text-[#555]" : "text-[#aaa]"
              }`}
            >
              <Clock size={12} />
              {post.readingTime}
            </span>
            <div className="flex items-center gap-1.5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className={`flex items-center gap-1 rounded-md border px-2 py-0.5 text-[10px] font-medium ${
                    isDark
                      ? "border-[#1a1a1a] bg-[#111] text-[#666]"
                      : "border-[#e0e0e0] bg-[#f0f0f0] text-[#888]"
                  }`}
                >
                  <Tag size={9} />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div
            className={`mt-6 h-px w-full ${
              isDark ? "bg-[#1a1a1a]" : "bg-[#e0e0e0]"
            }`}
          />
        </motion.div>

        {/* MDX content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className={`prose max-w-none ${
            isDark ? "prose-invert" : ""
          } prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:leading-relaxed prose-p:mb-4
            prose-a:text-[#0EA5E9] prose-a:no-underline hover:prose-a:underline
            prose-code:rounded prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm
            prose-pre:rounded-xl prose-pre:border
            ${
              isDark
                ? "prose-code:bg-[#111] prose-code:text-[#e0e0e0] prose-pre:border-[#1a1a1a] prose-pre:bg-[#0a0a0a]"
                : "prose-code:bg-[#f0f0f0] prose-code:text-[#333] prose-pre:border-[#e0e0e0] prose-pre:bg-[#fafafa]"
            }
            prose-li:marker:text-[#0EA5E9]
            prose-blockquote:border-l-[#0EA5E9] prose-blockquote:italic
            ${isDark ? "prose-blockquote:text-[#888]" : "prose-blockquote:text-[#666]"}
            prose-strong:font-semibold
            ${isDark ? "prose-strong:text-white" : "prose-strong:text-[#1a1a1a]"}
          `}
        >
          <Component />
        </motion.article>
      </main>

      <Footer />
    </div>
  );
}
