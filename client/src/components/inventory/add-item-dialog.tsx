import InventoryForm from "./inventory-form";

interface AddItemDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function AddItemDialog({ open, onClose }: AddItemDialogProps) {
  if (!open) return null;

  return <InventoryForm onClose={onClose} />;
}
