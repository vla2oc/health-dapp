import React, { PureComponent } from "react";
import { ChartBarInteractive } from "../chart-bar-interactive";
import {
  IconDroplet,
  IconFlame,
  IconEdit,
  IconHeartPlus,
  IconPlayFootball,
  IconTrendingUp,
} from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useGoals } from "../../lib/context/GoalsContext";

export default function AppAnalytics() {
  const { steps } = useGoals();
  const { water } = useGoals();
  const { calories } = useGoals();

  const { currentSteps } = useGoals();
  const { currentWater } = useGoals();
  const { currentCalories } = useGoals();

  const { completedSteps } = useGoals();
  const { totalCalories } = useGoals();

  const completedWater = currentWater >= water ? "bg-card" : "bg-gray-300";
  const completedCalories =
    totalCalories >= calories ? "bg-card" : "bg-amber-400";

  return (
    <div>
      <div className="py-4 md:py-6">
        <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 md:grid-cols-2 gap-4 px-4 *:data-[slot=card]:*:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
          <Card className={`@container/card ${completedSteps}`}>
            <CardHeader>
              <div className="flex flex-row items-center gap-2">
                <CardDescription className="flex items-center gap-1">
                  <IconPlayFootball />
                  Steps
                </CardDescription>
              </div>
              <CardTitle className="text-2xl  font-semibold tabular-nums @[250px]/card:text-3xl">
                {currentSteps.toLocaleString()} /{" "}
                <span className="text-green-600/50 font-bold">
                  {steps.toLocaleString()}
                </span>
              </CardTitle>
              <CardAction></CardAction>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
              <div className="line-clamp-1 flex gap-2 font-medium">
                <a href="/goals" className="flex items-center gap-2">
                  Change your goals <IconEdit className="size-4" />
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
                {currentWater} L /{" "}
                <span className="text-green-600/60 font-bold">{water} L</span>
              </CardTitle>
              <CardAction></CardAction>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
              <div className="line-clamp-1 flex gap-2 font-medium">
                <a href="/goals" className="flex items-center gap-2">
                  Change your goals <IconEdit className="size-4" />
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
                {totalCalories.toLocaleString()} kcal /{" "}
                <span className="text-green-600/60 font-bold">
                  {calories.toLocaleString()} kcal
                </span>
              </CardTitle>
              <CardAction></CardAction>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
              <div className="line-clamp-1 flex gap-2 font-medium">
                <a href="/goals" className="flex items-center gap-2">
                  Change your goals <IconEdit className="size-4" />
                </a>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className="px-4 py-10 lg:px-6">
        <ChartBarInteractive />
      </div>
    </div>
  );
}
