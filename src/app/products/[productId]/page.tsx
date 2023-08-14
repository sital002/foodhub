import Wrapper from "@components/wrapper/wrapper";
import Product from "@/database/models/ProductModel";
import Quantity from "@/components/quantity/quantity";
import ProductCategory from "@/components/product-category/product-category";
import { connectToDB } from "@/database/database";
import ImageHolder from "@/components/image-holder/image-holder";

interface ProductItemProps {
  _id: string;
  productName: string;
  description?: string;
  price: number;
  images: string[];
}

async function getProducts() {
  await connectToDB();
  const res = await Product.find().limit(8);
  return res;
}
async function getProductData(productId: string) {
  try {
    await connectToDB();
    const product = await Product.findById(productId);
    return product;
  } catch (err: any) {
    throw new Error(err);
  }
}
export default async function Page({
  params: { productId },
}: {
  params: { productId: string };
}) {
  const products: ProductItemProps[] = await getProducts();
  const product: ProductItemProps = await getProductData(productId);
  return (
    <Wrapper>
      <div className="md:flex flex-row overflow-hidden gap-2">
        <div className="max-w-md w-full">
          <ImageHolder images={product.images} />
          {/* <Image src={product.images[0] || nonVegImg} alt={product.productName || ""}  height={500} width={500} /> */}
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold">
            {product.productName}
          </h1>
          <p className="text-gray-50 bg-sky-700 w-fit px-2 my-3 rounded-3xl md:my-5 cursor-pointer">
            Baishnab Sweets
          </p>
          <p className="text-rose-500 my-3  md:my-5">NPR. {product.price}</p>
          <Quantity />
        </div>
      </div>
      <ProductCategory title="You might also like" products={products} />
    </Wrapper>
  );
}
