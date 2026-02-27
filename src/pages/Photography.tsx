import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ImagePlus } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface Photo {
  id: number;
  src: string;
  title: string;
  location: string;
  aspect: "landscape" | "portrait" | "square";
}

const photos: Photo[] = [
  { id: 1, src: "/photos/kerrypark_dec_lights_v-1.JPEG", title: "Kerry Park — December Lights", location: "Seattle, WA", aspect: "landscape" },
  { id: 2, src: "/photos/rainer_lenticular4_girl3.JPEG", title: "Lenticular Clouds over Rainier", location: "Mt. Rainier, WA", aspect: "landscape" },
  { id: 3, src: "/photos/northenlights-AI-1.JPEG", title: "Aurora Borealis", location: "Pacific Northwest", aspect: "portrait" },
  { id: 4, src: "/photos/fall_lake_house-10.JPEG", title: "Autumn Reflections", location: "Lake House, WA", aspect: "landscape" },
  { id: 5, src: "/photos/pink-moon2-1.JPEG", title: "Pink Moon Rising", location: "Washington", aspect: "portrait" },
  { id: 6, src: "/photos/moont_11_2023_2-1-3.JPEG", title: "Rainier at Golden Hour", location: "Mt. Rainier, WA", aspect: "landscape" },
  { id: 7, src: "/photos/ballardlove-2.JPEG", title: "Ballard Love", location: "Seattle, WA", aspect: "landscape" },
  { id: 8, src: "/photos/rockwoodfarm-1.JPEG", title: "Rockwood Farm", location: "Washington", aspect: "landscape" },
  { id: 9, src: "/photos/SRI_2769.JPEG", title: "Pacific Northwest Light", location: "Washington", aspect: "landscape" },
  { id: 10, src: "/photos/IMG_6050.JPEG", title: "Golden Horizons", location: "Washington", aspect: "landscape" },
];

export default function Photography() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <div className="min-h-screen font-sans transition-colors duration-500 bg-void text-text-primary">
      <Header />

      <main className="mx-auto max-w-5xl px-6 pt-24 pb-20">
        {/* Page heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[4px] text-[#14B8A6]">
            Landscape Photography
          </p>
          <h1 className="text-4xl font-bold sm:text-5xl text-white">
            Photography
          </h1>
          <p className="mt-3 text-base leading-relaxed text-[#9a9488]">
            Landscapes, nature, and moments captured through my lens.
          </p>
        </motion.div>

        {/* Gallery grid or empty state */}
        {photos.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed py-24 border-[#262420] bg-[#12110F]/40"
          >
            <ImagePlus
              size={48}
              className="mb-4 text-[#333]"
            />
            <p className="text-lg font-semibold text-[#444]">
              Gallery Coming Soon
            </p>
            <p className="mt-2 max-w-sm text-center text-sm text-[#333]">
              Drop photos into <code className="font-mono text-[#14B8A6]">public/photos/</code> and
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
                    className="group relative w-full overflow-hidden rounded-2xl border transition-all duration-300 border-[#262420] hover:border-[#332F2A] hover:shadow-[0_0_30px_rgba(20,184,166,0.06)]"
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
