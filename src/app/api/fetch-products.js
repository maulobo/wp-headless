import React from "react";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const api = new WooCommerceRestApi({
  url: "https://scstudio.store",
  consumerKey: process.env.WC_CONSUMER_KEY,
  consumerSecret: process.env.WC_CONSUMER_SECRET,
  version: "wc/v3",
});
export const getProductsData = async (perPage = 50) => {
  return await api.get("products", {
    per_page: perPage || 50,
  });
};

export const getProductBySlug = async (productSlug = "") => {
  return await api.get("products", {
    slug: productSlug,
  });
};
