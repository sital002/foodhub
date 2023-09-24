import mongoose from "mongoose";

let isConnected = false;

interface connectionOptions {
  dbName: string;
  useNewUrlParser: boolean;
  useUnifiedTopology: boolean;
}

export const connectToDB = async () => {

  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI || "", {
      dbName: "foodhub",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as connectionOptions);

    isConnected = true;

    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
