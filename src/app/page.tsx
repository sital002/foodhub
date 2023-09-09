import CategoryCard from "@components/category-card/category-card";
import Wrapper from "@components/wrapper/wrapper";
import backeryImg from "@assets/bakery.png";
import nonVegImg from "@assets/non-veg-resturant.png";
import vegImg from "@assets/veg-resturant.png";
import HeroSection from "@components/hero-section/hero-section";
import ProductCategory from "@/components/product-category/product-category";
import Product from "@/database/models/ProductModel";
import { ProductItemProps } from "./products/[productId]/page";

async function getPopularProducts() {
  try {
    // await connectToDB();
    // const products = (await Product.find().limit(8)) as ProductItemProps[];
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/products`,
      {
        method: "GET",
        cache: "no-store",
      }
    );
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    const products = (await res.json()) as ProductItemProps[];
    return products;
  } catch (err: any) {
    console.log(err.message);
  }
}

export default async function Page() {
  const products = await getPopularProducts();

  return (
    <main>
      <HeroSection />
      <Wrapper>
        <h2 className="text-2xl font-bold my-2 text-slate-600">
          Shop By Categories
        </h2>
        <p className="text-gray-500"> We&apos;ve Got Something For Everyone</p>
        <CategoryCard
          title="Veg Resturant"
          img={vegImg}
          alt={"Veg Resturant"}
        />
        <CategoryCard
          title="Non Veg Resturant"
          img={nonVegImg}
          alt={"Non Veg Resturant"}
        />
        <CategoryCard title="Bakery" img={backeryImg} alt={"Bakery"} />
      </Wrapper>
      <Wrapper>
        {products && (
          <ProductCategory title="Popular Products" products={products} />
        )}
      </Wrapper>
    </main>
  );
}
