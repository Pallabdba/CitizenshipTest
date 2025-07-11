import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Plus, Download } from "lucide-react";
import InventoryTable from "@/components/inventory/inventory-table";
import AddItemDialog from "@/components/inventory/add-item-dialog";
import { InventoryItemWithDetails } from "@shared/schema";

export default function Inventory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddDialog, setShowAddDialog] = useState(false);

  const { data: items, isLoading } = useQuery<InventoryItemWithDetails[]>({
    queryKey: ['/api/inventory', { search: searchQuery }],
    enabled: true,
  });

  const handleExport = () => {
    window.open('/api/export/inventory', '_blank');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Inventory Management</h1>
          <p className="text-sm text-gray-500">Manage your inventory items, stock levels, and suppliers</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button onClick={handleExport} variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button onClick={() => setShowAddDialog(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add Item
          </Button>
        </div>
      </div>

      {/* Search */}
      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search inventory items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Inventory Table */}
      <InventoryTable showTitle={false} searchQuery={searchQuery} />

      {/* Add Item Dialog */}
      <AddItemDialog open={showAddDialog} onClose={() => setShowAddDialog(false)} />
    </div>
  );
}
