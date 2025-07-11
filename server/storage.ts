import {
  suppliers,
  categories,
  inventoryItems,
  stockTransactions,
  purchaseOrders,
  purchaseOrderItems,
  type Supplier,
  type Category,
  type InventoryItem,
  type StockTransaction,
  type PurchaseOrder,
  type PurchaseOrderItem,
  type InsertSupplier,
  type InsertCategory,
  type InsertInventoryItem,
  type InsertStockTransaction,
  type InsertPurchaseOrder,
  type InsertPurchaseOrderItem,
  type InventoryItemWithDetails,
  type DashboardMetrics,
  type ActivityLog,
  type CriticalAlert,
} from "@shared/schema";

export interface IStorage {
  // Suppliers
  getSuppliers(): Promise<Supplier[]>;
  getSupplier(id: number): Promise<Supplier | undefined>;
  createSupplier(supplier: InsertSupplier): Promise<Supplier>;
  updateSupplier(id: number, supplier: Partial<InsertSupplier>): Promise<Supplier>;
  deleteSupplier(id: number): Promise<void>;

  // Categories
  getCategories(): Promise<Category[]>;
  getCategory(id: number): Promise<Category | undefined>;
  createCategory(category: InsertCategory): Promise<Category>;
  updateCategory(id: number, category: Partial<InsertCategory>): Promise<Category>;
  deleteCategory(id: number): Promise<void>;

  // Inventory Items
  getInventoryItems(): Promise<InventoryItemWithDetails[]>;
  getInventoryItem(id: number): Promise<InventoryItemWithDetails | undefined>;
  createInventoryItem(item: InsertInventoryItem): Promise<InventoryItem>;
  updateInventoryItem(id: number, item: Partial<InsertInventoryItem>): Promise<InventoryItem>;
  deleteInventoryItem(id: number): Promise<void>;
  searchInventoryItems(query: string): Promise<InventoryItemWithDetails[]>;

  // Stock Transactions
  getStockTransactions(itemId?: number): Promise<StockTransaction[]>;
  createStockTransaction(transaction: InsertStockTransaction): Promise<StockTransaction>;

  // Purchase Orders
  getPurchaseOrders(): Promise<PurchaseOrder[]>;
  getPurchaseOrder(id: number): Promise<PurchaseOrder | undefined>;
  createPurchaseOrder(order: InsertPurchaseOrder): Promise<PurchaseOrder>;
  updatePurchaseOrder(id: number, order: Partial<InsertPurchaseOrder>): Promise<PurchaseOrder>;

  // Dashboard Data
  getDashboardMetrics(): Promise<DashboardMetrics>;
  getRecentActivity(): Promise<ActivityLog[]>;
  getCriticalAlerts(): Promise<CriticalAlert[]>;
  getInventoryTrends(): Promise<{ month: string; stock: number }[]>;
  getCategoryDistribution(): Promise<{ category: string; count: number; percentage: number }[]>;
}

export class MemStorage implements IStorage {
  private suppliers: Map<number, Supplier> = new Map();
  private categories: Map<number, Category> = new Map();
  private inventoryItems: Map<number, InventoryItem> = new Map();
  private stockTransactions: Map<number, StockTransaction> = new Map();
  private purchaseOrders: Map<number, PurchaseOrder> = new Map();
  private purchaseOrderItems: Map<number, PurchaseOrderItem> = new Map();
  private currentId = 1;

  constructor() {
    this.initializeData();
  }

