export default function IngredientsList(props) {
  
  const items = props.ingredients.map((ingredient) => (
    <li key={ingredient}> {ingredient} </li>
  ))
  
  return (
    <section>
      <h2>Ingredients on hand:</h2>
      <ul>{items}</ul>
      {props.ingredients.length > 3 && (
        <div className="recipe">
          <div ref={props.ref}>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={props.getRecipe}>Get a recipe</button>
        </div>
      )}
    </section>
  );
}
