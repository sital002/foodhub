import ProductCard from "../product-card/product-card"

interface ProductItemProps {
  _id:string;
  productName:string;
  price:number;
  images:string [];
  alt:string;
}


async function getPopularProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/products`, {
    method: "GET",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json"
    }
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
async function PopularProducts() {
  const data = await getPopularProducts();
  return (
    <div>
      <h2 className="text-2xl font-bold my-2">Popular Products</h2>
      {
        data.length > 0 && data.map((item: ProductItemProps) => {
          return <ProductCard key={item._id + item.productName} productName={item.productName} price={item.price} images={item.images} alt={item.productName} _id={item._id} />
        })
      }
    </div>
  )
}

export default PopularProducts