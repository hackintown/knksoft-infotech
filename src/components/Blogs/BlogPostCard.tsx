"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock, Tag } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/Button/Button";
import { truncate } from "@/lib/blog/utils"; // Assume this utility function exists
import * as Icons from "lucide-react";

interface BlogPost {
  _id: string;
  title: string;
  content: string;
  image: string;
  tags: string[];
  createdAt: string;
}

export default function BlogPostCard({
  post,
  featured = false,
}: {
  post: BlogPost;
  featured?: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  const formatDate = (dateString?: string) => {
    if (!dateString) return "No date";
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const estimateReadTime = (content?: string) => {
    if (!content) return 0;
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / wordsPerMinute);
    return readTime;
  };

  const generateSlug = (title: string): string => {
    return encodeURIComponent(
      title
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .trim()
    );
  };

  const slug = generateSlug(post.title || "");

  return (
    <motion.div
      className={`rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full ${featured ? "border-2 border-red-300" : ""
        }`}
      whileHover={{ scale: 1.03 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative h-48 lg:h-64 overflow-hidden">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title || "Blog post"}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparen" />
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link href={`/blogs/${encodeURIComponent(slug)}`}>
            <Button variant="primary" size="sm">
              Read More
            </Button>
          </Link>
        </motion.div>
      </div>
      <div className=" relative p-6 flex flex-col flex-grow">
        <Link href={`/blogs/${encodeURIComponent(slug)}`}>
          <h3 className="text-2xl font-semibold mb-4 line-clamp-2 hover:text-blue-400 transition-colors duration-200">
            {post.title || "Untitled Post"}
          </h3>
        </Link>

        <div className="flex flex-wrap items-center text-sm mb-4 gap-4">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-primary" />
            <span className="font-light">{formatDate(post.createdAt)}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2 text-primary" />
            <span className="font-light">
              {estimateReadTime(post.content)} min read
            </span>
          </div>
        </div>
        <div className="mb-6 overflow-hidden font-normal line-clamp-3 text-sm flex-grow">
          {truncate(post.content, 150)}
        </div>
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags?.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10"
            >
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>
        <Link href={`/blogs/${encodeURIComponent(slug)}`} className="mt-auto">
          <Button variant="primary" className="" size="lg" rightIcon={<Icons.ArrowRight />}>
            Continue Reading
          </Button>
        </Link>
        {featured && (
          <div className="absolute -top-2 left-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded">
            Featured
          </div>
        )}
      </div>
    </motion.div>
  );
}
