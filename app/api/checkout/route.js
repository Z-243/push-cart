export const runtime = "nodejs";

const DODO_SECRET_KEY = process.env.DODO_SECRET_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function POST(request) {
  console.log("✅ DODO_SECRET_KEY present?", Boolean(DODO_SECRET_KEY));

  try {
    if (!DODO_SECRET_KEY) {
      console.error("❌ DODO_SECRET_KEY is missing");
      return new Response(
        JSON.stringify({ error: "Missing DODO secret key" }),
        { status: 500 }
      );
    }

    const { product_cart, customer, billing } = await request.json();

    const response = await fetch("https://test.dodopayments.com/payments", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${DODO_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        payment_link: true,
        mode: "payment",
        status_url: `${BASE_URL}/status`,
        cancel_url: `${BASE_URL}/`,
        return_url: `${BASE_URL}/status`,
        product_cart,
        customer,
        billing,
      }),
    });

    const rawText = await response.text();

    let session = {};
    if (rawText) {
      try {
        session = JSON.parse(rawText);
      } catch (err) {
        console.error("❌ Failed to parse JSON:", err.message);
        return new Response(
          JSON.stringify({ error: "Invalid JSON in Dodo response" }),
          { status: 502 }
        );
      }
    } else {
      console.error("❌ Empty response body from Dodo");
      return new Response(
        JSON.stringify({ error: "Empty response from Dodo" }),
        { status: 502 }
      );
    }

    if (!response.ok || !session?.payment_link) {
      throw new Error(
        session?.error ||
          session?.message ||
          "Failed to create Dodo checkout session"
      );
    }

    return Response.json({ url: session.payment_link });
  } catch (err) {
    console.error("Error creating Dodo checkout session:", err.message);
    return Response.json(
      { error: "Failed to create Dodo checkout session", details: err.message },
      { status: 500 }
    );
  }
}
