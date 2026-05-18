import { Db, MongoClient, type MongoClientOptions } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB_NAME;

type MongoCache = {
  client: MongoClient | null;
  promise: Promise<MongoClient> | null;
};

declare global {
  var zonicMongoCache: MongoCache | undefined;
}

const maxPoolSize = Number(process.env.MONGODB_MAX_POOL_SIZE ?? "10");
const mongoOptions: MongoClientOptions = {
  appName: "zonic-web",
  maxPoolSize:
    Number.isFinite(maxPoolSize) && maxPoolSize > 0 ? maxPoolSize : 10,
  minPoolSize: 0,
  maxIdleTimeMS: 30_000,
  serverSelectionTimeoutMS: 5_000,
  socketTimeoutMS: 45_000,
};

const cached =
  globalThis.zonicMongoCache ??
  (globalThis.zonicMongoCache = { client: null, promise: null });

export async function getMongoClient(): Promise<MongoClient> {
  if (!uri) {
    throw new Error("MONGODB_URI is not configured.");
  }

  if (cached.client) {
    return cached.client;
  }

  if (!cached.promise) {
    cached.promise = new MongoClient(uri, mongoOptions).connect().catch((error) => {
      cached.promise = null;
      throw error;
    });
  }

  cached.client = await cached.promise;
  return cached.client;
}

export async function getMongoDb(): Promise<Db> {
  if (!dbName) {
    throw new Error("MONGODB_DB_NAME is not configured.");
  }

  const client = await getMongoClient();
  return client.db(dbName);
}
