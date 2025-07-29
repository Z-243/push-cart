import "../../../envConfig.js";

const DODO_SECRET_KEY = process.env.DODO_SECRET_KEY;

export async function GET() {
  try {
    const headers = {
      Authorization: `Bearer ${DODO_SECRET_KEY}`,
      "Content-Type": "application/json",
    };

    // Only fetch products — since prices are already included
    const productsRes = await fetch("https://test.dodopayments.com/products", {
      headers,
    });

    if (!productsRes.ok) {
      const errorText = await productsRes.text();
      console.error("❌ Product error:", errorText);
      throw new Error("Failed to fetch products from Dodo API");
    }

    const products = await productsRes.json();

    return new Response(JSON.stringify(products), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error fetching data from Dodo:", err.message || err);
    return new Response(
      JSON.stringify({ error: "Failed to fetch data from Dodo Payments" }),
      { status: 500 }
    );
  }
}
