"use client";
import { CategoryContext } from "@/context/CategoryContext";
import Image from "next/legacy/image";
import Link from "next/link";
import React, { useContext } from "react";

const Blogs = ({ blogs }: { blogs: any }) => {
  const { categoryId } = useContext(CategoryContext);

  const filteredBlogs = blogs.documents.filter(
    (blog: any) => blog.categoryId.$id === categoryId
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
      {filteredBlogs.map((blog: any) => (
        <div key={blog.$id} className="border border-gray-500 rounded-lg p-4">
          <div className="relative w-full h-96 sm:h-48 bg-cover">
            <Image
              priority
              alt="blog image"
              objectFit="cover"
              objectPosition="center"
              layout="fill"
              src={blog.imageUrl}
            />
          </div>
          <Link href={`/blog/${blog.$id}`}>
            <h1 className="font-bold">{blog.title}</h1>
          </Link>
          <p className="text-sm text-gray-400">{blog.description}</p>
          {/* //todo ramdeni xnis cin daido blogi  */}
        </div>
      ))}
    </div>
  );
};

export default Blogs;
