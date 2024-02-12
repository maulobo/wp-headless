import { isEmpty } from "lodash";
import Image from "next/image";

const CheckoutCartItem = ({ item }) => {
  const productImg = item?.data?.images?.[0] ?? "";

  return (
    <tr className="woo-next-cart-item" key={item?.productId ?? ""}>
      <td className="woo-next-cart-element">
        <figure>
          <Image
            width="50"
            height="50"
            alt={productImg?.alt ?? ""}
            src={!isEmpty(productImg?.src) ? productImg?.src : ""} // use normal <img> attributes as props
          />
        </figure>
      </td>
      <td className="woo-next-cart-element">{item?.data?.name ?? ""}</td>
      <td className="woo-next-cart-element">
        {item?.currency ?? ""}
        {item?.line_subtotal ?? ""}
      </td>
    </tr>
  );
};

export default CheckoutCartItem;
