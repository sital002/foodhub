import Image from 'next/image';
import nonVegImg from "@assets/non-veg-resturant.png"
import Wrapper from '@components/wrapper/wrapper';
import PopularProducts from '@/components/popular-products/popular-products';
import Product from '@/database/models/ProductModel';

 interface ProductType  {
    productName ?: string;
    price ?: number;
    description ?: string;
    images ?: Array<{public_id : string, url : string}>;
}
async function getProductData (productId :string){
    try {
        const product = await Product.findById(productId) as ProductType
        return product;
    }
    catch (err:any) {
        throw new Error(err)
    }
}
export default async function Page(  {params: { productId },
}: {
  params: { productId: string }
}) {
    console.log(productId)
    const product = await getProductData(productId);
    return (
        <Wrapper>
            <div className="md:flex flex-row overflow-hidden">
                <div className='w-screen max-w-md'>
                    <Image src={nonVegImg} alt="non-veg-resturant" objectFit='contain' />
                </div>
                <div>
                    <h1 className='text-2xl md:text-3xl font-semibold'>{product.productName}</h1>
                    <p className='text-gray-50 bg-sky-700 w-fit px-2 my-3 rounded-3xl md:my-5 cursor-pointer'>Baishnab Sweets</p>
                    <p className='text-rose-500 my-3  md:my-5'>{product.price}</p>
                </div>
            </div>
            <div className='my-4'>
                <p className='text-2xl font-medium my-2'>You might also like</p>
                <PopularProducts/>
            </div>
        </Wrapper>

    )
}
