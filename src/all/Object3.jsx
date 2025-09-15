
export default function Object3() {

const pizza = {
    "id": 1,
    "name": "Classic Margherita Pizza",
    "ingredients": [
      "Pizza dough",
      "Tomato sauce",
      "Fresh mozzarella cheese",
      "Fresh basil leaves",
      "Olive oil",
      "Salt and pepper to taste"
    ],
    "instructions": [
      "Preheat the oven to 475°F (245°C).",
      "Roll out the pizza dough and spread tomato sauce evenly.",
      "Top with slices of fresh mozzarella and fresh basil leaves.",
      "Drizzle with olive oil and season with salt and pepper.",
      "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
      "Slice and serve hot."
    ],
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 15,
    "servings": 4,
    "difficulty": "Easy",
    "cuisine": "Italian",
    "caloriesPerServing": 300,
    "tags": [
      "Pizza",
      "Italian"
    ],
    "userId": 166,
    "image": "https://cdn.dummyjson.com/recipe-images/1.webp",
    "rating": 4.6,
    "reviewCount": 98,
    "mealType": [
      "Dinner"
    ]
  };



  return (
    <div className="bg-amber-100 my-5">
       <div className="flex justify-center"> 
      <img className="h-70 w-70" src={pizza.image} alt=""></img>
      </div>
      
      <div className="p-2">
        <h1 className="font-bold underline">{pizza.name}</h1>
       
        <h1 className="underline"><strong>Ingredients: </strong></h1>
        <h1>> {pizza.ingredients[0]}</h1>
        <h1>> {pizza.ingredients[1]}</h1>
        <h1>> {pizza.ingredients[2]}</h1>
        <h1>> {pizza.ingredients[3]}</h1>
        <h1>> {pizza.ingredients[4]}</h1>
        <h1>> {pizza.ingredients[5]}</h1>
            
        <h1 className="underline font-bold">Instructions:</h1>
        <p>{pizza.instructions[0]}</p>
        <p>{pizza.instructions[1]}</p>
        <p>{pizza.instructions[2]}</p>
        <p>{pizza.instructions[3]}</p>
        <p>{pizza.instructions[4]}</p>
        <p>{pizza.instructions[5]}</p>

        <h1 className="underline" ><strong>Prep-Time: </strong>{pizza.prepTimeMinutes}minutes</h1>
        <h1 className="underline" ><strong>Cook-Time: </strong>{pizza.cookTimeMinutes}minutes</h1>
      </div>




    </div>
  )
}
