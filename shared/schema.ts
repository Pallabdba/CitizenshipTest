import { pgTable, text, serial, integer, decimal, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const suppliers = pgTable("suppliers", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  contactEmail: text("contact_email").notNull(),
  contactPhone: text("contact_phone"),
  address: text("address"),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().unique(),
  description: text("description"),
});

export const inventoryItems = pgTable("inventory_items", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  sku: text("sku").notNull().unique(),
  categoryId: integer("category_id").references(() => categories.id),
  supplierId: integer("supplier_id").references(() => suppliers.id),
  currentStock: integer("current_stock").default(0),
  minStockLevel: integer("min_stock_level").default(0),
  maxStockLevel: integer("max_stock_level").default(100),
  unitPrice: decimal("unit_price", { precision: 10, scale: 2 }),
  status: text("status").default("active"), // active, inactive, discontinued
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const stockTransactions = pgTable("stock_transactions", {
  id: serial("id").primaryKey(),
  inventoryItemId: integer("inventory_item_id").references(() => inventoryItems.id),
  type: text("type").notNull(), // in, out, adjustment
  quantity: integer("quantity").notNull(),
  reason: text("reason"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const purchaseOrders = pgTable("purchase_orders", {
  id: serial("id").primaryKey(),
  supplierId: integer("supplier_id").references(() => suppliers.id),
  status: text("status").default("pending"), // pending, approved, received, cancelled
  totalAmount: decimal("total_amount", { precision: 10, scale: 2 }),
  orderDate: timestamp("order_date").defaultNow(),
  expectedDeliveryDate: timestamp("expected_delivery_date"),
  actualDeliveryDate: timestamp("actual_delivery_date"),
});

export const purchaseOrderItems = pgTable("purchase_order_items", {
  id: serial("id").primaryKey(),
  purchaseOrderId: integer("purchase_order_id").references(() => purchaseOrders.id),
  inventoryItemId: integer("inventory_item_id").references(() => inventoryItems.id),
  quantity: integer("quantity").notNull(),
  unitPrice: decimal("unit_price", { precision: 10, scale: 2 }),
});

// Insert schemas
export const insertSupplierSchema = createInsertSchema(suppliers).omit({
  id: true,
  createdAt: true,
});

export const insertCategorySchema = createInsertSchema(categories).omit({
  id: true,
});

export const insertInventoryItemSchema = createInsertSchema(inventoryItems).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertStockTransactionSchema = createInsertSchema(stockTransactions).omit({
  id: true,
  createdAt: true,
});

export const insertPurchaseOrderSchema = createInsertSchema(purchaseOrders).omit({
  id: true,
  orderDate: true,
});

export const insertPurchaseOrderItemSchema = createInsertSchema(purchaseOrderItems).omit({
  id: true,
});

// Types
export type Supplier = typeof suppliers.$inferSelect;
export type InsertSupplier = z.infer<typeof insertSupplierSchema>;

export type Category = typeof categories.$inferSelect;
export type InsertCategory = z.infer<typeof insertCategorySchema>;

export type InventoryItem = typeof inventoryItems.$inferSelect;
export type InsertInventoryItem = z.infer<typeof insertInventoryItemSchema>;

export type StockTransaction = typeof stockTransactions.$inferSelect;
export type InsertStockTransaction = z.infer<typeof insertStockTransactionSchema>;

export type PurchaseOrder = typeof purchaseOrders.$inferSelect;
export type InsertPurchaseOrder = z.infer<typeof insertPurchaseOrderSchema>;

export type PurchaseOrderItem = typeof purchaseOrderItems.$inferSelect;
export type InsertPurchaseOrderItem = z.infer<typeof insertPurchaseOrderItemSchema>;

// Extended types for API responses
export type InventoryItemWithDetails = InventoryItem & {
  category?: Category;
  supplier?: Supplier;
  stockStatus: 'critical' | 'low' | 'normal';
};

export type DashboardMetrics = {
  totalItems: number;
  lowStockAlerts: number;
  activeSuppliers: number;
  pendingOrders: number;
  totalValue: number;
};

export type ActivityLog = {
  id: string;
  type: 'inventory_add' | 'inventory_update' | 'stock_alert' | 'order_received' | 'supplier_update';
  message: string;
  details: string;
  timestamp: Date;
  icon: string;
  iconColor: string;
};

export type CriticalAlert = {
  id: string;
  type: 'stock_critical' | 'delivery_overdue' | 'quality_issue';
  title: string;
  message: string;
  actionText: string;
  severity: 'high' | 'medium' | 'low';
};
