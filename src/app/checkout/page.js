import axios from "axios";

import { WOOCOMMERCE_COUNTRIES_ENDPOINT } from "../utils/constants/endpoints";
import CheckoutForm from "../components/checkout/checkout-form";

export default async function Checkout() {
  const countriesData = await getCountries();
  const countries = countriesData.props.countries;

  return (
    <>
      <h1>Checkout</h1>
      <CheckoutForm countriesData={countries} />
    </>
  );
}

export async function getCountries() {
  const { data: countries } = await axios.get(WOOCOMMERCE_COUNTRIES_ENDPOINT);

  return {
    props: {
      countries: countries || {},
    },

    /**
     * Revalidate means that if a new request comes to server, then every 1 sec it will check
     * if the data is changed, if it is changed then it will update the
     * static file inside .next folder with the new data, so that any 'SUBSEQUENT' requests should have updated data.
     */
    revalidate: 1,
  };
}
