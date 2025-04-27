"use client";

import { createAdminClient } from "./appwrite";

const { account, database } = await createAdminClient();
import { ID } from "appwrite";

// Define the BlogValues type
type BlogValues = {
  title: string;
  content: string;
  imageUrl: string;
};

export async function createPost(orderData: BlogValues) {
  const { title, content, imageUrl } = orderData;

  const post = {
    title,
    content,
    imageUrl,
  };

  try {
    const response = await database.createDocument(
      "646f3b0a1c9d4e2f8c5b",
      "646f3b0a1c9d4e2f8c5b",
      ID.unique(),
      post
    );
    console.log("Post created successfully:", response);
  } catch (error) {
    console.error("Error creating post:", error);
  }
  return post;
}
