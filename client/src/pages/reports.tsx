import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, FileText, Download, TrendingUp } from "lucide-react";
import Charts from "@/components/dashboard/charts";

export default function Reports() {
  const handleExport = (type: string) => {
    console.log(`Exporting ${type} report...`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reports & Analytics</h1>
          <p className="text-sm text-gray-500">Generate insights from your inventory and supply chain data</p>
        </div>
        <div className="flex items-center space-x-3">
          <Select defaultValue="30">
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Time Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7">Last 7 days</SelectItem>
              <SelectItem value="30">Last 30 days</SelectItem>
              <SelectItem value="90">Last 90 days</SelectItem>
              <SelectItem value="365">Last 12 months</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={() => handleExport('comprehensive')}>
            <Download className="h-4 w-4 mr-2" />
            Export All
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Inventory Turnover</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.2x</div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Stockout Rate</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.1%</div>
            <p className="text-xs text-muted-foreground">
              -0.5% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Supplier Performance</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.6%</div>
            <p className="text-xs text-muted-foreground">
              +2.1% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <Charts />

      {/* Report Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Inventory Reports</CardTitle>
            <CardDescription>
              Detailed reports about your inventory performance
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Stock Level Report</h4>
                <p className="text-sm text-gray-500">Current stock levels across all items</p>
              </div>
              <Button variant="outline" size="sm" onClick={() => handleExport('stock-levels')}>
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Low Stock Alert Report</h4>
                <p className="text-sm text-gray-500">Items below minimum stock levels</p>
              </div>
              <Button variant="outline" size="sm" onClick={() => handleExport('low-stock')}>
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Inventory Valuation</h4>
                <p className="text-sm text-gray-500">Total inventory value by category</p>
              </div>
              <Button variant="outline" size="sm" onClick={() => handleExport('valuation')}>
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Supply Chain Reports</CardTitle>
            <CardDescription>
              Analyze your supply chain performance
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Supplier Performance</h4>
                <p className="text-sm text-gray-500">On-time delivery and quality metrics</p>
              </div>
              <Button variant="outline" size="sm" onClick={() => handleExport('supplier-performance')}>
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Purchase Order Analysis</h4>
                <p className="text-sm text-gray-500">Purchase patterns and trends</p>
              </div>
              <Button variant="outline" size="sm" onClick={() => handleExport('purchase-analysis')}>
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Cost Analysis</h4>
                <p className="text-sm text-gray-500">Cost trends and savings opportunities</p>
              </div>
              <Button variant="outline" size="sm" onClick={() => handleExport('cost-analysis')}>
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
