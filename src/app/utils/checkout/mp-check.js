"use server";
import { isArray, isEmpty } from "lodash";
import { MercadoPagoConfig, Preference } from "mercadopago";
import { redirect } from "next/navigation";

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN,
});

export default async function createCheckoutSessionAndRedirect(
  products,
  input,
  orderId
) {
  console.log("creando el checkout");

  const preference = await new Preference(client).create({
    body: {
      items: getMercadoPagoItems(products),
      metadata: getMetaData(input, orderId),
    },
  });

  const sandboxInit = preference.sandbox_init_point;
  redirect(sandboxInit);
}

const getMercadoPagoItems = (products) => {
  if (isEmpty(products) && !isArray(products)) {
    return [];
  }

  return products.map((product) => {
    return {
      quantity: product?.quantity ?? 0,
      title: product?.data?.name ?? "",
      id: product?.data?.name ?? "",
      unit_price: Math.round(product?.line_subtotal ?? 0),
    };
  });
};

export const getMetaData = (input, orderId) => {
  return {
    billing: JSON.stringify(input?.billing),
    shipping: JSON.stringify(
      input.billingDifferentThanShipping
        ? input?.billing?.email
        : input?.shipping?.email
    ),
    orderId,
  };
};
