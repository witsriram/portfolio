import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock, Tag, ArrowRight } from "lucide-react";
import { getAllPosts } from "../data/blog";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function BlogList() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen font-sans transition-colors duration-500 bg-void text-text-primary">
      <Header />

      <main className="mx-auto max-w-4xl px-6 pt-24 pb-20">
        {/* Page heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[4px] text-[#14B8A6]">
            Technical Writing
          </p>
          <h1 className="text-4xl font-bold sm:text-5xl text-white">
            Blog
          </h1>
          <p className="mt-3 text-base text-[#9a9488]">
            Thoughts on platform engineering, DevOps, and infrastructure at scale.
          </p>
        </motion.div>

        {/* Post grid */}
        {posts.length === 0 ? (
          <p className="text-center text-[#5c574e]">
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
                  className="group block rounded-2xl border p-6 transition-all duration-300 border-[#262420] bg-[#12110F]/80 hover:border-[#332F2A] hover:shadow-[0_0_30px_rgba(20,184,166,0.06)]"
                >
                  <h2 className="text-xl font-bold transition-colors duration-200 text-white group-hover:text-[#14B8A6]">
                    {post.title}
                  </h2>

                  <p className="mt-2 text-sm leading-relaxed text-[#9a9488]">
                    {post.excerpt}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-4">
                    <span className="flex items-center gap-1.5 text-xs text-[#5c574e]">
                      <Calendar size={12} />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
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
                    <ArrowRight
                      size={14}
                      className="ml-auto transition-transform duration-200 group-hover:translate-x-1 text-[#5c574e]"
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
