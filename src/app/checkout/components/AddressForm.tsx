"use client";
import { ChangeEvent, useState } from "react";
import {shippingData} from "@/utils/DummyData";

interface AddressFormProps {
  useDummyData: boolean;
}


const initialData = {
  name: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  zip: "",
  country: "",
  phone: "",
  email: ""
}
export default function AddressForm({ useDummyData }: AddressFormProps) {
  const [data, setData] = useState(useDummyData ? shippingData : initialData);
  const handleChange = (event:ChangeEvent<HTMLInputElement>)=>{
    if (useDummyData) return;
      setData({
        ...data,
        [event.target.name]: event.target.value
      });
    
  }
  return (
    <div>
      <p className="text-xl mb-2">
        Shipping address
      </p>
      <input
        type="text"
        placeholder="Enter full Name"
        onChange={handleChange}
        name="name"
        value={data.name}
        className="block px-2 py-2 border border-black mb-2 w-full"
      />
      <input
        type="text"
        placeholder="Address line 1"
        onChange={handleChange}
        name="address1"
        value={data.address1}
        className="block px-2 py-2 border border-black mb-2 w-full"
      />
      <input
        type="text"
        placeholder="Address line 2"
        onChange={handleChange}
        name="address2"
        value={data.address2}
        className="block px-2 py-2 border border-black mb-2 w-full"
      />
      <input
        type="text"
        placeholder="City"
        onChange={handleChange}
        name="city"
        value={data.city}
        className="block px-2 py-2 border border-black mb-2 w-full"
      />
      <input
        type="text"
        onChange={handleChange}
        name="state"
        value={data.state}
        placeholder="State/Province/Region"
        className="block px-2 py-2 border border-black mb-2 w-full"
      />
      <input
        type="text"
        onChange={handleChange}
        name="zip"
        value={data.zip}
        placeholder="Zip / Postal code"
        className="block px-2 py-2 border border-black mb-2 w-full"
      />
      <input
        type="text"
        onChange={handleChange}
        name="country"
        value={data.country}
        placeholder="Country"
        className="block px-2 py-2 border border-black mb-2 w-full"
      />
      <input
        type="text"
        onChange={handleChange}
        name="phone"
        value={data.phone}
        placeholder="Phone Number"
        className="block px-2 py-2 border border-black mb-2 w-full"
      />
      <input
        type="text"
        onChange={handleChange}
        name="email"
        value={data.email}
        placeholder="Email"
        className="block px-2 py-2 border border-black mb-2 w-full"
      />
    </div>
  );
}
