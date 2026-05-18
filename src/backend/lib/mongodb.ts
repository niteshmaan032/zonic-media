import { Db, MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB_NAME;

declare global {
  var zonicMongoClientPromise: Promise<MongoClient> | undefined;
}

export async function getMongoClient() {
  if (!uri) {
    throw new Error("MONGODB_URI is not configured.");
  }

  if (process.env.NODE_ENV === "development") {
    globalThis.zonicMongoClientPromise ??= new MongoClient(uri).connect();
    return globalThis.zonicMongoClientPromise;
  }

  return new MongoClient(uri).connect();
}

export async function getMongoDb(): Promise<Db> {
  if (!dbName) {
    throw new Error("MONGODB_DB_NAME is not configured.");
  }

  const client = await getMongoClient();
  return client.db(dbName);
}
