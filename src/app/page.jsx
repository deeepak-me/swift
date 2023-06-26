import { Hero } from "@/components/hero/Hero";
import LargeProductCard from "@/components/largeproductcard/Largeproductcard";
import ProductCard from "@/components/productcard/Productcard";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProductCard />
      <LargeProductCard />
    </div>
  );
}
