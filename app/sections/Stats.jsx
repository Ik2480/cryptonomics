"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

export default function Stats() {
  // Dummy token allocation data
  const data = [
    { name: "Team", value: 25 },
    { name: "Investors", value: 20 },
    { name: "Community", value: 35 },
    { name: "Reserve", value: 20 },
  ];

  const COLORS = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444"];

  return (
    <section id="stats" className="w-full py-16 lg:py-24 bg-neutral">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12">
          Token <span className="text-primary">Allocation</span>
        </h2>

        <div className="w-full h-96">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={120}
                dataKey="value"
                label
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
