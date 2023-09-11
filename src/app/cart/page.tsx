import CartItem from "@/components/cart-item/cart-item";
import Checkout from "@/components/checkout-price/checkout-price";
import { connectToDB } from "@/database/database";
import { User } from "@/database/models/UserModel";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";



interface User {
  name: string;
  image: string;
  email: string;
  cart: CartItem[];
}

const getCartItems = async (session: any) => {
  await connectToDB();
  if (!session?.user?.email) return;
  const data = (await User.findOne({ email: session?.user?.email }).populate(
    "cart"
  )) as User;
  return data?.cart || [];
};
const Cart = async () => {
  const session = await getServerSession();
  if (!session) redirect("/login");
  const cartItems = await getCartItems(session);
  if (!cartItems || cartItems.length === 0)
    return <h1 className="text-center text-2xl">No items in cart </h1>;
  if (!cartItems) return;
  return (
    <div className="lg:flex justify-center mt-5  gap-7">
      <div className="bg-gray-50 px-7 rounded-md py-7 mb-4">
        <p className="text-slate-400 p-1 text-end cursor-pointer">Clear All</p>
        {cartItems &&
          cartItems.map((item: CartItem) => (
            <CartItem
              key={item._id.toString()}
              _id={item._id.toString()}
              price={item.price}
              productName={item.productName}
              description={item.description}
              images={item.images}
            />
          ))}
      </div>
      <Checkout />
    </div>
  );
};

export default Cart;
