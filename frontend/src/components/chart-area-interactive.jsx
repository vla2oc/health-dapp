"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import { useIsMobile } from "@/hooks/use-mobile";
import {
  Card,
  CardAction,
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export const description = "An interactive area chart";

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
  { date: "2024-05-30", step: 3400, calorie: 280 },
  { date: "2024-05-31", step: 1780, calorie: 230 },
  { date: "2024-06-01", step: 1780, calorie: 200 },
  { date: "2024-06-02", step: 4700, calorie: 410 },
  { date: "2024-06-03", step: 1030, calorie: 160 },
  { date: "2024-06-04", step: 4390, calorie: 380 },
  { date: "2024-06-05", step: 880, calorie: 140 },
  { date: "2024-06-06", step: 2940, calorie: 250 },
  { date: "2024-06-07", step: 3230, calorie: 370 },
  { date: "2024-06-08", step: 3850, calorie: 320 },
  { date: "2024-06-09", step: 4380, calorie: 480 },
  { date: "2024-06-10", step: 1550, calorie: 200 },
  { date: "2024-06-11", step: 920, calorie: 150 },
  { date: "2024-06-12", step: 4920, calorie: 420 },
  { date: "2024-06-13", step: 810, calorie: 130 },
  { date: "2024-06-14", step: 4260, calorie: 380 },
  { date: "2024-06-15", step: 3070, calorie: 350 },
  { date: "2024-06-16", step: 3710, calorie: 310 },
  { date: "2024-06-17", step: 4750, calorie: 520 },
  { date: "2024-06-18", step: 1070, calorie: 170 },
  { date: "2024-06-19", step: 3410, calorie: 290 },
  { date: "2024-06-20", step: 4080, calorie: 450 },
  { date: "2024-06-21", step: 1690, calorie: 210 },
  { date: "2024-06-22", step: 3170, calorie: 270 },
  { date: "2024-06-23", step: 4800, calorie: 530 },
  { date: "2024-06-24", step: 1320, calorie: 180 },
  { date: "2024-06-25", step: 1410, calorie: 190 },
  { date: "2024-06-26", step: 4340, calorie: 380 },
  { date: "2024-06-27", step: 4480, calorie: 490 },
  { date: "2024-06-28", step: 1490, calorie: 200 },
  { date: "2024-06-29", step: 1030, calorie: 160 },
  { date: "2024-06-30", step: 4460, calorie: 400 },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },

  step: {
    label: "Steps",
    color: "var(--primary)",
  },

  calorie: {
    label: "Calories",
    color: "var(--primary)",
  },
};

export function ChartAreaInteractive() {
  const isMobile = useIsMobile();
  const [timeRange, setTimeRange] = React.useState("90d");

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange("7d");
    }
  }, [isMobile]);

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>Your daily activity</CardTitle>
        <CardDescription>
          <span className="hidden @[540px]/card:block">
            Total for the last 3 months
          </span>
          <span className="@[540px]/card:hidden">Last 3 months</span>
        </CardDescription>
        <CardAction>
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="hidden *:data-[slot=toggle-group-item]:!px-4 @[767px]/card:flex"
          >
            <ToggleGroupItem value="90d">Last 3 months</ToggleGroupItem>
            <ToggleGroupItem value="30d">Last 30 days</ToggleGroupItem>
            <ToggleGroupItem value="7d">Last 7 days</ToggleGroupItem>
          </ToggleGroup>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="flex w-40 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden"
              size="sm"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="90d" className="rounded-lg">
                Last 3 months
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                Last 30 days
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Last 7 days
              </SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-step)"
                  stopOpacity={1.0}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-step)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-calorie)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-calorie)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
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
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="calorie"
              type="natural"
              fill="url(#fillMobile)"
              stroke="var(--color-calorie)"
              stackId="a"
            />
            <Area
              dataKey="step"
              type="natural"
              fill="url(#fillDesktop)"
              stroke="var(--color-step)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
