import { Card, CardContent } from "@/components/ui/card";
import { Package, AlertTriangle, Truck, Clock, TrendingUp, TrendingDown } from "lucide-react";
import { DashboardMetrics } from "@shared/schema";

interface MetricsCardsProps {
  metrics?: DashboardMetrics;
  isLoading: boolean;
}

export default function MetricsCards({ metrics, isLoading }: MetricsCardsProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <Card key={i} className="animate-pulse">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-20"></div>
                  <div className="h-8 bg-gray-200 rounded w-16"></div>
                </div>
                <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Total Items Card */}
      <Card className="metric-card">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Total Items</p>
              <p className="text-2xl font-bold text-foreground">{metrics?.totalItems || 0}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Package className="h-6 w-6 text-primary" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <TrendingUp className="h-4 w-4 text-success mr-1" />
            <span className="text-sm text-success">+12%</span>
            <span className="text-sm text-muted-foreground ml-2">from last month</span>
          </div>
        </CardContent>
      </Card>

      {/* Low Stock Alert Card */}
      <Card className="metric-card">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Low Stock Alerts</p>
              <p className="text-2xl font-bold text-warning">{metrics?.lowStockAlerts || 0}</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <AlertTriangle className="h-6 w-6 text-warning" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <TrendingUp className="h-4 w-4 text-error mr-1" />
            <span className="text-sm text-error">+3</span>
            <span className="text-sm text-muted-foreground ml-2">since yesterday</span>
          </div>
        </CardContent>
      </Card>

      {/* Total Suppliers Card */}
      <Card className="metric-card">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Active Suppliers</p>
              <p className="text-2xl font-bold text-foreground">{metrics?.activeSuppliers || 0}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Truck className="h-6 w-6 text-success" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <TrendingUp className="h-4 w-4 text-success mr-1" />
            <span className="text-sm text-success">+8%</span>
            <span className="text-sm text-muted-foreground ml-2">from last quarter</span>
          </div>
        </CardContent>
      </Card>

      {/* Pending Orders Card */}
      <Card className="metric-card">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Pending Orders</p>
              <p className="text-2xl font-bold text-foreground">{metrics?.pendingOrders || 0}</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Clock className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <span className="text-sm text-muted-foreground">
              ${metrics?.totalValue?.toLocaleString() || '0'}
            </span>
            <span className="text-sm text-muted-foreground ml-2">total value</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
