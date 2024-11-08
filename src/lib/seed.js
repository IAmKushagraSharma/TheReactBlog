import { PrismaClient } from "@prisma/client";
import fetch from "node-fetch";

const prisma = new PrismaClient();

async function main() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

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
