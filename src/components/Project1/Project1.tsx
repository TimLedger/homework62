import { useState } from 'react';
import OrderDetails from './OrderDetails';
import AddItems from './AddItems';
import './Project1.css';

interface MenuItem {
  name: string;
  price: number;
}

interface OrderItem extends MenuItem {
  quantity: number;
}

function Burger() {
  const [order, setOrder] = useState<OrderItem[]>([]);

  const addItemToOrder = (item: MenuItem) => {
    const existingItem = order.find((orderItem) => orderItem.name === item.name);

    if (existingItem) {
      const updatedOrder = order.map((orderItem) =>
        orderItem.name === item.name
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
      setOrder(updatedOrder);
    } else {
      setOrder([...order, { ...item, quantity: 1 }]);
    }
  };
 
  const removeItemFromOrder = (item: OrderItem) => {
    const updatedOrder = order
      .map((orderItem) =>
        orderItem.name === item.name && orderItem.quantity > 0
          ? { ...orderItem, quantity: orderItem.quantity - 1 }
          : orderItem
      )
      .filter((orderItem) => orderItem.quantity > 0);

    setOrder(updatedOrder);
  };

  const totalPrice = order.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="burger-container">
      <OrderDetails order={order} removeItem={removeItemFromOrder} totalPrice={totalPrice} />
      <AddItems addItem={addItemToOrder} />
    </div>
  );
}

export default Burger; 