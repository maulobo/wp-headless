import axios from "axios";
import { HEADER_FOOTER_ENDPOINT } from "../utils/constants/endpoints";

export default async function getHedader() {
  const { data: headerFooterData } = await axios.get(HEADER_FOOTER_ENDPOINT);

  return {
    props: {
      headerFooter: headerFooterData?.data ?? {},
    },

    /**
     * Revalidate means that if a new request comes to server, then every 1 sec it will check
     * if the data is changed, if it is changed then it will update the
     * static file inside .next folder with the new data, so that any 'SUBSEQUENT' requests should have updated data.
     */
    revalidate: 1,
  };
}
