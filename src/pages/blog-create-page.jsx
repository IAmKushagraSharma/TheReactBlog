import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";

const BlogCreatePage = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const toolbarOptions = [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic", "underline"],
    [{ color: [] }, { background: [] }],
    ["link", "image"],
    ["clean"],
  ];

  const modules = {
    toolbar: toolbarOptions,
  };

  const handleSubmit = async () => {
    if (!name || !description || !content) {
      alert("Please fill out all fields");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          description,
          body: content,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create post");
      }

      navigate(`/blog/`);
    } catch (e) {
      console.log("Error creating new post", e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div
        className={[
          "sticky top-14",
          "shadow-md shadow-[#350000]",
          "flex items-center justify-between px-4",
          "h-10 bg-red-950 border-b border-red-900",
        ].join(" ")}
      >
        <div>CREATE A NEW POST</div>
        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className={[
            "px-2 py-0.5 rounded-md bg-red-800",
            "active:bg-red-800/30 hover:bg-red-800/80",
          ].join(" ")}
        >
          {isLoading ? "Creating..." : "Create"}
        </button>
      </div>
      <div className="space-y-2 p-2">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="w-full p-2 mt-2 border border-gray-800 rounded"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full p-2 mt-2 border border-gray-800 rounded"
        />
        <ReactQuill
          className="quill"
          value={content}
          onChange={setContent}
          modules={modules}
        />
      </div>
    </div>
  );
};

export default BlogCreatePage;
