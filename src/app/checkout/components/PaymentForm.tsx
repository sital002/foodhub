"use client";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { paymentData } from "@/utils/DummyData";
import { useEffect, useState } from "react";

const initialData = {
  cardName: "",
  cardNumber: "",
  expDate: "",
  cvv: "",
  saveCard: false,
};

export default function PaymentForm() {
  const [useDummyData, setUseDummyData] = useState(true);

  const [data, setData] = useState(useDummyData ? paymentData : initialData);

  useEffect(() => {
    if (useDummyData) {
      setData(paymentData);
    } else {
      setData(initialData);
    }
  }, [useDummyData]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (useDummyData) return;
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <input
        type="text"
        className="block px-2 py-2 border border-black mb-2 w-full"
        placeholder="Name on card"
        name="cardName"
        onChange={handleChange}
        value={data.cardName}
      />
      <input
        type="text"
        className="block px-2 py-2 border border-black mb-2 w-full"
        placeholder="Card number"
        name="cardNumber"
        onChange={handleChange}
        value={data.cardNumber}
      />
      <input
        type="text"
        className="block px-2 py-2 border border-black mb-2 w-full"
        placeholder="Expiry date"
        name="expDate"
        onChange={handleChange}
        value={data.expDate}
      />

      <input
        type="text"
        placeholder="CVV"
        name="cvv"
        onChange={handleChange}
        value={data.cvv}
        className="block px-2 py-2 border border-black mb-2 w-full"
      />
      <div
        onClick={() => {
          setUseDummyData((prev) => {
            if (prev) {
              setData(initialData);
            } else {
              setData(paymentData);
            }
            return !prev;
          });
        }}
        className="cursor-pointer"
      >
        <input type="checkbox" checked={useDummyData} className="mr-2" />
        <span>Use dummy data for testing</span>
      </div>
    </div>
  );
}