  private initializeData() {
    // Initialize with some sample data
    const defaultCategories = [
      { id: 1, name: 'Electronics', description: 'Electronic components and devices' },
      { id: 2, name: 'Components', description: 'Mechanical and electrical components' },
      { id: 3, name: 'Materials', description: 'Raw materials and supplies' },
      { id: 4, name: 'Tools', description: 'Tools and equipment' },
      { id: 5, name: 'Other', description: 'Miscellaneous items' },
    ];

    const defaultSuppliers = [
      { id: 1, name: 'TechCorp Industries', contactEmail: 'contact@techcorp.com', contactPhone: '+1-555-0101', address: '123 Tech Street, Silicon Valley, CA', isActive: true, createdAt: new Date() },
      { id: 2, name: 'ComponentCorp', contactEmail: 'sales@componentcorp.com', contactPhone: '+1-555-0102', address: '456 Component Ave, Austin, TX', isActive: true, createdAt: new Date() },
      { id: 3, name: 'Global Materials', contactEmail: 'info@globalmaterials.com', contactPhone: '+1-555-0103', address: '789 Material Blvd, Chicago, IL', isActive: true, createdAt: new Date() },
    ];

    const defaultItems = [
      { id: 1, name: 'Widget X-200', description: 'Premium quality widget', sku: 'WX-200-001', categoryId: 1, supplierId: 1, currentStock: 2, minStockLevel: 10, maxStockLevel: 100, unitPrice: '25.99', status: 'active', createdAt: new Date(), updatedAt: new Date() },
      { id: 2, name: 'Component Z-150', description: 'Standard component', sku: 'CZ-150-002', categoryId: 2, supplierId: 2, currentStock: 15, minStockLevel: 20, maxStockLevel: 200, unitPrice: '12.50', status: 'active', createdAt: new Date(), updatedAt: new Date() },
      { id: 3, name: 'Assembly Kit A-100', description: 'Complete assembly kit', sku: 'AK-100-003', categoryId: 3, supplierId: 3, currentStock: 127, minStockLevel: 50, maxStockLevel: 300, unitPrice: '89.99', status: 'active', createdAt: new Date(), updatedAt: new Date() },
    ];

    defaultCategories.forEach(cat => this.categories.set(cat.id, cat));
    defaultSuppliers.forEach(sup => this.suppliers.set(sup.id, sup));
    defaultItems.forEach(item => this.inventoryItems.set(item.id, item));
    this.currentId = 4;
  }

  // Suppliers
  async getSuppliers(): Promise<Supplier[]> {
    return Array.from(this.suppliers.values());
  }

  async getSupplier(id: number): Promise<Supplier | undefined> {
    return this.suppliers.get(id);
  }

  async createSupplier(supplier: InsertSupplier): Promise<Supplier> {
    const id = this.currentId++;
    const newSupplier: Supplier = {
      ...supplier,
      id,
      createdAt: new Date(),
    };
    this.suppliers.set(id, newSupplier);
    return newSupplier;
  }

  async updateSupplier(id: number, supplier: Partial<InsertSupplier>): Promise<Supplier> {
    const existing = this.suppliers.get(id);
    if (!existing) {
      throw new Error(`Supplier with id ${id} not found`);
    }
    const updated = { ...existing, ...supplier };
    this.suppliers.set(id, updated);
    return updated;
  }

  async deleteSupplier(id: number): Promise<void> {
    this.suppliers.delete(id);
  }

  // Categories
  async getCategories(): Promise<Category[]> {
    return Array.from(this.categories.values());
  }

  async getCategory(id: number): Promise<Category | undefined> {
    return this.categories.get(id);
  }

  async createCategory(category: InsertCategory): Promise<Category> {
    const id = this.currentId++;
    const newCategory: Category = { ...category, id };
    this.categories.set(id, newCategory);
    return newCategory;
  }

  async updateCategory(id: number, category: Partial<InsertCategory>): Promise<Category> {
    const existing = this.categories.get(id);
    if (!existing) {
      throw new Error(`Category with id ${id} not found`);
    }
    const updated = { ...existing, ...category };
    this.categories.set(id, updated);
    return updated;
  }

  async deleteCategory(id: number): Promise<void> {
    this.categories.delete(id);
  }

  // Inventory Items
  async getInventoryItems(): Promise<InventoryItemWithDetails[]> {
    const items = Array.from(this.inventoryItems.values());
    return items.map(item => this.enrichInventoryItem(item));
  }

  async getInventoryItem(id: number): Promise<InventoryItemWithDetails | undefined> {
    const item = this.inventoryItems.get(id);
    return item ? this.enrichInventoryItem(item) : undefined;
  }

