import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Edit, Trash2, Plus, Package, ArrowUpDown } from "lucide-react";
import { InventoryItemWithDetails } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import AddItemDialog from "./add-item-dialog";
import InventoryForm from "./inventory-form";

interface InventoryTableProps {
  showTitle?: boolean;
  searchQuery?: string;
}

export default function InventoryTable({ showTitle = true, searchQuery }: InventoryTableProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [editingItem, setEditingItem] = useState<InventoryItemWithDetails | null>(null);
  const [sortField, setSortField] = useState<string>("name");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: items, isLoading } = useQuery<InventoryItemWithDetails[]>({
    queryKey: ['/api/inventory', { search: searchQuery }],
  });

  const deleteItemMutation = useMutation({
    mutationFn: async (id: number) => {
      await apiRequest('DELETE', `/api/inventory/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/inventory'] });
      toast({
        title: "Success",
        description: "Item deleted successfully",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to delete item",
        variant: "destructive",
      });
    },
  });

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      deleteItemMutation.mutate(id);
    }
  };

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'critical':
        return <Badge className="status-critical">Critical</Badge>;
      case 'low':
        return <Badge className="status-low">Low Stock</Badge>;
      case 'normal':
        return <Badge className="status-normal">In Stock</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const filteredItems = items?.filter(item => {
    if (selectedCategory !== "all" && item.category?.name !== selectedCategory) {
      return false;
    }
    return true;
  });

  const sortedItems = filteredItems?.sort((a, b) => {
    const aValue = a[sortField as keyof InventoryItemWithDetails] || '';
    const bValue = b[sortField as keyof InventoryItemWithDetails] || '';
    
    if (sortDirection === "asc") {
      return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
    } else {
      return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
    }
  });

  const categories = Array.from(new Set(items?.map(item => item.category?.name).filter(Boolean)));

  return (
    <>
      <Card>
        {showTitle && (
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Inventory Overview</CardTitle>
              <div className="flex items-center space-x-3">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category!}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button onClick={() => setShowAddDialog(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Item
                </Button>
              </div>
            </div>
          </CardHeader>
        )}
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>
                    <Button variant="ghost" onClick={() => handleSort('name')} className="flex items-center space-x-1">
                      <span>Product</span>
                      <ArrowUpDown className="h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead>
                    <Button variant="ghost" onClick={() => handleSort('sku')} className="flex items-center space-x-1">
                      <span>SKU</span>
                      <ArrowUpDown className="h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>
                    <Button variant="ghost" onClick={() => handleSort('currentStock')} className="flex items-center space-x-1">
                      <span>Stock</span>
                      <ArrowUpDown className="h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Supplier</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <TableRow key={i}>
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gray-200 rounded-lg animate-pulse"></div>
                          <div className="space-y-2">
                            <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
                            <div className="h-3 bg-gray-200 rounded w-16 animate-pulse"></div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell><div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div></TableCell>
                      <TableCell><div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div></TableCell>
                      <TableCell><div className="h-4 bg-gray-200 rounded w-12 animate-pulse"></div></TableCell>
                      <TableCell><div className="h-6 bg-gray-200 rounded w-16 animate-pulse"></div></TableCell>
                      <TableCell><div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div></TableCell>
                      <TableCell><div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div></TableCell>
                    </TableRow>
                  ))
                ) : (
                  sortedItems?.map((item) => (
                    <TableRow key={item.id} className="hover:bg-muted/50">
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                            <Package className="h-5 w-5 text-gray-500" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-foreground">{item.name}</p>
                            <p className="text-xs text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-sm text-foreground">{item.sku}</TableCell>
                      <TableCell className="text-sm text-foreground">{item.category?.name || 'Uncategorized'}</TableCell>
                      <TableCell className="text-sm text-foreground">{item.currentStock} units</TableCell>
                      <TableCell>{getStatusBadge(item.stockStatus)}</TableCell>
                      <TableCell className="text-sm text-foreground">{item.supplier?.name || 'No supplier'}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setEditingItem(item)}
                            className="text-primary hover:text-primary/80"
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDelete(item.id)}
                            className="text-destructive hover:text-destructive/80"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
          
          {/* Pagination */}
          <div className="flex items-center justify-between mt-6">
            <div className="text-sm text-muted-foreground">
              Showing {sortedItems?.length || 0} of {items?.length || 0} results
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
                1
              </Button>
              <Button variant="outline" size="sm" disabled>
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Add Item Dialog */}
      <AddItemDialog open={showAddDialog} onClose={() => setShowAddDialog(false)} />

      {/* Edit Item Dialog */}
      {editingItem && (
        <InventoryForm
          item={editingItem}
          onClose={() => setEditingItem(null)}
        />
      )}
    </>
  );
}
