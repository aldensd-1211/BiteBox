import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://aldendcunha1211:9988776655@cluster0.laidz.mongodb.net/BiteBox"
    )
    .then(() => console.log("DB Connected"));
};
