import Error from "./error";

const PaymentModes = ({ input, handleOnChange }) => {
  const { errors, paymentMethod } = input || {};

  return (
    <div className="mt-3">
      <Error errors={errors} fieldName={"paymentMethod"} />
      {/*Direct bank transfers*/}
      <div className="form-check woo-next-payment-input-container mt-2">
        <label className="form-check-label">
          <input
            onChange={handleOnChange}
            value="bankTransfer"
            className="form-check-input mr-3"
            name="paymentMethod"
            type="radio"
            checked={"bankTransfer" === paymentMethod}
          />
          <span className="woo-next-payment-content">
            Transferencia bancaria
          </span>
        </label>
      </div>
      {/*Pay with Paypal*/}
      <div className="form-check woo-next-payment-input-container mt-2">
        <label className="form-check-label">
          <input
            onChange={handleOnChange}
            value="paypal"
            className="form-check-input mr-3"
            name="paymentMethod"
            type="radio"
            checked={"paypal" === paymentMethod}
          />
          <span className="woo-next-payment-content">Pay with Paypal</span>
        </label>
      </div>
      <div className="form-check woo-next-payment-input-container mt-2">
        <label className="form-check-label">
          <input
            onChange={handleOnChange}
            value="cheque"
            className="form-check-input mr-3"
            name="paymentMethod"
            type="radio"
            checked={"cheque" === paymentMethod}
          />
          <span className="woo-next-payment-content">Check Payments</span>
        </label>
      </div>
      {/*Pay with Mercado Pago*/}
      <div className="form-check woo-next-payment-input-container mt-2">
        <label className="form-check-label">
          <input
            onChange={handleOnChange}
            value="mercadoPago"
            className="form-check-input mr-3"
            name="paymentMethod"
            type="radio"
            checked={"mercadoPago" === paymentMethod}
          />
          <span className="woo-next-payment-content">Pay with MP</span>
        </label>
      </div>
      <div className="form-check woo-next-payment-input-container mt-2">
        <label className="form-check-label">
          <input
            onChange={handleOnChange}
            value="cheque"
            className="form-check-input mr-3"
            name="paymentMethod"
            type="radio"
            checked={"cheque" === paymentMethod}
          />
          <span className="woo-next-payment-content">Check Payments</span>
        </label>
      </div>
      {/*	Payment Instructions*/}
      <div className="woo-next-checkout-payment-instructions mt-2">
        Elegi la forma de pago adecuada capo
      </div>
    </div>
  );
};

export default PaymentModes;
