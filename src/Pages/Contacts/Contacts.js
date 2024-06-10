import './Contacts.css';

function Contacts() {
  return (
    <>
     
          
        <section className="company-details">
            <h2>Реквизиты компании</h2>
            <div className="details">
                <p><strong>Название компании:</strong>  ООО «Фаберлик-Алатоо»"</p>
                <p><strong>ИНН:</strong> 00412200710096</p>
                <p><strong>КПП:</strong> 24560761</p>
                <p><strong>ОГРН:</strong> 1123456789012</p>
                <p><strong>Юридический адрес:</strong> Кыргызстан 720010, г.Бишкек, ул. Московская 219</p>
                <p><strong>Фактический адрес:</strong> Кыргызстан 720010, г.Бишкек, ул. Московская 219</p>
              
                
                <p><strong>Банк:</strong>ЗАО "Демир Кыргыз Интернэшнл Банк"</p>
                <p><strong>БИК:</strong> 118005</p>
                <p><strong>Рассчетный счет:</strong> 1180000013512411</p>
                <p><strong>Исполнительный орган:</strong>Директор:Выродова Н.М.</p>
            </div>
            
        </section>
        <section className="book">
		<div className="container">
			<h2 className="page_tit">Свяжитесь с нами</h2>
			<p className="page_desc">Хотите узнать о доставке и задать вопрос?</p>
			<form action="" className="form form_book">
				<div className="form_in flex">
					
					<div className="form_input">
						<span className="form_tit">Дата</span>
						<input type="text" className="input" placeholder="10/o6/2024"/>
					</div><div className="form_input">
						<span className="form_tit">Фио</span>
						<input type="text" className="input" placeholder="10/o6/2024"/>
					</div><div className="form_input">
						<span className="form_tit">Личный счет</span>
						<input type="text" className="input" placeholder="10/o6/2024"/>
					</div><div className="form_input">
						<span className="form_tit">Контактный телефон</span>
						<input type="text" className="input" placeholder="10/o6/2024"/>
					</div>
					<div className="form_input form_input__big">
						<span className="form_tit">Вопрос</span>
						<input type="text" className="input" placeholder="10/o6/2024"/>
					</div>
					<div className="form_btn">
						
						<button className="btn btn__red" type="submit">Отправить</button>
					</div>
				</div>
			</form>
		</div>
		<div className="adress">
			<div className="container">
				<div className="adress_in flex">
					<div className="adress_card"><h4 className="adress_tit">моб.телефон</h4>
						<a href="tel:+996555681206" className="adress_link">0555-681206</a></div>
					<div className="adress_card"><h4 className="adress_tit">График работы</h4>
						<p className="adress_txt">пон.пят.10:00-18:00</p>
					<p className="adress_txt">Выходные дни: 10:00-16:00</p></div>
					<div className="adress_card">
						<h4 className="adress_tit">Адрес:
							</h4>
						<p className="adress_txt"> ПВЗ Каракол </p>
						<p className="adress_txt">     ул.Токтогула </p>
						<p className="adress_txt">      (рядом с ТД "ЦУМ") д.1</p>
					</div>
					
				</div>
			</div>

		</div>
	</section>
	
	



        

    </>
  );
}

export default Contacts;