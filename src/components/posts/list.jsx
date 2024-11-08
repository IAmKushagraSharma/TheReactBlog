import { useState, useEffect } from "react";
import Card from "./card";
import { Link } from "react-router-dom";

const List = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPosts, setSelectedPosts] = useState(new Set());
  const [isDeleteMode, setIsDeleteMode] = useState(false);

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch("http://localhost:5000/api/posts");
      const data = await response.json();
      setPosts(data);
    };

    getPosts();
  }, []);

  const handleSelectPost = (id) => {
    setSelectedPosts((prevSelected) => {
      const newSelected = new Set(prevSelected);
      if (newSelected.has(id)) {
        newSelected.delete(id);
      } else {
        newSelected.add(id);
      }
      return newSelected;
    });
  };

  const handleDeleteSelected = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/posts/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ids: Array.from(selectedPosts),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to delete posts");
      }

      const deletedPostIds = await response.json();

      setPosts((prevPosts) =>
        prevPosts.filter((post) => !deletedPostIds.includes(post.id))
      );

      setSelectedPosts(new Set());

      setIsDeleteMode(false);
    } catch (error) {
      console.error("Error deleting posts:", error);
    }
  };

  const toggleDeleteMode = () => {
    setIsDeleteMode((prevMode) => !prevMode);
    if (isDeleteMode && selectedPosts.size === 0) {
      setIsDeleteMode(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center px-4">
        <div className="flex gap-2">
          <div className="p-2 px-4 bg-red-900 rounded">
            Total posts: {posts.length}
          </div>
          {isDeleteMode && (
            <div className="p-2 px-4 bg-orange-900 rounded">
              {" "}
              Selected Posts: {selectedPosts.size}
            </div>
          )}
        </div>
        <div>
          <div className="flex justify-end gap-2 items-center p-4">
            <button
              onClick={toggleDeleteMode}
              className="bg-red-600 text-white px-4 py-2 rounded"
            >
              {isDeleteMode ? "Cancel" : "Delete Posts"}
            </button>

            {isDeleteMode && selectedPosts.size > 0 && (
              <button
                onClick={handleDeleteSelected}
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Confirm Delete
              </button>
            )}

            <Link
              to={"/blog/new"}
              className={[
                "p-2 rounded bg-red-800",
                "active:bg-red-800/30 hover:bg-red-800/80",
              ].join(" ")}
            >
              New
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 p-4">
        {posts.map((post) => (
          <div key={post.id} className="relative m-2 bg-red-950 rounded">
            <Card post={post} />
            {isDeleteMode && (
              <input
                type="checkbox"
                checked={selectedPosts.has(post.id)}
                onChange={() => handleSelectPost(post.id)}
                className="absolute top-1 left-2 size-8"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
