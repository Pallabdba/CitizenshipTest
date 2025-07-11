import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, AlertTriangle, Truck, Edit } from "lucide-react";
import { ActivityLog } from "@shared/schema";

interface RecentActivityProps {
  activity?: ActivityLog[];
  isLoading: boolean;
}

export default function RecentActivity({ activity, isLoading }: RecentActivityProps) {
  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'inventory_add':
        return <Plus className="h-4 w-4 text-blue-600" />;
      case 'stock_alert':
        return <AlertTriangle className="h-4 w-4 text-orange-600" />;
      case 'order_received':
        return <Truck className="h-4 w-4 text-green-600" />;
      case 'inventory_update':
        return <Edit className="h-4 w-4 text-purple-600" />;
      default:
        return <Plus className="h-4 w-4 text-blue-600" />;
    }
  };

  const getActivityIconBg = (type: string) => {
    switch (type) {
      case 'inventory_add':
        return 'bg-blue-100';
      case 'stock_alert':
        return 'bg-orange-100';
      case 'order_received':
        return 'bg-green-100';
      case 'inventory_update':
        return 'bg-purple-100';
      default:
        return 'bg-blue-100';
    }
  };

  const formatTimestamp = (timestamp: Date) => {
    const now = new Date();
    const diff = now.getTime() - new Date(timestamp).getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 60) {
      return `${minutes} min ago`;
    } else if (hours < 24) {
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else {
      return `${days} day${days > 1 ? 's' : ''} ago`;
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Recent Activity</CardTitle>
          <Button variant="link" className="text-sm text-primary">
            View All
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="activity-item animate-pulse">
                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
                <div className="h-3 bg-gray-200 rounded w-16"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {activity?.map((item) => (
              <div key={item.id} className="activity-item">
                <div className={`w-8 h-8 ${getActivityIconBg(item.type)} rounded-full flex items-center justify-center`}>
                  {getActivityIcon(item.type)}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{item.message}</p>
                  <p className="text-xs text-muted-foreground">{item.details}</p>
                </div>
                <span className="text-xs text-muted-foreground">
                  {formatTimestamp(item.timestamp)}
                </span>
              </div>
            ))}
            {(!activity || activity.length === 0) && (
              <div className="text-center py-8 text-muted-foreground">
                No recent activity
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
