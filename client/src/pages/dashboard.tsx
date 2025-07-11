import { useQuery } from "@tanstack/react-query";
import MetricsCards from "@/components/dashboard/metrics-cards";
import Charts from "@/components/dashboard/charts";
import RecentActivity from "@/components/dashboard/recent-activity";
import CriticalAlerts from "@/components/dashboard/critical-alerts";
import InventoryTable from "@/components/inventory/inventory-table";
import { DashboardMetrics, ActivityLog, CriticalAlert } from "@shared/schema";

export default function Dashboard() {
  const { data: metrics, isLoading: metricsLoading } = useQuery<DashboardMetrics>({
    queryKey: ['/api/dashboard/metrics'],
  });

  const { data: activity, isLoading: activityLoading } = useQuery<ActivityLog[]>({
    queryKey: ['/api/dashboard/activity'],
  });

  const { data: alerts, isLoading: alertsLoading } = useQuery<CriticalAlert[]>({
    queryKey: ['/api/dashboard/alerts'],
  });

  return (
    <div className="space-y-6">
      {/* Metrics Cards */}
      <MetricsCards metrics={metrics} isLoading={metricsLoading} />

      {/* Charts Section */}
      <Charts />

      {/* Recent Activity and Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentActivity activity={activity} isLoading={activityLoading} />
        </div>
        <div>
          <CriticalAlerts alerts={alerts} isLoading={alertsLoading} />
        </div>
      </div>

      {/* Inventory Overview */}
      <InventoryTable showTitle={true} />
    </div>
  );
}
