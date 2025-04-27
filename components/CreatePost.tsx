import React from "react";

type BlogValues = {
  title: string;
  content: string;
  imageUrl: string;
};
export interface OrderData extends BlogValues {
  id: string;
  createdAt: string;
  updatedAt: string;
  author: string;
}

const CreatePost = () => {
  return <div>create post</div>;
};

export default CreatePost;
