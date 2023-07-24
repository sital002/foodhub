
const CartBox = () => {
  return (
    <div className="rounded-md w-72 h-60 bg-white absolute shadow-md shadow-indigo-500/40 top-9 right-5 text-gray-800 p-1 z-10 hidden group-hover:block">
        <div > 
            <h1 className="text-2xl font-bold">Cart</h1>
            <h1 className="text-2xl font-bold">Total: $100</h1>
                <button className="rounded-3xl px-3 py-1 bg-red-500 text-white absolute bottom-1 right-1">Checkout</button>
            </div>
    </div>
  )
}

export default CartBox