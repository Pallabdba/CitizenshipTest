import { apiRequest } from "./queryClient";
import { ExportOptions } from "./types";

export class ExportService {
  /**
   * Export inventory data to CSV format
   */
  static async exportInventoryCSV(options?: ExportOptions): Promise<void> {
    try {
      const response = await fetch('/api/export/inventory', {
        method: 'GET',
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Failed to export inventory data');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `inventory-export-${new Date().toISOString().split('T')[0]}.csv`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Export failed:', error);
      throw new Error('Failed to export inventory data. Please try again.');
    }
  }

  /**
   * Export dashboard metrics to CSV format
   */
  static async exportDashboardMetrics(): Promise<void> {
    try {
      const metricsResponse = await apiRequest('GET', '/api/dashboard/metrics');
      const metrics = await metricsResponse.json();
      
      const trendsResponse = await apiRequest('GET', '/api/dashboard/trends');
      const trends = await trendsResponse.json();
      
      const distributionResponse = await apiRequest('GET', '/api/dashboard/distribution');
      const distribution = await distributionResponse.json();

      // Create CSV content
      const csvContent = [
        ['Dashboard Export', new Date().toISOString()],
        [''],
        ['Metrics'],
        ['Total Items', metrics.totalItems],
        ['Low Stock Alerts', metrics.lowStockAlerts],
        ['Active Suppliers', metrics.activeSuppliers],
        ['Pending Orders', metrics.pendingOrders],
        ['Total Value', `$${metrics.totalValue.toLocaleString()}`],
        [''],
        ['Inventory Trends'],
        ['Month', 'Stock Level'],
        ...trends.map((trend: any) => [trend.month, trend.stock]),
        [''],
        ['Category Distribution'],
        ['Category', 'Count', 'Percentage'],
        ...distribution.map((item: any) => [item.category, item.count, `${item.percentage}%`])
      ];

      const csvString = csvContent.map(row => row.join(',')).join('\n');
      
      const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `dashboard-metrics-${new Date().toISOString().split('T')[0]}.csv`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Export failed:', error);
      throw new Error('Failed to export dashboard metrics. Please try again.');
    }
  }

  /**
   * Export low stock items report
   */
  static async exportLowStockReport(): Promise<void> {
    try {
      const response = await apiRequest('GET', '/api/inventory');
      const inventory = await response.json();
      
      const lowStockItems = inventory.filter((item: any) => 
        item.stockStatus === 'low' || item.stockStatus === 'critical'
      );

      const csvContent = [
        ['Low Stock Report', new Date().toISOString()],
        [''],
        ['Product Name', 'SKU', 'Current Stock', 'Min Stock Level', 'Status', 'Category', 'Supplier'],
        ...lowStockItems.map((item: any) => [
          item.name,
          item.sku,
          item.currentStock,
          item.minStockLevel,
          item.stockStatus,
          item.category?.name || 'Uncategorized',
          item.supplier?.name || 'No supplier'
        ])
      ];

      const csvString = csvContent.map(row => row.join(',')).join('\n');
      
      const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `low-stock-report-${new Date().toISOString().split('T')[0]}.csv`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Export failed:', error);
      throw new Error('Failed to export low stock report. Please try again.');
    }
  }

  /**
   * Export supplier performance report
   */
  static async exportSupplierPerformance(): Promise<void> {
    try {
      const suppliersResponse = await apiRequest('GET', '/api/suppliers');
      const suppliers = await suppliersResponse.json();
      
      const inventoryResponse = await apiRequest('GET', '/api/inventory');
      const inventory = await inventoryResponse.json();

      // Group inventory by supplier
      const supplierStats = suppliers.map((supplier: any) => {
        const supplierItems = inventory.filter((item: any) => item.supplierId === supplier.id);
        const totalItems = supplierItems.length;
        const lowStockItems = supplierItems.filter((item: any) => 
          item.stockStatus === 'low' || item.stockStatus === 'critical'
        ).length;
        const totalValue = supplierItems.reduce((sum: number, item: any) => 
          sum + (parseFloat(item.unitPrice || '0') * item.currentStock), 0
        );

        return [
          supplier.name,
          supplier.contactEmail,
          supplier.contactPhone || 'N/A',
          supplier.isActive ? 'Active' : 'Inactive',
          totalItems,
          lowStockItems,
          `$${totalValue.toLocaleString()}`
        ];
      });

      const csvContent = [
        ['Supplier Performance Report', new Date().toISOString()],
        [''],
        ['Supplier Name', 'Email', 'Phone', 'Status', 'Total Items', 'Low Stock Items', 'Total Value'],
        ...supplierStats
      ];

      const csvString = csvContent.map(row => row.join(',')).join('\n');
      
      const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `supplier-performance-${new Date().toISOString().split('T')[0]}.csv`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Export failed:', error);
      throw new Error('Failed to export supplier performance report. Please try again.');
    }
  }

  /**
   * Export inventory valuation report
   */
  static async exportInventoryValuation(): Promise<void> {
    try {
      const response = await apiRequest('GET', '/api/inventory');
      const inventory = await response.json();
      
      const categoriesResponse = await apiRequest('GET', '/api/categories');
      const categories = await categoriesResponse.json();

      // Group by category and calculate values
      const categoryStats = categories.map((category: any) => {
        const categoryItems = inventory.filter((item: any) => item.categoryId === category.id);
        const totalItems = categoryItems.length;
        const totalStock = categoryItems.reduce((sum: number, item: any) => sum + item.currentStock, 0);
        const totalValue = categoryItems.reduce((sum: number, item: any) => 
          sum + (parseFloat(item.unitPrice || '0') * item.currentStock), 0
        );
        const avgUnitPrice = totalStock > 0 ? totalValue / totalStock : 0;

        return [
          category.name,
          totalItems,
          totalStock,
          `$${avgUnitPrice.toFixed(2)}`,
          `$${totalValue.toLocaleString()}`
        ];
      });

      const totalValue = inventory.reduce((sum: number, item: any) => 
        sum + (parseFloat(item.unitPrice || '0') * item.currentStock), 0
      );

      const csvContent = [
        ['Inventory Valuation Report', new Date().toISOString()],
        [''],
        ['Category', 'Total Items', 'Total Stock', 'Avg Unit Price', 'Total Value'],
        ...categoryStats,
        [''],
        ['Total Portfolio Value', '', '', '', `$${totalValue.toLocaleString()}`]
      ];

      const csvString = csvContent.map(row => row.join(',')).join('\n');
      
      const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `inventory-valuation-${new Date().toISOString().split('T')[0]}.csv`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Export failed:', error);
      throw new Error('Failed to export inventory valuation report. Please try again.');
    }
  }

  /**
   * Export purchase order analysis
   */
  static async exportPurchaseOrderAnalysis(): Promise<void> {
    try {
      const ordersResponse = await apiRequest('GET', '/api/purchase-orders');
      const orders = await ordersResponse.json();
      
      const suppliersResponse = await apiRequest('GET', '/api/suppliers');
      const suppliers = await suppliersResponse.json();

      const orderStats = orders.map((order: any) => {
        const supplier = suppliers.find((s: any) => s.id === order.supplierId);
        return [
          `#${order.id}`,
          supplier?.name || 'Unknown',
          order.status || 'pending',
          `$${order.totalAmount || '0.00'}`,
          order.orderDate ? new Date(order.orderDate).toLocaleDateString() : 'N/A',
          order.expectedDeliveryDate ? new Date(order.expectedDeliveryDate).toLocaleDateString() : 'N/A',
          order.actualDeliveryDate ? new Date(order.actualDeliveryDate).toLocaleDateString() : 'N/A'
        ];
      });

      const csvContent = [
        ['Purchase Order Analysis', new Date().toISOString()],
        [''],
        ['Order ID', 'Supplier', 'Status', 'Total Amount', 'Order Date', 'Expected Delivery', 'Actual Delivery'],
        ...orderStats
      ];

      const csvString = csvContent.map(row => row.join(',')).join('\n');
      
      const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `purchase-order-analysis-${new Date().toISOString().split('T')[0]}.csv`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Export failed:', error);
      throw new Error('Failed to export purchase order analysis. Please try again.');
    }
  }

  /**
   * Export comprehensive report with all data
   */
  static async exportComprehensiveReport(): Promise<void> {
    try {
      // Get all data
      const [metricsRes, inventoryRes, suppliersRes, ordersRes] = await Promise.all([
        apiRequest('GET', '/api/dashboard/metrics'),
        apiRequest('GET', '/api/inventory'),
        apiRequest('GET', '/api/suppliers'),
        apiRequest('GET', '/api/purchase-orders')
      ]);

      const metrics = await metricsRes.json();
      const inventory = await inventoryRes.json();
      const suppliers = await suppliersRes.json();
      const orders = await ordersRes.json();

      const csvContent = [
        ['Comprehensive Inventory Report', new Date().toISOString()],
        [''],
        ['=== DASHBOARD METRICS ==='],
        ['Total Items', metrics.totalItems],
        ['Low Stock Alerts', metrics.lowStockAlerts],
        ['Active Suppliers', metrics.activeSuppliers],
        ['Pending Orders', metrics.pendingOrders],
        ['Total Value', `$${metrics.totalValue.toLocaleString()}`],
        [''],
        ['=== INVENTORY SUMMARY ==='],
        ['Product Name', 'SKU', 'Category', 'Current Stock', 'Min Stock', 'Status', 'Unit Price', 'Supplier'],
        ...inventory.map((item: any) => [
          item.name,
          item.sku,
          item.category?.name || 'Uncategorized',
          item.currentStock,
          item.minStockLevel,
          item.stockStatus,
          `$${item.unitPrice || '0.00'}`,
          item.supplier?.name || 'No supplier'
        ]),
        [''],
        ['=== SUPPLIERS ==='],
        ['Name', 'Email', 'Phone', 'Status', 'Address'],
        ...suppliers.map((supplier: any) => [
          supplier.name,
          supplier.contactEmail,
          supplier.contactPhone || 'N/A',
          supplier.isActive ? 'Active' : 'Inactive',
          supplier.address || 'N/A'
        ]),
        [''],
        ['=== PURCHASE ORDERS ==='],
        ['Order ID', 'Supplier', 'Status', 'Total Amount', 'Order Date'],
        ...orders.map((order: any) => [
          `#${order.id}`,
          suppliers.find((s: any) => s.id === order.supplierId)?.name || 'Unknown',
          order.status || 'pending',
          `$${order.totalAmount || '0.00'}`,
          order.orderDate ? new Date(order.orderDate).toLocaleDateString() : 'N/A'
        ])
      ];

      const csvString = csvContent.map(row => row.join(',')).join('\n');
      
      const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `comprehensive-report-${new Date().toISOString().split('T')[0]}.csv`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Export failed:', error);
      throw new Error('Failed to export comprehensive report. Please try again.');
    }
  }

  /**
   * Generic export function that handles different export types
   */
  static async exportData(type: string, options?: ExportOptions): Promise<void> {
    switch (type) {
      case 'inventory':
        return this.exportInventoryCSV(options);
      case 'dashboard':
        return this.exportDashboardMetrics();
      case 'low-stock':
        return this.exportLowStockReport();
      case 'supplier-performance':
        return this.exportSupplierPerformance();
      case 'valuation':
        return this.exportInventoryValuation();
      case 'purchase-analysis':
        return this.exportPurchaseOrderAnalysis();
      case 'comprehensive':
        return this.exportComprehensiveReport();
      default:
        throw new Error(`Unknown export type: ${type}`);
    }
  }
}

export default ExportService;
