import CartItem from "@/components/cart-item/cart-item";
import Checkout from "@/components/checkout-price/checkout-price";
import { connectToDB } from "@/database/database";
import { User } from "@/database/models/UserModel";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const getCartItems = async (session: any) => {
  await connectToDB();
  // console.log(session);
  if (!session?.user?.email) return;
  const data = await User.findOne({ email: session?.user?.email }).populate("cart");
  console.log('the data is ', (data.cart))
  return data?.cart || [];
};
const Cart = async () => {
  const session = await getServerSession();
  if (!session) redirect("/login");
  const cartItems = await getCartItems(session);
  if (!cartItems) return;
  return (
    <div className="lg:flex justify-center mt-5  gap-7">
      <div className="bg-gray-50 px-7 rounded-md py-7 mb-4">
        <p className="text-slate-400 p-1 text-end cursor-pointer">Clear All</p>
        {/* {cartItems &&
          cartItems.map((item: any) => <CartItem key={item._id.toString()} cart={item} />)} */}
        {cartItems &&
          cartItems.map((item: any) => <p key={item._id.toString()}>{item.productName}</p>)}
      </div>
      <Checkout />
    </div>
  );
};

export default Cart;
