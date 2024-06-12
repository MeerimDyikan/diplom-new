import { useContext } from "react";
import { AppContext } from "../../App";

function Total({ onOrder }) {
  const { products, cart } = useContext(AppContext);

  const totalPrice = Object.keys(cart).reduce((total, productId) => {
    const product = products.find((product) => product.id === productId);
    if (!product) return total; // Ensure product exists
    return total + product.price * cart[productId];
  }, 0);

  const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  return (
    <div className="total">
      <h2 className="total_tit">Итог:</h2>
      <p className="total_txt" >Количество: {totalItems}</p>
      <p className="total_txt">Цена: {totalPrice} сом</p>
    </div>
  );
}

export default Total;