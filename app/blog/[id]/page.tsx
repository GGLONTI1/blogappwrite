import { getBlog } from "@/lib/actions/blog.actions";
import React from "react";

const BlogDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const blog = await getBlog(id); // Fetch the blog data using the ID

  return <div>{JSON.stringify(blog)}</div>;
};

export default BlogDetails;
