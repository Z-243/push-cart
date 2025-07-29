import ImageBanner from "@/components/ImageBanner";
import Products from "@/components/Products";

export const dynamic = "force-dynamic";

export async function getProducts() {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  try {
    const response = await fetch(baseURL + "/api/products");
    const products = await response.json();
    return products;
  } catch (err) {
    console.error("Failed to fetch products:", err);
    return { items: [] };
  }
}

export default async function Home() {
  const products = await getProducts();

  let planners = [];
  let stickers = [];

  for (let product of products.items) {
    if (product.name.trim().includes("Planner")) {
      planners.push(product);
      continue;
    }
    stickers.push(product);
  }

  return (
    <>
      <ImageBanner />
      <section>
        <Products planners={planners} stickers={stickers} />
      </section>
    </>
  );
}
