import {
  IconDroplet,
  IconFlame,
  IconHeartPlus,
  IconPlayFootball,
  IconTrendingUp,
} from "@tabler/icons-react";

import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useGoals } from "../lib/context/GoalsContext";
export function SectionCards() {
  const {
    steps,
    water,
    calories,
    currentSteps,
    currentWater,
    currentCalories,
    totalCalories,
  } = useGoals();
  const completedSteps = currentSteps >= steps ? "bg-card" : "bg-blue-200";
  const completedWater = currentWater >= water ? "bg-card" : "bg-gray-300";
  const completedCalories =
    totalCalories >= calories ? "bg-card" : "bg-amber-400";

  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 md:grid-cols-2 gap-4 px-4 *:data-[slot=card]:*:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className={`@container/card ${completedSteps}`}>
        <CardHeader>
          <div className="flex flex-row items-center gap-2">
            <CardDescription className="flex items-center gap-1">
              <IconPlayFootball />
              Steps
            </CardDescription>
          </div>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {currentSteps.toLocaleString()}
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
      <Card className={`@container/card ${completedWater}`}>
        <CardHeader>
          <div className="flex flex-row items-center gap-2">
            <CardDescription className="flex items-center gap-1">
              <IconDroplet />
              Water
            </CardDescription>
          </div>
          <CardTitle className="text-2xl  font-semibold tabular-nums @[250px]/card:text-3xl">
            {currentWater} L
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
      <Card className="@container/card !bg-red-300">
        <CardHeader>
          <div className="flex flex-row items-center gap-2">
            <CardDescription className="flex items-center gap-1">
              <IconHeartPlus />
              Heart Rate
            </CardDescription>
          </div>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            120 bpm
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
      <Card className={`@container/card ${completedCalories}`}>
        <CardHeader>
          <div className="flex flex-row items-center gap-2">
            <CardDescription className="flex items-center gap-1">
              <IconFlame />
              Calorie Count
            </CardDescription>
          </div>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {totalCalories.toLocaleString()} kcal
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
  );
}