  async createInventoryItem(item: InsertInventoryItem): Promise<InventoryItem> {
    const id = this.currentId++;
    const newItem: InventoryItem = {
      ...item,
      id,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.inventoryItems.set(id, newItem);
    return newItem;
  }

  async updateInventoryItem(id: number, item: Partial<InsertInventoryItem>): Promise<InventoryItem> {
    const existing = this.inventoryItems.get(id);
    if (!existing) {
      throw new Error(`Inventory item with id ${id} not found`);
    }
    const updated = { ...existing, ...item, updatedAt: new Date() };
    this.inventoryItems.set(id, updated);
    return updated;
  }

  async deleteInventoryItem(id: number): Promise<void> {
    this.inventoryItems.delete(id);
  }

  async searchInventoryItems(query: string): Promise<InventoryItemWithDetails[]> {
    const items = Array.from(this.inventoryItems.values());
    const filtered = items.filter(item => 
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.sku.toLowerCase().includes(query.toLowerCase()) ||
      item.description?.toLowerCase().includes(query.toLowerCase())
    );
    return filtered.map(item => this.enrichInventoryItem(item));
  }

  private enrichInventoryItem(item: InventoryItem): InventoryItemWithDetails {
    const category = item.categoryId ? this.categories.get(item.categoryId) : undefined;
    const supplier = item.supplierId ? this.suppliers.get(item.supplierId) : undefined;
    
    let stockStatus: 'critical' | 'low' | 'normal' = 'normal';
    if (item.currentStock <= 5) {
      stockStatus = 'critical';
    } else if (item.currentStock <= item.minStockLevel) {
      stockStatus = 'low';
    }

    return {
      ...item,
      category,
      supplier,
      stockStatus,
    };
  }

  // Stock Transactions
  async getStockTransactions(itemId?: number): Promise<StockTransaction[]> {
    const transactions = Array.from(this.stockTransactions.values());
    return itemId ? transactions.filter(t => t.inventoryItemId === itemId) : transactions;
  }

  async createStockTransaction(transaction: InsertStockTransaction): Promise<StockTransaction> {
    const id = this.currentId++;
    const newTransaction: StockTransaction = {
      ...transaction,
      id,
      createdAt: new Date(),
    };
    this.stockTransactions.set(id, newTransaction);
    
    // Update inventory item stock
    if (transaction.inventoryItemId) {
      const item = this.inventoryItems.get(transaction.inventoryItemId);
      if (item) {
        const stockChange = transaction.type === 'out' ? -transaction.quantity : transaction.quantity;
        const updatedItem = { ...item, currentStock: item.currentStock + stockChange, updatedAt: new Date() };
        this.inventoryItems.set(transaction.inventoryItemId, updatedItem);
      }
    }
    
    return newTransaction;
  }

  // Purchase Orders
  async getPurchaseOrders(): Promise<PurchaseOrder[]> {
    return Array.from(this.purchaseOrders.values());
  }

  async getPurchaseOrder(id: number): Promise<PurchaseOrder | undefined> {
    return this.purchaseOrders.get(id);
  }

  async createPurchaseOrder(order: InsertPurchaseOrder): Promise<PurchaseOrder> {
    const id = this.currentId++;
    const newOrder: PurchaseOrder = {
      ...order,
      id,
      orderDate: new Date(),
    };
    this.purchaseOrders.set(id, newOrder);
    return newOrder;
  }

  async updatePurchaseOrder(id: number, order: Partial<InsertPurchaseOrder>): Promise<PurchaseOrder> {
    const existing = this.purchaseOrders.get(id);
    if (!existing) {
      throw new Error(`Purchase order with id ${id} not found`);
    }
    const updated = { ...existing, ...order };
    this.purchaseOrders.set(id, updated);
    return updated;
  }

  // Dashboard Data
  async getDashboardMetrics(): Promise<DashboardMetrics> {
    const items = Array.from(this.inventoryItems.values());
    const suppliers = Array.from(this.suppliers.values());
    const orders = Array.from(this.purchaseOrders.values());
    
    const totalItems = items.length;
    const lowStockAlerts = items.filter(item => item.currentStock <= item.minStockLevel).length;
    const activeSuppliers = suppliers.filter(s => s.isActive).length;
    const pendingOrders = orders.filter(o => o.status === 'pending').length;
    const totalValue = items.reduce((sum, item) => sum + (parseFloat(item.unitPrice || '0') * item.currentStock), 0);

    return {
      totalItems,
      lowStockAlerts,
      activeSuppliers,
      pendingOrders,
      totalValue,
    };
  }

  async getRecentActivity(): Promise<ActivityLog[]> {
    // Return simulated recent activity
    return [
      {
        id: '1',
        type: 'inventory_add',
        message: 'New inventory item added',
        details: 'Product: Widget X-200, Quantity: 500 units',
        timestamp: new Date(Date.now() - 2 * 60 * 1000),
        icon: 'plus',
        iconColor: 'bg-blue-100 text-blue-600',
      },
      {
        id: '2',
        type: 'stock_alert',
        message: 'Low stock alert triggered',
        details: 'Product: Component Z-150, Current: 15 units',
        timestamp: new Date(Date.now() - 5 * 60 * 1000),
        icon: 'alert-triangle',
        iconColor: 'bg-orange-100 text-orange-600',
      },
      {
        id: '3',
        type: 'order_received',
        message: 'Supplier order received',
        details: 'From: TechCorp Industries, Items: 12 products',
        timestamp: new Date(Date.now() - 60 * 60 * 1000),
        icon: 'truck',
        iconColor: 'bg-green-100 text-green-600',
      },
      {
        id: '4',
        type: 'inventory_update',
        message: 'Inventory item updated',
        details: 'Product: Assembly Kit A-100, Price updated',
        timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000),
        icon: 'edit',
        iconColor: 'bg-purple-100 text-purple-600',
      },
    ];
  }

