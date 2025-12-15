"use client"

import { useSelectSubStore } from "@/store/selectSubStore";
import { RecipeList } from "features/recipe/recipePage/components/RecipeList";
import { useRecipeList } from "features/recipe/recipePage/hooks/useRecipeList";

export default function recipe () {
    const  { selectSub } = useSelectSubStore();
    const recipeList = useRecipeList(selectSub);
    
    return (
        <>
            <RecipeList recipeList={recipeList} />
        </>
    )
}