import App from "../App";
import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../pages/error-page";
import AboutPage from "../pages/about-page";
import HomePage from "../pages/home-page";
import BlogPage from "../pages/blog-page";
import BlogPostPage from "../pages/blog-post-page";
import BlogCreatePage from "../pages/blog-create-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/blog/new",
        element: <BlogCreatePage />,
      },
      {
        path: "/blog/:slug",
        element: <BlogPostPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
]);

export default router;
