import Wrapper from "@components/wrapper/wrapper";
import Product from "@/database/models/ProductModel";
import Quantity from "@/components/quantity/quantity";
import ProductCategory from "@/components/product-category/product-category";
import { connectToDB } from "@/database/database";
import ImageHolder from "@/components/image-holder/image-holder";

export interface ProductItemProps {
  _id: string;
  productName: string;
  description?: string;
  price: number;
  images: any;
}

async function getProducts() {
  try {
    await connectToDB();
    const res = (await Product.find()) as ProductItemProps[];
    return res;
  } catch (err: any) {
    throw new Error(err);
  }
}
async function getProductData(productId: string) {
  try {
    await connectToDB();
    const product = (await Product.findById(productId)) as ProductItemProps;
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
      <div className="md:flex flex-row overflow-hidden gap-2 justify-center items-center">
        <div className="w-96 md:max-w-md ">
          <ImageHolder images={product.images} />
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold max-w-lg">
            {product.productName}
          </h1>
          <p className="text-gray-50 bg-sky-700 w-fit px-2 my-3 rounded-3xl md:my-5 cursor-pointer">
            Foodhub
          </p>
          <p className="max-w-lg">{product?.description}</p>
          <p className="text-rose-500 my-3  md:my-5">NPR. {product.price}</p>
          <Quantity productId={productId} />
        </div>
      </div>
      <ProductCategory title="You might also like" products={products} />
    </Wrapper>
  );
}
