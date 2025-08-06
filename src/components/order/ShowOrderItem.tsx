import { ShoppingBagIcon, ShoppingCartIcon } from "@heroicons/react/24/outline"
import { useOrderStore } from "@/stores/order"

export default function ShowOrderItem() {
  const { toggleOrderDrawer } = useOrderStore();
  return (
    <button type="button" className="cursor-pointer p-4" onClick={toggleOrderDrawer}>
      <ShoppingCartIcon className="w-8 h-8 text-gray-800" />
    </button>
  )
}