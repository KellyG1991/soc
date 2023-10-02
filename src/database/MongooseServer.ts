import mongoose from "mongoose";

export class MongooseServer {
  public static async connect(): Promise<void> {
    try {
      await mongoose.connect(
        process.env.MONGO_URL ?? "mongodb://root:root@localhost:",
        { dbName: "test" }
      );
    } catch (e) {
      console.log(e);
    }
  }

  public static async disconnect(): Promise<void> {
    try {
      await mongoose.disconnect();
    } catch (e) {
      console.log(e);
    }
  }
}
