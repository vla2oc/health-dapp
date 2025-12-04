import { createContext, useContext, useMemo } from "react";
import { useEffect, useState } from "react";

const GoalsContext = createContext();

const initialCaloriesArray = [275, 100, 200];

export const GoalsProvider = ({ children }) => {
  const [steps, setSteps] = useState(10000);
  const [water, setWater] = useState(2);
  const [calories, setCalories] = useState(2000);
  const currentSteps = 10000;
  const currentCalories = 2000;
  const currentWater = 1.5;
  const [caloriesArray, setCaloriesArray] = useState(initialCaloriesArray);
  const completedSteps = currentSteps >= steps ? "bg-card" : "bg-blue-200";

  const totalCalories = useMemo(() => {
    return caloriesArray.reduce((acc, curr) => acc + curr, 0);
  }, [caloriesArray]);

  const value = useMemo(() => {
    return {
      steps,
      setSteps,
      water,
      setWater,
      calories,
      setCalories,
      currentSteps,
      currentCalories,
      currentWater,
      completedSteps,
      caloriesArray,
      setCaloriesArray,
      totalCalories,
    };
  }, [
    steps,
    water,
    calories,
    currentSteps,
    currentCalories,
    currentWater,
    completedSteps,
    caloriesArray,
    setCaloriesArray,
    totalCalories,
  ]);

  return (
    <GoalsContext.Provider value={value}>{children}</GoalsContext.Provider>
  );
};
export const useGoals = () => {
  return useContext(GoalsContext);
};
