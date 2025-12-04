import React, { useState } from "react";
import {
  IconDroplet,
  IconEdit,
  IconFlame,
  IconHeartPlus,
  IconPlayFootball,
  IconTrendingUp,
} from "@tabler/icons-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import App from "@/App";
import { useGoals } from "../../lib/context/GoalsContext";
export default function AppGoals() {
  const { steps, setSteps } = useGoals();
  const { water, setWater } = useGoals();
  const { calories, setCalories } = useGoals();
  const [isEditingSteps, setIsEditingSteps] = useState(false);
  const [isEditingCalories, setIsEditingCalories] = useState(false);

  const handleStepsChange = () => {
    setIsEditingSteps(false);
  };
  const hadleStepsCancel = () => {
    setIsEditingSteps(false);
    setSteps(10000);
  };
  const handleCaloriesChange = () => {
    setIsEditingCalories(false);
  };
  const handleCaloriesCancel = () => {
    setIsEditingCalories(false);
    setCalories(2000);
  };

  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 md:grid-cols-1 gap-4 px-4 *:data-[slot=card]:*:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <div className="py-6 ">
        <Card className="@container/card bg-card">
          <CardHeader>
            <div className="flex flex-row items-center justify-center gap-2">
              <CardDescription className="text-2xl  md:text-5xl  text-black">
                Congratulations! You've reached your goals today
              </CardDescription>
            </div>
            <CardTitle className="!text-6xl py-6 flex justify-center font-semibold tabular-nums @[250px]/card:text-3xl">
              128 days
            </CardTitle>
            <CardAction></CardAction>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium">
              <a href="/analytics" className="flex items-center gap-2">
                Check your daily analytics <IconTrendingUp className="size-4" />
              </a>
            </div>
          </CardFooter>
        </Card>
      </div>
      <Card className="@container/card bg-gray-200">
        <CardHeader>
          <div className="flex flex-col gap-2">
            <CardDescription className="flex items-center gap-1">
              <IconPlayFootball />
              Steps
            </CardDescription>
            {/* 2. Отображение в зависимости от режима */}
            {isEditingSteps ? (
              // РЕЖИМ РЕДАКТИРОВАНИЯ
              <div className="flex gap-2 items-center">
                <Input
                  type="number"
                  value={steps}
                  onChange={(e) => setSteps(Number(e.target.value))}
                  className="w-24 text-2xl"
                />
                <span className="text-2xl font-semibold">/ Goal</span>
              </div>
            ) : (
              // РЕЖИМ ПРОСМОТРА
              <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                {steps.toLocaleString()} /{" "}
                <span className="text-green-600/50 font-bold">
                  {steps.toLocaleString()}
                </span>
              </CardTitle>
            )}
          </div>

          <CardAction>
            {isEditingSteps ? (
              // КНОПКИ В РЕЖИМЕ РЕДАКТИРОВАНИЯ
              <div className="flex gap-2">
                <button onClick={handleStepsChange}>
                  <Badge variant="success">Save</Badge>
                </button>
                <button onClick={hadleStepsCancel}>
                  <Badge variant="destructive">Cancel</Badge>
                </button>
              </div>
            ) : (
              <button onClick={() => setIsEditingSteps(true)}>
                <Badge variant="default">
                  <IconEdit />
                  Edit
                </Badge>
              </button>
            )}
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            <a href="/analytics" className="flex items-center gap-2">
              Check your daily analytics <IconTrendingUp className="size-4" />
            </a>
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card bg-blue-200">
        <CardHeader>
          <div className="flex flex-row items-center gap-2">
            <CardDescription className="flex items-center gap-1">
              <IconDroplet />
              Water
            </CardDescription>
          </div>
          <CardTitle className="text-2xl  font-semibold tabular-nums @[250px]/card:text-3xl">
            <span className="text-green-800/60 font-bold">2 L</span>
          </CardTitle>
          <CardAction>
            <Badge>
              <IconEdit />
              <button>Edit</button>
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            <a href="/analytics" className="flex items-center gap-2">
              Check your daily analytics <IconTrendingUp className="size-4" />
            </a>
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card bg-amber-400">
        <CardHeader>
          <div className="flex flex-col gap-2">
            <CardDescription className="flex items-center gap-1">
              <IconFlame />
              Calorie Count
            </CardDescription>
            {isEditingCalories ? (
              <div className="flex  gap-2 ">
                <Input
                  type="number"
                  value={calories}
                  onChange={(e) => setCalories(Number(e.target.value))}
                  className="w-24 text-2xl"
                />
                <span className="text-2xl font-semibold">/ Goal</span>
              </div>
            ) : (
              <CardTitle className="text-2xl  font-semibold tabular-nums @[250px]/card:text-3xl">
                {calories.toLocaleString()} /{" "}
                <span className="text-green-600/50 font-bold">
                  {calories.toLocaleString()}
                </span>
              </CardTitle>
            )}
          </div>

          <CardAction>
            {isEditingCalories ? (
              <div className="flex gap-2">
                <button onClick={handleCaloriesChange}>
                  <Badge variant="success">Save</Badge>
                </button>
                <button onClick={handleCaloriesCancel}>
                  <Badge variant="destructive">Cancel</Badge>
                </button>
              </div>
            ) : (
              <button onClick={() => setIsEditingCalories(true)}>
                <Badge variant="default">
                  <IconEdit />
                  Edit
                </Badge>
              </button>
            )}
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            <a href="/analytics" className="flex items-center gap-2">
              Check your daily analytics <IconTrendingUp className="size-4" />
            </a>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
