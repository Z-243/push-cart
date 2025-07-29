export async function fetchProductsData() {
  const DODO_SECRET_KEY = process.env.DODO_SECRET_KEY;

  const headers = {
    Authorization: `Bearer ${DODO_SECRET_KEY}`,
    "Content-Type": "application/json",
  };

  const res = await fetch("https://test.dodopayments.com/products", {
    headers,
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}
