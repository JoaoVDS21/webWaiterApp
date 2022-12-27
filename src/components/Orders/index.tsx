import { Order } from "../../types/Order";
import { OrdersBoard } from "../OrdersBoard";
import { Container } from "./styles";

const orders: Order[] = [
  {
    "_id": "63a1070e4eeced819eb64db8",
    "table": "123",
    "status": "WAITING",
    "products": [
      {
        "product": {
          "name": "Pizza quatro queijos",
          "imagePath": "1671496334737-quatro-queijos.png",
          "price": 40.5
        },
        "quantity": 3,
        "_id": "63a1070e4eeced819eb64db9"
      },
      {
        "product": {
          "name": "Coca cola",
          "imagePath": "1671496884494-coca-cola.png",
          "price": 7,
        },
        "quantity": 2,
        "_id": "63a1070e4eeced819eb64dba"
      }
    ]
  }
];

export function Orders(){
  return (
    <Container>
      <OrdersBoard
        icon="⏱"
        title="Fila de espera"
        orders={orders}
      />
      <OrdersBoard
        icon="👨‍🍳"
        title="Em preparação"
        orders={[]}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto"
        orders={[]}
      />
    </Container>
  )
}
