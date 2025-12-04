"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "An interactive bar chart";

const chartData = [
  { date: "2024-04-01", step: 222, calorie: 150 },
  { date: "2024-04-02", step: 97, calorie: 180 },
  { date: "2024-04-03", step: 167, calorie: 120 },
  { date: "2024-04-04", step: 242, calorie: 260 },
  { date: "2024-04-05", step: 373, calorie: 290 },
  { date: "2024-04-06", step: 301, calorie: 340 },
  { date: "2024-04-07", step: 245, calorie: 180 },
  { date: "2024-04-08", step: 409, calorie: 320 },
  { date: "2024-04-09", step: 59, calorie: 110 },
  { date: "2024-04-10", step: 261, calorie: 190 },
  { date: "2024-04-11", step: 327, calorie: 350 },
  { date: "2024-04-12", step: 292, calorie: 210 },
  { date: "2024-04-13", step: 342, calorie: 380 },
  { date: "2024-04-14", step: 137, calorie: 220 },
  { date: "2024-04-15", step: 120, calorie: 170 },
  { date: "2024-04-16", step: 138, calorie: 190 },
  { date: "2024-04-17", step: 446, calorie: 360 },
  { date: "2024-04-18", step: 364, calorie: 410 },
  { date: "2024-04-19", step: 243, calorie: 180 },
  { date: "2024-04-20", step: 89, calorie: 150 },
  { date: "2024-04-21", step: 137, calorie: 200 },
  { date: "2024-04-22", step: 224, calorie: 170 },
  { date: "2024-04-23", step: 138, calorie: 230 },
  { date: "2024-04-24", step: 387, calorie: 290 },
  { date: "2024-04-25", step: 215, calorie: 250 },
  { date: "2024-04-26", step: 75, calorie: 130 },
  { date: "2024-04-27", step: 383, calorie: 420 },
  { date: "2024-04-28", step: 122, calorie: 180 },
  { date: "2024-04-29", step: 315, calorie: 240 },
  { date: "2024-04-30", step: 454, calorie: 380 },
  { date: "2024-05-01", step: 165, calorie: 220 },
  { date: "2024-05-02", step: 293, calorie: 310 },
  { date: "2024-05-03", step: 247, calorie: 190 },
  { date: "2024-05-04", step: 385, calorie: 420 },
  { date: "2024-05-05", step: 481, calorie: 390 },
  { date: "2024-05-06", step: 498, calorie: 520 },
  { date: "2024-05-07", step: 388, calorie: 300 },
  { date: "2024-05-08", step: 149, calorie: 210 },
  { date: "2024-05-09", step: 227, calorie: 180 },
  { date: "2024-05-10", step: 293, calorie: 330 },
  { date: "2024-05-11", step: 335, calorie: 270 },
  { date: "2024-05-12", step: 197, calorie: 240 },
  { date: "2024-05-13", step: 197, calorie: 160 },
  { date: "2024-05-14", step: 448, calorie: 490 },
  { date: "2024-05-15", step: 473, calorie: 380 },
  { date: "2024-05-16", step: 338, calorie: 400 },
  { date: "2024-05-17", step: 499, calorie: 420 },
  { date: "2024-05-18", step: 315, calorie: 350 },
  { date: "2024-05-19", step: 235, calorie: 180 },
  { date: "2024-05-20", step: 177, calorie: 230 },
  { date: "2024-05-21", step: 82, calorie: 140 },
  { date: "2024-05-22", step: 81, calorie: 120 },
  { date: "2024-05-23", step: 252, calorie: 290 },
  { date: "2024-05-24", step: 294, calorie: 220 },
  { date: "2024-05-25", step: 201, calorie: 250 },
  { date: "2024-05-26", step: 213, calorie: 170 },
  { date: "2024-05-27", step: 420, calorie: 460 },
  { date: "2024-05-28", step: 233, calorie: 190 },
  { date: "2024-05-29", step: 78, calorie: 130 },
  { date: "2024-05-30", step: 340, calorie: 280 },
  { date: "2024-05-31", step: 178, calorie: 230 },
  { date: "2024-06-01", step: 178, calorie: 200 },
  { date: "2024-06-02", step: 470, calorie: 410 },
  { date: "2024-06-03", step: 103, calorie: 160 },
  { date: "2024-06-04", step: 439, calorie: 380 },
  { date: "2024-06-05", step: 88, calorie: 140 },
  { date: "2024-06-06", step: 294, calorie: 250 },
  { date: "2024-06-07", step: 323, calorie: 370 },
  { date: "2024-06-08", step: 385, calorie: 320 },
  { date: "2024-06-09", step: 438, calorie: 480 },
  { date: "2024-06-10", step: 155, calorie: 200 },
  { date: "2024-06-11", step: 92, calorie: 150 },
  { date: "2024-06-12", step: 492, calorie: 420 },
  { date: "2024-06-13", step: 81, calorie: 130 },
  { date: "2024-06-14", step: 426, calorie: 380 },
  { date: "2024-06-15", step: 307, calorie: 350 },
  { date: "2024-06-16", step: 371, calorie: 310 },
  { date: "2024-06-17", step: 475, calorie: 520 },
  { date: "2024-06-18", step: 107, calorie: 170 },
  { date: "2024-06-19", step: 341, calorie: 290 },
  { date: "2024-06-20", step: 408, calorie: 450 },
  { date: "2024-06-21", step: 169, calorie: 210 },
  { date: "2024-06-22", step: 317, calorie: 270 },
  { date: "2024-06-23", step: 480, calorie: 530 },
  { date: "2024-06-24", step: 132, calorie: 180 },
  { date: "2024-06-25", step: 141, calorie: 190 },
  { date: "2024-06-26", step: 434, calorie: 380 },
  { date: "2024-06-27", step: 448, calorie: 490 },
  { date: "2024-06-28", step: 149, calorie: 200 },
  { date: "2024-06-29", step: 103, calorie: 160 },
  { date: "2024-06-30", step: 446, calorie: 400 },
];

const chartConfig = {
  views: {
    label: "Steps",
  },

  step: {
    label: "Steps",
    color: "var(--chart-2)",
  },

  calorie: {
    label: "Calories Burned",
    color: "var(--chart-1)",
  },
};

export function ChartBarInteractive() {
  const [activeChart, setActiveChart] = React.useState("step");

  const total = React.useMemo(
    () => ({
      step: chartData.reduce((acc, curr) => acc + curr.step, 0),
      calorie: chartData.reduce((acc, curr) => acc + curr.calorie, 0),
    }),
    []
  );

  return (
    <Card className="py-0">
      <CardHeader className="flex flex-col items-stretch border-b !p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 pt-4 pb-3 sm:!py-0">
          <CardTitle>Analytics Chart</CardTitle>
          <CardDescription>
            Showing total analytics for the last 3 months
          </CardDescription>
        </div>
        <div className="flex">
          {["step", "calorie"].map((key) => {
            const chart = key;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="data-[active=true]:bg-muted/50 relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l sm:border-t-0 sm:border-l sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-muted-foreground text-xs">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg leading-none font-bold sm:text-3xl">
                  {total[key].toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
