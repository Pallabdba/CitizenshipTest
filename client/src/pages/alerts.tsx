import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Bell, AlertTriangle, CheckCircle, Clock } from "lucide-react";
import { CriticalAlert, InventoryItemWithDetails } from "@shared/schema";

export default function Alerts() {
  const { data: alerts, isLoading: alertsLoading } = useQuery<CriticalAlert[]>({
    queryKey: ['/api/dashboard/alerts'],
  });

  const { data: inventory } = useQuery<InventoryItemWithDetails[]>({
    queryKey: ['/api/inventory'],
  });

  const lowStockItems = inventory?.filter(item => item.stockStatus === 'low' || item.stockStatus === 'critical') || [];

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'stock_critical':
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case 'delivery_overdue':
        return <Clock className="h-4 w-4 text-orange-500" />;
      case 'quality_issue':
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      default:
        return <Bell className="h-4 w-4 text-blue-500" />;
    }
  };

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'high':
        return <Badge variant="destructive">High</Badge>;
      case 'medium':
        return <Badge variant="outline" className="text-orange-600 border-orange-600">Medium</Badge>;
      case 'low':
        return <Badge variant="outline">Low</Badge>;
      default:
        return <Badge variant="outline">{severity}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Alerts & Notifications</h1>
          <p className="text-sm text-gray-500">Monitor critical alerts and configure notification settings</p>
        </div>
        <Button>
          <CheckCircle className="h-4 w-4 mr-2" />
          Mark All as Read
        </Button>
      </div>

      {/* Alert Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Alert Settings</CardTitle>
          <CardDescription>
            Configure when and how you receive alerts
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <p className="text-sm font-medium">Low Stock Alerts</p>
              <p className="text-xs text-gray-500">Get notified when items are running low</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <p className="text-sm font-medium">Critical Stock Alerts</p>
              <p className="text-xs text-gray-500">Immediate notifications for critical stock levels</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <p className="text-sm font-medium">Delivery Delays</p>
              <p className="text-xs text-gray-500">Alerts for overdue deliveries</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <p className="text-sm font-medium">Quality Issues</p>
              <p className="text-xs text-gray-500">Notifications for quality control problems</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      {/* Critical Alerts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-red-500" />
            Critical Alerts
          </CardTitle>
          <CardDescription>
            Urgent issues that require immediate attention
          </CardDescription>
        </CardHeader>
        <CardContent>
          {alertsLoading ? (
            <div className="text-center py-8">Loading alerts...</div>
          ) : (
            <div className="space-y-4">
              {alerts?.map((alert) => (
                <div key={alert.id} className="alert-item">
                  <div className="flex items-start space-x-3">
                    {getAlertIcon(alert.type)}
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900">{alert.title}</p>
                        {getSeverityBadge(alert.severity)}
                      </div>
                      <p className="text-xs text-gray-600 mt-1">{alert.message}</p>
                      <Button variant="link" className="p-0 h-auto text-xs mt-2">
                        {alert.actionText}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
              {(!alerts || alerts.length === 0) && (
                <div className="text-center py-8 text-gray-500">
                  No critical alerts at this time
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Low Stock Items */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-orange-500" />
            Low Stock Items
          </CardTitle>
          <CardDescription>
            Items that are below their minimum stock levels
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {lowStockItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-gray-300 rounded"></div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{item.name}</p>
                    <p className="text-xs text-gray-500">SKU: {item.sku}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-right">
                    <p className="text-sm font-medium">{item.currentStock} units</p>
                    <p className="text-xs text-gray-500">Min: {item.minStockLevel}</p>
                  </div>
                  <Badge className={item.stockStatus === 'critical' ? 'status-critical' : 'status-low'}>
                    {item.stockStatus === 'critical' ? 'Critical' : 'Low Stock'}
                  </Badge>
                  <Button size="sm" variant="outline">
                    Reorder
                  </Button>
                </div>
              </div>
            ))}
            {lowStockItems.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                All items are at healthy stock levels
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
