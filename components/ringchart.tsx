"use client";

import { PieChart, Pie, Cell } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { name: "Personal", value: 4000 },
  { name: "Travel", value: 1500 },
  { name: "Equipment", value: 2000 },
];

const COLORS = ["#3b82f6", "#22c55e", "#f59e0b"];

const total = data.reduce((sum, item) => sum + item.value, 0);
const budget = 8000; // example total budget
const percentUsed = Math.round((total / budget) * 100);

export default function BudgetChart() {
  return (
    <Card className="w-full border border-gray-200">
      <CardHeader className="px-4">
        <CardTitle>Budget Usage</CardTitle>
      </CardHeader>

      <CardContent className="px-4 flex justify-center items-center relative">
        <PieChart width={200} height={200}>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={70}   // donut hole
            outerRadius={100}
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>

        {/* Center Text */}
        <div className="absolute text-center">
          <p className="text-2xl font-bold">{percentUsed}%</p>
          <p className="text-sm text-gray-500">Used</p>
        </div>
      </CardContent>
    </Card>
  );
}