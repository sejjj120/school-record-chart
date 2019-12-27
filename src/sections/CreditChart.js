import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";


// 이수 학점 차트
function CreditChart({ data }) {
  
  return (
    <section>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="yearterm" />
        <YAxis type="number" domain={[0, "4.5"]} />
        <Tooltip />
        <Legend />
        <Bar dataKey="credits" stackId="a" fill="#8884d8" />
      </BarChart>
    </section>
  );
}

export default CreditChart;