  async getCriticalAlerts(): Promise<CriticalAlert[]> {
    const items = Array.from(this.inventoryItems.values());
    const alerts: CriticalAlert[] = [];

    // Stock critical alerts
    const criticalItems = items.filter(item => item.currentStock <= 5);
    criticalItems.forEach(item => {
      alerts.push({
        id: `stock-${item.id}`,
        type: 'stock_critical',
        title: 'Stock Critical',
        message: `${item.name} has only ${item.currentStock} units left`,
        actionText: 'Reorder Now',
        severity: 'high',
      });
    });

    // Add some example alerts
    if (alerts.length === 0) {
      alerts.push(
        {
          id: 'delivery-1',
          type: 'delivery_overdue',
          title: 'Overdue Delivery',
          message: 'Order #12345 is 3 days overdue',
          actionText: 'Contact Supplier',
          severity: 'high',
        },
        {
          id: 'quality-1',
          type: 'quality_issue',
          title: 'Quality Issue',
          message: 'Batch #QC-789 failed quality check',
          actionText: 'Review Details',
          severity: 'medium',
        }
      );
    }

    return alerts;
  }

  async getInventoryTrends(): Promise<{ month: string; stock: number }[]> {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const currentMonth = new Date().getMonth();
    const trends = [];

    for (let i = 0; i < 12; i++) {
      const monthIndex = (currentMonth - 11 + i + 12) % 12;
      const baseStock = 2000;
      const variation = Math.random() * 800 + 200;
      trends.push({
        month: months[monthIndex],
        stock: Math.floor(baseStock + variation),
      });
    }

    return trends;
  }

  async getCategoryDistribution(): Promise<{ category: string; count: number; percentage: number }[]> {
    const items = Array.from(this.inventoryItems.values());
    const categories = Array.from(this.categories.values());
    const distribution = [];

    for (const category of categories) {
      const count = items.filter(item => item.categoryId === category.id).length;
      const percentage = items.length > 0 ? (count / items.length) * 100 : 0;
      distribution.push({
        category: category.name,
        count,
        percentage: Math.round(percentage),
      });
    }

    return distribution.filter(d => d.count > 0);
  }
}

export const storage = new MemStorage();
