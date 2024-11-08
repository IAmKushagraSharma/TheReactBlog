import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ActionBar from "../components/posts/action-bar";

const BlogPostPage = () => {
  const [post, setPost] = useState(null);

  const { slug } = useParams();

  useEffect(() => {
    const getPost = async () => {
      const response = await fetch(`http://localhost:5000/api/posts/${slug}`);
      const data = await response.json();
      setPost(data);
    };

    getPost();
  }, [slug]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ActionBar title={post.title} />
      <div className="p-4">
        <h1 className="text-2xl">{post.title.toLocaleUpperCase()}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
      </div>
    </>
  );
};

export default BlogPostPage;
