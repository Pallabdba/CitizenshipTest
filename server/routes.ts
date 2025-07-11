import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertInventoryItemSchema, 
  insertSupplierSchema, 
  insertCategorySchema,
  insertStockTransactionSchema,
  insertPurchaseOrderSchema
} from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Dashboard routes
  app.get("/api/dashboard/metrics", async (req, res) => {
    try {
      const metrics = await storage.getDashboardMetrics();
      res.json(metrics);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch dashboard metrics" });
    }
  });

  app.get("/api/dashboard/activity", async (req, res) => {
    try {
      const activity = await storage.getRecentActivity();
      res.json(activity);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch recent activity" });
    }
  });

  app.get("/api/dashboard/alerts", async (req, res) => {
    try {
      const alerts = await storage.getCriticalAlerts();
      res.json(alerts);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch critical alerts" });
    }
  });

  app.get("/api/dashboard/trends", async (req, res) => {
    try {
      const trends = await storage.getInventoryTrends();
      res.json(trends);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch inventory trends" });
    }
  });

  app.get("/api/dashboard/distribution", async (req, res) => {
    try {
      const distribution = await storage.getCategoryDistribution();
      res.json(distribution);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch category distribution" });
    }
  });

  // Inventory routes
  app.get("/api/inventory", async (req, res) => {
    try {
      const { search } = req.query;
      let items;
      
      if (search && typeof search === 'string') {
        items = await storage.searchInventoryItems(search);
      } else {
        items = await storage.getInventoryItems();
      }
      
      res.json(items);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch inventory items" });
    }
  });

  app.get("/api/inventory/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const item = await storage.getInventoryItem(id);
      
      if (!item) {
        return res.status(404).json({ message: "Inventory item not found" });
      }
      
      res.json(item);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch inventory item" });
    }
  });

  app.post("/api/inventory", async (req, res) => {
    try {
      const validation = insertInventoryItemSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({ message: "Invalid inventory item data", errors: validation.error.errors });
      }
      
      const item = await storage.createInventoryItem(validation.data);
      res.status(201).json(item);
    } catch (error) {
      res.status(500).json({ message: "Failed to create inventory item" });
    }
  });

  app.put("/api/inventory/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const validation = insertInventoryItemSchema.partial().safeParse(req.body);
      
      if (!validation.success) {
        return res.status(400).json({ message: "Invalid inventory item data", errors: validation.error.errors });
      }
      
      const item = await storage.updateInventoryItem(id, validation.data);
      res.json(item);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to update inventory item";
      res.status(500).json({ message });
    }
  });

  app.delete("/api/inventory/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.deleteInventoryItem(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: "Failed to delete inventory item" });
    }
  });

  // Stock transaction routes
  app.get("/api/stock-transactions", async (req, res) => {
    try {
      const { itemId } = req.query;
      const transactions = await storage.getStockTransactions(itemId ? parseInt(itemId as string) : undefined);
      res.json(transactions);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch stock transactions" });
    }
  });

  app.post("/api/stock-transactions", async (req, res) => {
    try {
      const validation = insertStockTransactionSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({ message: "Invalid stock transaction data", errors: validation.error.errors });
      }
      
      const transaction = await storage.createStockTransaction(validation.data);
      res.status(201).json(transaction);
    } catch (error) {
      res.status(500).json({ message: "Failed to create stock transaction" });
    }
  });

  // Supplier routes
  app.get("/api/suppliers", async (req, res) => {
    try {
      const suppliers = await storage.getSuppliers();
      res.json(suppliers);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch suppliers" });
    }
  });

  app.get("/api/suppliers/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const supplier = await storage.getSupplier(id);
      
      if (!supplier) {
        return res.status(404).json({ message: "Supplier not found" });
      }
      
      res.json(supplier);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch supplier" });
    }
  });

  app.post("/api/suppliers", async (req, res) => {
    try {
      const validation = insertSupplierSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({ message: "Invalid supplier data", errors: validation.error.errors });
      }
      
      const supplier = await storage.createSupplier(validation.data);
      res.status(201).json(supplier);
    } catch (error) {
      res.status(500).json({ message: "Failed to create supplier" });
    }
  });

  app.put("/api/suppliers/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const validation = insertSupplierSchema.partial().safeParse(req.body);
      
      if (!validation.success) {
        return res.status(400).json({ message: "Invalid supplier data", errors: validation.error.errors });
      }
      
      const supplier = await storage.updateSupplier(id, validation.data);
      res.json(supplier);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to update supplier";
      res.status(500).json({ message });
    }
  });

  app.delete("/api/suppliers/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.deleteSupplier(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: "Failed to delete supplier" });
    }
  });

  // Category routes
  app.get("/api/categories", async (req, res) => {
    try {
      const categories = await storage.getCategories();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch categories" });
    }
  });

  app.post("/api/categories", async (req, res) => {
    try {
      const validation = insertCategorySchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({ message: "Invalid category data", errors: validation.error.errors });
      }
      
      const category = await storage.createCategory(validation.data);
      res.status(201).json(category);
    } catch (error) {
      res.status(500).json({ message: "Failed to create category" });
    }
  });

  // Purchase order routes
  app.get("/api/purchase-orders", async (req, res) => {
    try {
      const orders = await storage.getPurchaseOrders();
      res.json(orders);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch purchase orders" });
    }
  });

  app.post("/api/purchase-orders", async (req, res) => {
    try {
      const validation = insertPurchaseOrderSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({ message: "Invalid purchase order data", errors: validation.error.errors });
      }
      
      const order = await storage.createPurchaseOrder(validation.data);
      res.status(201).json(order);
    } catch (error) {
      res.status(500).json({ message: "Failed to create purchase order" });
    }
  });

  // Export routes
  app.get("/api/export/inventory", async (req, res) => {
    try {
      const items = await storage.getInventoryItems();
      const csvData = [
        ['Name', 'SKU', 'Category', 'Supplier', 'Current Stock', 'Min Stock', 'Max Stock', 'Unit Price', 'Status'],
        ...items.map(item => [
          item.name,
          item.sku,
          item.category?.name || '',
          item.supplier?.name || '',
          item.currentStock.toString(),
          item.minStockLevel.toString(),
          item.maxStockLevel.toString(),
          item.unitPrice || '',
          item.status || ''
        ])
      ];
      
      const csvContent = csvData.map(row => row.join(',')).join('\n');
      
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', 'attachment; filename="inventory-export.csv"');
      res.send(csvContent);
    } catch (error) {
      res.status(500).json({ message: "Failed to export inventory data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
