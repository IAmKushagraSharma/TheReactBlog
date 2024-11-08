import { PrismaClient } from "@prisma/client";

let db;

if (typeof process !== "undefined" && process.env.NODE_ENV === "production") {
  db = new PrismaClient();
} else {
  if (!globalThis.db) {
    globalThis.db = new PrismaClient();
  }
  db = globalThis.db;
}

export default db;
