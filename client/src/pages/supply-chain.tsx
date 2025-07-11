import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Truck, Package, Clock, CheckCircle, XCircle, Plus } from "lucide-react";
import { Supplier, PurchaseOrder } from "@shared/schema";

export default function SupplyChain() {
  const { data: suppliers, isLoading: suppliersLoading } = useQuery<Supplier[]>({
    queryKey: ['/api/suppliers'],
  });

  const { data: orders, isLoading: ordersLoading } = useQuery<PurchaseOrder[]>({
    queryKey: ['/api/purchase-orders'],
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="outline" className="text-yellow-600 border-yellow-600"><Clock className="h-3 w-3 mr-1" />Pending</Badge>;
      case 'approved':
        return <Badge variant="outline" className="text-blue-600 border-blue-600"><Package className="h-3 w-3 mr-1" />Approved</Badge>;
      case 'received':
        return <Badge variant="outline" className="text-green-600 border-green-600"><CheckCircle className="h-3 w-3 mr-1" />Received</Badge>;
      case 'cancelled':
        return <Badge variant="outline" className="text-red-600 border-red-600"><XCircle className="h-3 w-3 mr-1" />Cancelled</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Supply Chain Management</h1>
          <p className="text-sm text-gray-500">Manage suppliers and purchase orders</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Plus className="h-4 w-4 mr-2" />
            Add Supplier
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Purchase Order
          </Button>
        </div>
      </div>

      {/* Suppliers Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Truck className="h-5 w-5" />
            Active Suppliers
          </CardTitle>
          <CardDescription>
            Manage your supplier relationships and contact information
          </CardDescription>
        </CardHeader>
        <CardContent>
          {suppliersLoading ? (
            <div className="text-center py-8">Loading suppliers...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {suppliers?.map((supplier) => (
                <Card key={supplier.id} className="border-gray-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{supplier.name}</CardTitle>
                    <CardDescription>
                      {supplier.isActive ? (
                        <Badge className="bg-green-100 text-green-800">Active</Badge>
                      ) : (
                        <Badge variant="secondary">Inactive</Badge>
                      )}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <p><strong>Email:</strong> {supplier.contactEmail}</p>
                      {supplier.contactPhone && (
                        <p><strong>Phone:</strong> {supplier.contactPhone}</p>
                      )}
                      {supplier.address && (
                        <p><strong>Address:</strong> {supplier.address}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Purchase Orders */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="h-5 w-5" />
            Purchase Orders
          </CardTitle>
          <CardDescription>
            Track and manage your purchase orders
          </CardDescription>
        </CardHeader>
        <CardContent>
          {ordersLoading ? (
            <div className="text-center py-8">Loading purchase orders...</div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Supplier</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Total Amount</TableHead>
                    <TableHead>Order Date</TableHead>
                    <TableHead>Expected Delivery</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders?.map((order) => {
                    const supplier = suppliers?.find(s => s.id === order.supplierId);
                    return (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">#{order.id}</TableCell>
                        <TableCell>{supplier?.name || 'Unknown'}</TableCell>
                        <TableCell>{getStatusBadge(order.status || 'pending')}</TableCell>
                        <TableCell>${order.totalAmount || '0.00'}</TableCell>
                        <TableCell>{order.orderDate ? new Date(order.orderDate).toLocaleDateString() : 'N/A'}</TableCell>
                        <TableCell>{order.expectedDeliveryDate ? new Date(order.expectedDeliveryDate).toLocaleDateString() : 'N/A'}</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">
                            View Details
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                  {(!orders || orders.length === 0) && (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-8 text-gray-500">
                        No purchase orders found
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
