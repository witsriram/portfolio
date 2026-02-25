import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ImagePlus } from "lucide-react";
import { useTheme } from "../components/ThemeContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface Photo {
  id: number;
  src: string;
  title: string;
  location: string;
  aspect: "landscape" | "portrait" | "square";
}

/*
 * To add photos:
 * 1. Drop images into public/photos/
 * 2. Add an entry to this array with the filename, title, location, and aspect ratio
 */
const photos: Photo[] = [
  // Example entries (uncomment and update when you add real photos):
  // { id: 1, src: "/photos/mt-rainier.jpg", title: "Mt. Rainier at Sunset", location: "Washington", aspect: "landscape" },
  // { id: 2, src: "/photos/sedona-red-rocks.jpg", title: "Sedona Red Rocks", location: "Arizona", aspect: "landscape" },
  // { id: 3, src: "/photos/pacific-coast.jpg", title: "Pacific Coast", location: "Oregon", aspect: "portrait" },
];

export default function Photography() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-500 ${
        isDark ? "bg-void text-text-primary" : "bg-[#f5f5f7] text-[#1a1a1a]"
      }`}
    >
      <Header />

      <main className="mx-auto max-w-5xl px-6 pt-24 pb-20">
        {/* Page heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[4px] text-[#0EA5E9]">
            Landscape Photography
          </p>
          <h1
            className={`text-4xl font-bold sm:text-5xl ${
              isDark ? "text-white" : "text-[#1a1a1a]"
            }`}
          >
            Photography
          </h1>
          <p
            className={`mt-3 text-base leading-relaxed ${
              isDark ? "text-[#888]" : "text-[#666]"
            }`}
          >
            Landscapes, nature, and moments captured through my lens.
          </p>
        </motion.div>

        {/* Gallery grid or empty state */}
        {photos.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className={`flex flex-col items-center justify-center rounded-2xl border-2 border-dashed py-24 ${
              isDark
                ? "border-[#1a1a1a] bg-[#0a0a0a]/40"
                : "border-[#ddd] bg-white/40"
            }`}
          >
            <ImagePlus
              size={48}
              className={`mb-4 ${isDark ? "text-[#333]" : "text-[#ccc]"}`}
            />
            <p
              className={`text-lg font-semibold ${
                isDark ? "text-[#444]" : "text-[#bbb]"
              }`}
            >
              Gallery Coming Soon
            </p>
            <p
              className={`mt-2 max-w-sm text-center text-sm ${
                isDark ? "text-[#333]" : "text-[#ccc]"
              }`}
            >
              Drop photos into <code className="font-mono text-[#0EA5E9]">public/photos/</code> and
              add entries to the photos array in this page to build your gallery.
            </p>
          </motion.div>
        ) : (
          <>
            {/* Masonry-style gallery */}
            <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
              {photos.map((photo, i) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="mb-4 break-inside-avoid"
                >
                  <button
                    onClick={() => setSelectedPhoto(photo)}
                    className={`group relative w-full overflow-hidden rounded-2xl border transition-all duration-300 ${
                      isDark
                        ? "border-[#1a1a1a] hover:border-[#2a2a2a] hover:shadow-[0_0_30px_rgba(14,165,233,0.06)]"
                        : "border-[#e0e0e0] shadow-sm hover:border-[#ccc] hover:shadow-md"
                    }`}
                  >
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${
                        photo.aspect === "portrait"
                          ? "aspect-[3/4]"
                          : photo.aspect === "square"
                          ? "aspect-square"
                          : "aspect-[4/3]"
                      }`}
                      loading="lazy"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="p-4">
                        <p className="text-sm font-semibold text-white">
                          {photo.title}
                        </p>
                        <p className="text-xs text-white/70">
                          {photo.location}
                        </p>
                      </div>
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Lightbox */}
            <AnimatePresence>
              {selectedPhoto && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-6 backdrop-blur-sm"
                  onClick={() => setSelectedPhoto(null)}
                >
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative max-h-[85vh] max-w-5xl"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => setSelectedPhoto(null)}
                      className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                    >
                      <X size={16} />
                    </button>
                    <img
                      src={selectedPhoto.src}
                      alt={selectedPhoto.title}
                      className="max-h-[80vh] rounded-xl object-contain"
                    />
                    <div className="mt-3 text-center">
                      <p className="text-sm font-semibold text-white">
                        {selectedPhoto.title}
                      </p>
                      <p className="text-xs text-white/60">
                        {selectedPhoto.location}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
