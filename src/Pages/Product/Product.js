import { useContext } from "react";
import { useMatch } from "react-router-dom"
import { AppContext } from "../../App";
import NotFound from "../NotFound/NotFound";
import { AddToCart } from "../../Components/AddToCart/AddToCart";

export default function Product() {
  const { params } = useMatch("/products/:slug");
  const { products } = useContext(AppContext);

  const product = products.find(product => product.slug === params.slug);

  if (!product) {
    return <NotFound />
  }

  return (
    <div className="Product">
      <div>
        <img src={product.image} alt={product.name} />
      </div>
      <div>
        <h1>{product.name}</h1>
        <p><strong>Цена по акции:</strong> {product.price}сом</p>
       
        <p><strong>Описание: </strong>{product.desc}</p>
        <AddToCart product={product} />
      </div>
    </div>
  )
}