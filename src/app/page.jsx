import BrandCard from "@/components/brandcarrd/BrandCard";
import { Hero } from "@/components/hero/Hero";
import LargeProductCard from "@/components/largeproductcard/Largeproductcard";
import LongProductCard from "@/components/longproductcard/Longproductcard";
import ProductCard from "@/components/productcard/Productcard";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProductCard />
      <LargeProductCard />
      <LongProductCard/>
      <BrandCard />
    </div>
  );
}
