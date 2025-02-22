import React from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "./ai";


export default function Main() {


  const [ingredients, setIngredients] = React.useState([])


  const [recipe, setRecipe] = React.useState("");
  const recipeSection=React.useRef(null)

  React.useEffect(() => {
    if(recipe !=="" && recipeSection.current !== null){
      recipeSection.current.scrollIntoView({behavior:"smooth"})
    }
  },[recipe])

 
  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }


  async function getRecipe() {
    const recipeResult=await getRecipeFromMistral(ingredients)
    setRecipe(recipeResult)
  }


  return (
    <main>
      <form action={addIngredient} className="add-form">
        <input
          type="text"
          placeholder="e.g.oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>

      {
      ingredients.length > 0 &&
       <IngredientsList 
          ref={recipeSection}
          ingredients={ingredients}
          getRecipe={getRecipe}
      />
      }
      {recipe && <ClaudeRecipe recipe={recipe}/>}
    </main>
  );
}
