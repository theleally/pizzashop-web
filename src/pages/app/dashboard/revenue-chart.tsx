import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import colors from "tailwindcss/colors";

import { ResponsiveContainer, LineChart, XAxis, YAxis, CartesianGrid, Line, Tooltip } from "recharts";

const data = [
  { date: "10/03", revenue: 1200 },
  { date: "11/03", revenue: 900 },
  { date: "12/03", revenue: 700 },
  { date: "13/03", revenue: 2500 },
  { date: "14/03", revenue: 3600 },
  { date: "15/03", revenue: 600 },
  { date: "16/03", revenue: 500 },
]

export function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">Receita no período</CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>

      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>

            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              dy={16}
            />

            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              width={80}
              tickFormatter={(value: number) => value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
            />
            
            <CartesianGrid vertical={false} className="stroke-muted" />
            <Line type="linear" strokeWidth={2} dataKey="revenue" stroke={colors["violet"]["500"]} />

          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}