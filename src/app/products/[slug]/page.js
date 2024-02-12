import { getProductBySlug } from "@/app/api/fetch-products";
import SingleProduct from "@/app/components/single-product";

export default async function Product({ params }) {
  const slug = params.slug;
  const data = await getDataSlug(slug);
  const product = data.props.product;
  return <SingleProduct product={product}></SingleProduct>;
}

export async function getDataSlug(slug) {
  const { data: product } = await getProductBySlug(slug);
  return {
    props: {
      product: product.length ? product[0] : {},
    },
    revalidate: 1,
  };
}
