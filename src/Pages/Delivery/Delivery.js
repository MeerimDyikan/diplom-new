import './Delivery.css';
import deliveryImg from "../../images/3741751-bussiness-dellivery-ecommerce-marketplace-onlinestore-store_108906.svg"
import imageic from "../../images/07.svg"
import imageic1 from "../../images/08.svg"
import imageic2 from "../../images/09.svg"
import imageic3 from "../../images/10.svg"
function Delivery() {
    return (
        <>
          <div className="delivery flex" >
            <div className="del"> <h3 className="date">СРОКИ ДОСТАВКИ</h3>
            <p className="del_p">Мы доставляем заказы от 3-х дней до недели. Сроки зависят от отдаленности Вашего региона.</p></div>
            <div className="del"> <h3 className="check">ПРОВЕРЬТЕ ЗАКАЗ</h3>
            <p className="del_p">При получении проверьте, пожалуйста, соответствие позиций заказа Вашей накладной, количество товаров и комплектность (в случае, если продукция продается наборами или комплектами)</p></div>
           
          </div>
           <div className="delivery_icon "><img src={deliveryImg} alt="" class="delivery_ic"/>
         
         </div>
       
         
          

	
        </>
    );
}

export default Delivery;