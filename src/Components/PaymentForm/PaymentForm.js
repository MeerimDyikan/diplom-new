import React, { useState } from "react";

function PaymentForm() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle payment submission logic here
    console.log("Payment submitted!");
  };

  return (
    <div className="payment-form">
      <h2>Способы оплаты</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={handleCardNumberChange}
          />
        </div>
        <div>
          <label htmlFor="expiryDate">Expiry Date:</label>
          <input
            type="text"
            id="expiryDate"
            value={expiryDate}
            onChange={handleExpiryDateChange}
          />
        </div>
        <div>
          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={handleCvvChange}
          />
        </div>
        <div>
          <label htmlFor="paymentMethod">Payment Method:</label>
          <select
            id="paymentMethod"
            value={paymentMethod}
            onChange={handlePaymentMethodChange}
          >
            <option value="">Способы оплаты</option>
            <option value="cash">Cash</option>
            <option value="creditCard">Credit Card</option>
          </select>
        </div>
        <button type="submit">Оплатить</button>
      </form>
    </div>
  );
}

export default PaymentForm;