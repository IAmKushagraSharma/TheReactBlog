import path from "path";
import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const prisma = new PrismaClient();
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST",
    credentials: true,
  }),
);

app.use(express.json());

app.get("/api/posts", async (req, res) => {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/posts/:slug", async (req, res) => {
  const { slug } = req.params;
  try {
    const post = await prisma.post.findUnique({
      where: {
        id: slug,
      },
    });
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/api/posts/delete", async (req, res) => {
  const { ids } = req.body;
  try {
    await prisma.post.deleteMany({
      where: { id: { in: ids } },
    });
    res.status(200).json(ids);
  } catch (err) {
    res.status(500).json({ message: "Failed to delete posts" });
    console.log(err);
  }
});

app.post("/api/posts/", async (req, res) => {
  const { name, description, body } = req.body;
  try {
    const post = await prisma.post.create({
      data: { title: name, description, body },
    });
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
