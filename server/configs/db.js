import mongoose from "mongoose";

const connectDB = async () => {
  try {
    //whenever mongoose connects to the database, it will log the message
    mongoose.connection.on("connected", () =>
      console.log("Database Connected")
    );
    await mongoose.connect(`${process.env.MONGODB_URI}/car-rental`);
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDB;
