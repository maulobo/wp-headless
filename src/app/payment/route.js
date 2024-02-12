import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { MercadoPagoConfig, Payment } from "mercadopago";

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN,
});

const api = new WooCommerceRestApi({
  url: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
  consumerKey: process.env.WC_CONSUMER_KEY,
  consumerSecret: process.env.WC_CONSUMER_SECRET,
  version: "wc/v3",
});

export async function POST(request) {
  try {
    const body = await request.json().then((data) => data);

    const payment = await new Payment(client).get({ id: body.data.id });
    console.log(payment);
    const meta = payment.metadata;
    console.log(meta);

    const pagoDeProducto = {
      orderId: payment.metadata.order_id,
      amount: payment.transaction_amount,
      message: payment.description,
      status: payment.status,
      transactionId: payment.id,
    };
    await actualizarOrdenConPagoExitoso(pagoDeProducto);

    return Response.json({ success: true });
  } catch (error) {
    console.error("Error al procesar la solicitud:", error.message);
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
async function actualizarOrdenConPagoExitoso(pagoDeProducto) {
  const { status, orderId } = pagoDeProducto;
  console.log(pagoDeProducto);

  let newOrderData = {};

  if (status == "approved") {
    const newStatus = "completed";
    newOrderData = {
      status: newStatus,
    };
  } // ver el resto de los status y manejar cada respuesta

  try {
    // aca va toda la logica para acutalizar desde post en woocommerce
    console.log("nueva orden: ", newOrderData);
    const { data } = await api.put(`orders/${orderId}`, newOrderData);
    console.log("✅ Order updated data", data);

    if (data.status) {
      console.log(
        "Orden actualizada con éxito con el status de respuesta :",
        data.status
      );
    } else {
      console.error("Error al actualizar la orden:", data.statusText);
    }
  } catch (error) {
    console.log(error);
    console.error("Error en la solicitud al backend:", error.message);
  }
}
