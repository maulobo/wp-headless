import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import React from "react";
import { YaEnvieButton } from "../../components/checkout/bank-transfer/ya-page";

const api = new WooCommerceRestApi({
  url: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
  consumerKey: process.env.WC_CONSUMER_KEY,
  consumerSecret: process.env.WC_CONSUMER_SECRET,
  version: "wc/v3",
});

export default async function Page({ params }) {
  const orden = await crearOrden(params);

  return (
    <>
      <h1>{orden.total}</h1>
      <YaEnvieButton></YaEnvieButton>
    </>
  );
}

const crearOrden = async (params) => {
  let data = [];

  try {
    const { data } = await api.get(`orders/${params.slug}`).then((res) => res);

    const orderParaTransfer = {
      id: data.id,
      status: data.status,
      currency: data.currency,
      total: data.total,
    };
    return orderParaTransfer;
  } catch (err) {
    console.log(err);
    return;
  }
};
