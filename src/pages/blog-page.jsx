import List from "../components/posts/list";

const BlogPage = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-96 bg-rose-950 gap-2">
        <h2 className="font-black text-4xl">Read Blogs</h2>
        <p className="max-w-screen-md text-center">
          Welcome to our blog page, a dynamic and engaging platform built using
          React! This page serves as a hub for sharing insightful articles,
          tutorials, and discussions on various topics, from technology and
          programming to lifestyle and wellness. Our goal is to provide valuable
          content that informs, inspires, and connects with our readers.
        </p>
      </div>
      <div>
        <List />
      </div>
    </div>
  );
};

export default BlogPage;
