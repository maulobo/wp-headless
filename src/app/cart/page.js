import axios from "axios";
import { HEADER_FOOTER_ENDPOINT } from "../utils/constants/endpoints";
import CartItemsContainer from "../components/cart/cart-items-container";

export default function Cart() {
  return (
    <>
      <h1 className="uppercase tracking-0.5px">Cart</h1>
      <CartItemsContainer />
    </>
  );
}
