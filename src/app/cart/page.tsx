"use client"
import CartItem from "@/components/cart-item/cart-item"
import Checkout from "@/components/checkout-price/checkout-price"

const Cart=()=>{
    return(
        <div className="lg:flex lg:justify-evenly mt-5">
            <div >
                <CartItem/>
                <CartItem/>
                <CartItem/>
            </div>
            <Checkout/>
        </div>
    )
}

export default Cart
