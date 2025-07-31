import { fetchProductsData } from "@/app/lib/products";

export async function GET() {
  try {
    const products = await fetchProductsData();
    return Response.json(products);
  } catch (error) {
    console.error("API /products error:", error);
    return new Response("Failed to fetch products", { status: 500 });
  }
}
