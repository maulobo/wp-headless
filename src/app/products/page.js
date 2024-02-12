import React from "react";
import Products from "../components/products";
import DataFetching from "../components/products/fetching";

const Page = async () => {
  const { props } = await DataFetching();
  return <Products products={props.products} />;
};

export default Page;
