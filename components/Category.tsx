"use client";
import React, { useContext } from "react";
import { CategoryContext } from "../context/CategoryContext";

const Category = ({
  categoryId,
}: {
  categoryId: { $id: string; title: string };
}) => {
  const { categoryId: currentCategoryId, changeCategory } =
    useContext(CategoryContext);

  if (!categoryId || !categoryId.$id || !categoryId.title) {
    console.error("Invalid category", categoryId);
    return null;
  }
  return (
    <div
      onClick={() => changeCategory(categoryId.$id)}
      className={`${
        currentCategoryId === categoryId.$id
          ? "bg-blue-700 border-2 border-gray-50"
          : "border-2 border-gray-700"
      } shrink-0 rounded-lg py-1.5 px-5 text-base font-medium text-white hover:cursor-pointer`}
    >
      {categoryId.title.toUpperCase()}
    </div>
  );
};

export default Category;
