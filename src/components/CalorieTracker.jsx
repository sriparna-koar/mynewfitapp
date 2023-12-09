
import React, { useState } from 'react';


import './CalorieTracker.css';
const FoodDatabase = [
    { id: 1, name: 'Apple', calories: 95 },
    { id: 2, name: 'Banana', calories: 105 },
    { id: 3, name: 'Chicken Breast', calories: 165, protein: 31, carbs: 0, fat: 3.6 },
  { id: 4, name: 'Broccoli', calories: 55, protein: 4.3, carbs: 10, fat: 0.6 },
  ];
  
const CalorieTracker = () => {
  const [selectedFood, setSelectedFood] = useState(null);
  const [mealLogs, setMealLogs] = useState([]);
  const [totalCalories, setTotalCalories] = useState(0);
  const [customFood, setCustomFood] = useState({ name: '', calories: '' });
  const [foodIdCounter, setFoodIdCounter] = useState(3);
  const [customFoodList, setCustomFoodList] = useState([]);
  const [caloriesBurnt, setCaloriesBurnt] = useState(0);
  const [activity, setActivity] = useState('');
  const [duration, setDuration] = useState(0);
  const handleFoodSelection = (food) => {
    setSelectedFood(food);
  };
  const handleBurntCaloriesSubmit = (e) => {
    e.preventDefault();
    
    const burntCalories = calculateBurntCalories(activity, duration); // Implement this function
    setCaloriesBurnt(caloriesBurnt + burntCalories);
    setActivity('');
    setDuration(0);
  };


  const logMeal = () => {
    if (selectedFood) {
      setMealLogs([...mealLogs, selectedFood]);
      setTotalCalories(totalCalories + selectedFood.calories);
      setSelectedFood(null); 
    }
  };

  
  const handleCustomFoodChange = (e) => {
    const { name, value } = e.target;
    setCustomFood({ ...customFood, [name]: value });
  };
  const clearMealLogs = () => {
    setMealLogs([]);
    setTotalCalories(0); 
  };
  

  const addCustomFood = () => {
    if (customFood.name && customFood.calories) {
      setCustomFoodList([...customFoodList, { ...customFood }]);
      setCustomFood({ name: '', calories: '' });
      setFoodIdCounter(foodIdCounter + 1);
    }
  };
  const calculateTotalCalories = () => {
    
    let total = 0;
    mealLogs.forEach((meal) => {
      total += meal.calories;
    });
    customFoodList.forEach((food) => {
        total += parseInt(food.calories);
      });
    
    return total;
  };
  const removeCustomFood = (index) => {
    const updatedCustomFoodList = [...customFoodList];
    updatedCustomFoodList.splice(index, 1); 
    setCustomFoodList(updatedCustomFoodList);
  
  };
  const calculateBurntCalories = (activity, duration) => {
    
    let burntCalories = 0;
  
    
    const metValues = {
      walking: 3.5, 
      running: 7.0, 
      cycling: 8.0, 
     
    };
  
    if (activity.toLowerCase() in metValues) {
     
      const hours = duration / 60;
      burntCalories = metValues[activity.toLowerCase()] * hours * 60 * userWeight;
      
    }
  
    return burntCalories;
  };
  

  

  return (
    <div className="calorie-tracker-container">
      <h2>Calorie and Nutrition Tracker</h2>
      <div className="food-selection">
        <h3>Food Selected:</h3>
        
       
        <ul>
          {FoodDatabase.map((food) => (
            <li key={food.id}>
                {food.name} - {food.calories} calories{' '}
              <button onClick={() => handleFoodSelection(food)}>Select</button>
             
            </li>
          ))}
        </ul>
        
        {selectedFood && (
          <p>Selected: {selectedFood.name} - {selectedFood.calories} calories</p>
        )}
        <button className="log-meal-btn" onClick={logMeal} disabled={!selectedFood}>
          Select Meal
        </button>
        <div className="logged-meals">
        <h3>All Selected Meals:</h3>
        <ul>
          {mealLogs.map((meal, index) => (
            <li key={index}>{meal.name} - {meal.calories} calories</li>
          ))}
        </ul>
        <p>Total Calories Consumed: {calculateTotalCalories()}</p>
        <button onClick={clearMealLogs}>Clear Logs</button>
        
      </div>
      
      </div>
      
      
      <div className="add-custom-food">
        <h3>Add your Desired Food:</h3>
        <div>
          <input
            type="text"
            placeholder="Food Name"
            name="name"
            value={customFood.name}
            onChange={handleCustomFoodChange}
          />
          <input
            type="number"
            placeholder="Calories"
            name="calories"
            value={customFood.calories}
            onChange={handleCustomFoodChange}
          />
          <button  className="add-food-btn" onClick={addCustomFood}>Add Food</button>
          
        </div>
        <ul>
          {customFoodList.map((food, index) => (
            <li key={index}>
              {food.name} - {food.calories} calories
              <button onClick={() => removeCustomFood(index)}>Remove</button>
            </li>
           

          ))}
        </ul>
        
    
      </div>
    </div>
  );
};

export default CalorieTracker;
