"use client";

import { createContext, SetStateAction, useState } from "react";

export const CategoryContext = createContext({
  categoryId: "",
  changeCategory: (categoryId: string) => {},
});

import { ReactNode } from "react";

export const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const [categoryId, setCategoryId] = useState("");

  const changeCategory = (categoryId: SetStateAction<string>) => {
    setCategoryId(categoryId);
  };

  return (
    <CategoryContext.Provider value={{ categoryId, changeCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};
