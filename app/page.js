import ImageBanner from "@/components/ImageBanner";
import Products from "@/components/Products";
import { fetchProductsData } from "./lib/products";

export default async function Home() {
  const data = await fetchProductsData();

  const planners = data.items.filter((item) => item.name.includes("Planner"));
  const stickers = data.items.filter((item) => !item.name.includes("Planner"));

  return (
    <>
      <ImageBanner />
      <section>
        <Products planners={planners} stickers={stickers} />
      </section>
    </>
  );
}
