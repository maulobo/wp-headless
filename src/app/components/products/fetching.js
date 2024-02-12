import React from "react";
import { getProductsData } from "../../api/fetch-products";

const DataFetching = async () => {
  const { data: products } = await getProductsData();

  return {
    props: {
      products: products ?? {},
    },
    revalidate: 1,
  };
};

export default DataFetching;
