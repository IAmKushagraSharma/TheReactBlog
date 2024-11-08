import { useState, useEffect } from "react";
import { TbFidgetSpinner } from "react-icons/tb";
import MarkdownRenderer from "../lib/markdown-provider";

const AboutPage = () => {
  const [readme, setReadme] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchReadme = async () => {
    try {
      const response = await fetch(
        "https://api.github.com/repos/IAmKushagraSharma/TheReactBlog/readme",
        {
          headers: {
            Accept: "application/vnd.github.v3.raw",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch README");
      }

      const data = await response.text();
      setReadme(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReadme();
  }, []);

  if (loading) {
    return (
      <div className="w-full mt-10 flex items-center justify-center">
        <TbFidgetSpinner className="animate-spin size-9 text-red-600" />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-4">
      <div className="prose">
        <MarkdownRenderer content={readme} />
      </div>
    </div>
  );
};

export default AboutPage;
