"use server";
import { Query } from "appwrite";
import { databases } from "../appwrite.config";

export const getBlogs = async () => {
  try {
    const blogs = await databases.listDocuments(
      process.env.DATABASE_ID!,
      process.env.BLOGS_COLLECTION_ID!
    );
    return blogs;
  } catch (error) {
    console.error("Fetching blogs failed:", error);
    return null;
  }
};

export const getBlog = async (blogId: string) => {
  try {
    const blog = await databases.listDocuments(
      process.env.DATABASE_ID!,
      process.env.BLOGS_COLLECTION_ID!,
      [Query.equal("$id", blogId)]
    );
    console.log("blog", blog);

    return blog;
  } catch (error) {
    console.error("Fetching blogs failed:", error);
    return null;
  }
};
