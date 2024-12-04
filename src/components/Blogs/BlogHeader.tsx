import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, X } from "lucide-react";

interface BlogHeaderProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedTag: string | null;
  setSelectedTag: (tag: string | null) => void;
  allTags: string[];
}

export default function BlogHeader({
  searchTerm,
  setSearchTerm,
  selectedTag,
  setSelectedTag,
  allTags,
}: BlogHeaderProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <header className="relative overflow-hidden bg-primary/5 py-10">
      <div className="relative z-10 container mx-auto px-4 py-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold text-center mb-3"
        >
          Our Latest&nbsp;
          <span className="inline-block text-primary">Blogs</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base md:text-lg max-w-2xl font-thin mx-auto text-center mb-4"
        >
          Uncover Expert Strategies, In-Depth Market Analysis, and Trading
          Wisdom to Elevate Your Financial Success
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-4xl mx-auto flex items-center gap-4"
        >
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search insights..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white bg-opacity-20 text-white border rounded-full py-3 px-6 pl-12 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-blue-200 transition-all duration-300 hover:bg-opacity-25 focus:bg-opacity-30"
            />
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-blue-200" />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="w-full sm:w-auto px-6 py-3 border hover:shadow-md rounded-full flex items-center justify-center transition-all duration-300 shadow-sm"
            >
              <span className="mr-2">Filter by Tags</span>
              <ChevronDown
                className={`h-5 w-5 transition-transform duration-300 ${isFilterOpen ? "rotate-180" : ""
                  }`}
              />
            </button>

            {selectedTag && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex items-center bg-blue-700 rounded-full px-4 py-2 shadow-md"
              >
                <span className="mr-2">Selected: {selectedTag}</span>
                <button
                  onClick={() => setSelectedTag(null)}
                  className="text-blue-200 hover:text-white transition-colors duration-300"
                >
                  <X className="h-4 w-4" />
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isFilterOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-blue-800 bg-opacity-90 backdrop-blur-sm"
          >
            <div className="container mx-auto px-4 py-8">
              <h3 className="text-xl font-semibold mb-4">Select a tag:</h3>
              <div className="flex flex-wrap gap-3">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => {
                      setSelectedTag(tag === selectedTag ? null : tag);
                      setIsFilterOpen(false);
                    }}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg ${tag === selectedTag
                        ? "bg-blue-500 text-white"
                        : "bg-white bg-opacity-20 text-blue-200 hover:bg-opacity-30"
                      }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
