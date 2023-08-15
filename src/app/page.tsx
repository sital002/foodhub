import CategoryCard from "@components/category-card/category-card";
import Wrapper from "@components/wrapper/wrapper";
import backeryImg from "@assets/bakery.png";
import nonVegImg from "@assets/non-veg-resturant.png";
import vegImg from "@assets/veg-resturant.png";
import HeroSection from "@components/hero-section/hero-section";
import ProductCategory from "@/components/product-category/product-category";
import Product from "@/database/models/ProductModel";
import { connectToDB } from "@/database/database";

async function getPopularProducts() {
  try {
    await connectToDB();
    const products = await Product.find().limit(8);
    return products;
  } catch (err: any) {
    throw new Error(err.message);
  }
}

export default async function Page() {
  const products = await getPopularProducts();

  return (
    <main>
      <HeroSection />
      <Wrapper>
        <h2 className="text-2xl font-bold my-2">Shop By Categories</h2>
        <p className="text-gray-500">We've Got Something For Everyone</p>
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
        <ProductCategory title="Popular Products" products={products} />
      </Wrapper>
    </main>
  );
}
