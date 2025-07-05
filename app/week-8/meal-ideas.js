'use client';

import { useEffect, useState } from 'react';

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function fetchMealIdeas(ingredient) {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      if (data.meals) {
        setMeals(data.meals);
      } else {
        setMeals([]); 
      }
    } catch (error) {
      console.error('API fail:', error);
      setMeals([]);
    }
  }

  useEffect(() => {
    if (ingredient) {
      fetchMealIdeas(ingredient);
    } else {
      setMeals([]);
    }
  }, [ingredient]);

  
  return (
    <div className="p-4 border rounded shadow-sm bg-blue-300">
      <h2 className="text-xl font-bold mb-2">Meal Ideas for: {ingredient || '-'}</h2>
      {meals.length === 0 ? (
        <p className="text-gray-500">No meal ideas found.</p>
      ) : (
        <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2">
          {meals.map((meal) => (
            <li key={meal.idMeal} className="border p-2 rounded shadow-sm">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-auto rounded"
              />
              <p className="mt-2 font-semibold">{meal.strMeal}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
