import { connect, connection } from "mongoose";

export const connectDb = async () => {
  try {
    connect(process.env.DB_URL!);

    connection.on("connected", () => {
      console.log("🫀✅🫀 Database is Connected Successfully❗ ✅📦✅");
    });

    connection.on("error", (err) => {
      console.log("❌❗❌❗❌ Database connection failed❗ error:- " + err);
      process.exit();
    });
  } catch (error) {
    console.log("❌❗❌❗❌ Something goes wrong❗ Error:- " + error);
  }
};
