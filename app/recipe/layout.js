"use client"
import React, { useState } from "react";
import "./RecipePage.scss";
import { useRecipeList } from "features/recipe/recipePage/hooks/useRecipeList";
import Sidebar from "features/recipe/recipePage/components/Sidebar";
import { RecipeList } from "features/recipe/recipePage/components/RecipeList";

export default function RootLayout({children}) {
  const [selectedSub, setSelectedSub] = useState(null);
  const recipeList = useRecipeList(selectedSub);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar onSelectCategory={(mainId, subId) => setSelectedSub(subId)} />

      <div style={{ flex: 1, padding: "20px" }}>
        <h2>레시피</h2>
        {/* <RecipeList recipeList={recipeList} /> */}
        {children}
      </div>
    </div>
  );
}