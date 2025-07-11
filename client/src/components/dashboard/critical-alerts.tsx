import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Clock, TriangleAlert } from "lucide-react";
import { CriticalAlert } from "@shared/schema";

interface CriticalAlertsProps {
  alerts?: CriticalAlert[];
  isLoading: boolean;
}

export default function CriticalAlerts({ alerts, isLoading }: CriticalAlertsProps) {
  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'stock_critical':
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case 'delivery_overdue':
        return <Clock className="h-4 w-4 text-orange-500" />;
      case 'quality_issue':
        return <TriangleAlert className="h-4 w-4 text-yellow-500" />;
      default:
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Critical Alerts</CardTitle>
          <Badge variant="destructive">
            {alerts?.length || 0}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="alert-item animate-pulse">
                <div className="w-5 h-5 bg-gray-200 rounded"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {alerts?.map((alert) => (
              <div key={alert.id} className="alert-item">
                <div className="flex items-start space-x-3">
                  {getAlertIcon(alert.type)}
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{alert.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{alert.message}</p>
                    <Button variant="link" className="p-0 h-auto text-xs mt-2 text-primary">
                      {alert.actionText}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
            {(!alerts || alerts.length === 0) && (
              <div className="text-center py-8 text-muted-foreground">
                No critical alerts at this time
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
