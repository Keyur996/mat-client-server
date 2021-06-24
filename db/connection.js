import mongoose from "mongoose";

export const connection = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    console.log("Database Connected Successfully");
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
