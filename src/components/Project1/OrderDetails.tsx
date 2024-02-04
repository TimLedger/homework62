import './OrderDetails.css';

interface OrderItem {
  name: string;
  price: number;
  quantity: number;
}

interface OrderDetailsProps {
  order: OrderItem[];
  removeItem: (item: OrderItem) => void;
  totalPrice: number;
}
  
function OrderDetails({ order, removeItem, totalPrice }: OrderDetailsProps) {
  return (
    <div className="order-details">
      <h2>Ваш заказ</h2>
      {order.length === 0 ? (
        <p>Вы пока что ничего не выбрали</p>
      ) : (
        <div>
          <ul className='order-list'>
            {order.map((item) => (
              <li key={item.name} className='order-item'>
                {item.name} x{item.quantity} - {item.price * item.quantity} ₽
                <button onClick={() => removeItem(item)}>Убрать</button>
              </li>
            ))}
          </ul>
          <p>Итого: {totalPrice} ₽</p>
        </div>
      )}
    </div>
  );
}

export default OrderDetails;
