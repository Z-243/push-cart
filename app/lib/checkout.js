export async function createCheckoutSession({ cart, email }) {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

  const lineItems = Object.keys(cart).map((key) => {
    const item = cart[key];
    return {
      product_id: item.product_id,
      quantity: item.quantity,
    };
  });

  if (lineItems.length === 0) {
    throw new Error("Cart is empty");
  }

  const response = await fetch(`${baseURL}/api/checkout`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      product_cart: lineItems,
      customer: {
        email: email || "",
        name: "Anonymous",
      },
      billing: {
        city: "N/A",
        country: "US",
        state: "N/A",
        street: "N/A",
        zipcode: "00000",
      },
    }),
  });

  const data = await response.json();

  if (!response.ok || !data.url) {
    throw new Error(data.error || "Checkout failed");
  }

  return data.url;
}
