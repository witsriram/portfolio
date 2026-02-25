import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock, Tag, ArrowRight } from "lucide-react";
import { useTheme } from "../components/ThemeContext";
import { getAllPosts } from "../data/blog";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function BlogList() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const posts = getAllPosts();

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-500 ${
        isDark ? "bg-void text-text-primary" : "bg-[#f5f5f7] text-[#1a1a1a]"
      }`}
    >
      <Header />

      <main className="mx-auto max-w-4xl px-6 pt-24 pb-20">
        {/* Page heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[4px] text-[#0EA5E9]">
            Technical Writing
          </p>
          <h1
            className={`text-4xl font-bold sm:text-5xl ${
              isDark ? "text-white" : "text-[#1a1a1a]"
            }`}
          >
            Blog
          </h1>
          <p
            className={`mt-3 text-base ${
              isDark ? "text-[#888]" : "text-[#666]"
            }`}
          >
            Thoughts on platform engineering, DevOps, and infrastructure at scale.
          </p>
        </motion.div>

        {/* Post grid */}
        {posts.length === 0 ? (
          <p className={`text-center ${isDark ? "text-[#555]" : "text-[#aaa]"}`}>
            No posts yet — check back soon.
          </p>
        ) : (
          <div className="space-y-6">
            {posts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className={`group block rounded-2xl border p-6 transition-all duration-300 ${
                    isDark
                      ? "border-[#1a1a1a] bg-[#0a0a0a]/80 hover:border-[#2a2a2a] hover:shadow-[0_0_30px_rgba(14,165,233,0.06)]"
                      : "border-[#e0e0e0] bg-white/80 shadow-sm hover:border-[#ccc] hover:shadow-md"
                  }`}
                >
                  <h2
                    className={`text-xl font-bold transition-colors duration-200 ${
                      isDark
                        ? "text-white group-hover:text-[#0EA5E9]"
                        : "text-[#1a1a1a] group-hover:text-[#0EA5E9]"
                    }`}
                  >
                    {post.title}
                  </h2>

                  <p
                    className={`mt-2 text-sm leading-relaxed ${
                      isDark ? "text-[#888]" : "text-[#666]"
                    }`}
                  >
                    {post.excerpt}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-4">
                    <span
                      className={`flex items-center gap-1.5 text-xs ${
                        isDark ? "text-[#555]" : "text-[#aaa]"
                      }`}
                    >
                      <Calendar size={12} />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
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
                    <ArrowRight
                      size={14}
                      className={`ml-auto transition-transform duration-200 group-hover:translate-x-1 ${
                        isDark ? "text-[#555]" : "text-[#aaa]"
                      }`}
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
