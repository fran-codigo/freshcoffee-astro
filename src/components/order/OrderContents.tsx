import { useOrderStore } from "@/stores/order"
import ProductDetails from "./ProductDetails";

export default function OrderContents() {
  const { order } = useOrderStore();
  return (
    <>
      {
        order.length === 0 ? (
          <p className="text-center text-xl my-10">No hay pedidos</p>
        ) :
          <>
            <h2 className="text-2xl font-bold text-gray-900">Resumen de Pedido.</h2>

            {
              order.map(item => {
                return (
                  <ProductDetails item={item} />
                )
              })
            }
          </>

      }
    </>
  )
}