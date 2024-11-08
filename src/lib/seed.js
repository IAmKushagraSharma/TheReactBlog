import { PrismaClient } from "@prisma/client";
import fetch from "node-fetch";

const prisma = new PrismaClient();

async function main() {
  try {
    const response = await fetch("https://dummyjson.com/posts?limit=200");
    const data = await response.json();
    const posts = data.posts;

    for (let post of posts) {
      await prisma.post.create({
        data: {
          title: post.title,
          description: post.body.substring(0, 100),
          body: post.body,
        },
      });
    }

    console.log("Database has been seeded.");
  } catch (error) {
    console.error("Error seeding the database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
