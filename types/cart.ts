interface CartItem {
  _id: string;
  productName: string;
  description: string;
  price: number;
  images: any;
  quantity?: number;
  setCartItems?: any;
}