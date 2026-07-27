import mongoose from "mongoose";
import "dotenv/config";

/**
 * Connect to MongoDB using MONGODB_URI from the environment.
 * Defaults to a local MongoDB instance when unset.
 */
export async function connectDb(uri = process.env.MONGODB_URI) {
  const connectionString =
    uri || "mongodb://127.0.0.1:27017/abramson_local_work";

  mongoose.set("strictQuery", true);

  await mongoose.connect(connectionString);
  return mongoose.connection;
}

export async function disconnectDb() {
  await mongoose.disconnect();
}
