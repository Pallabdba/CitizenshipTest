import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const COLORS = ['#1976D2', '#388E3C', '#F57C00', '#9C27B0', '#757575'];

export default function Charts() {
  const { data: trendsData, isLoading: trendsLoading } = useQuery<{ month: string; stock: number }[]>({
    queryKey: ['/api/dashboard/trends'],
  });

  const { data: distributionData, isLoading: distributionLoading } = useQuery<{ category: string; count: number; percentage: number }[]>({
    queryKey: ['/api/dashboard/distribution'],
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Inventory Trends Chart */}
      <Card className="chart-container">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Inventory Trends</CardTitle>
            <Select defaultValue="30">
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="30">Last 30 days</SelectItem>
                <SelectItem value="90">Last 90 days</SelectItem>
                <SelectItem value="365">Last 12 months</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            {trendsLoading ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-muted-foreground">Loading chart...</div>
              </div>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trendsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="stock" 
                    stroke="#1976D2" 
                    strokeWidth={2}
                    dot={{ fill: '#1976D2' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Category Distribution Chart */}
      <Card className="chart-container">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Category Distribution</CardTitle>
            <Button variant="link" className="text-sm text-primary">
              View Details
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            {distributionLoading ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-muted-foreground">Loading chart...</div>
              </div>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={distributionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="count"
                  >
                    {distributionData?.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
