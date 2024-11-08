import { TbChevronRight } from "react-icons/tb";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ActionBar = ({ title }) => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/posts/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ids: [slug],
        }),
      });

      if (response.ok) {
        navigate("/blog");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div
      className={[
        "sticky top-14",
        "shadow-md shadow-[#350000]",
        "flex items-center justify-between px-4",
        "h-10 bg-red-950 border-b border-red-900",
      ].join(" ")}
    >
      <div className="flex gap-1 text-gray-400 items-center">
        <Link to="/blog">All posts</Link>
        <TbChevronRight />
        <div className="text-gray-200">{title}</div>
      </div>
      <div className="flex gap-x-2">
        <button
          onClick={handleDelete}
          className={[
            "px-2 py-0.5 rounded-md bg-red-800",
            "active:bg-red-800/30 hover:bg-red-800/80",
          ].join(" ")}
        >
          Delete
        </button>
        <Link
          to={"/blog"}
          className={[
            "px-2 py-0.5 rounded-md bg-red-800",
            "active:bg-red-800/30 hover:bg-red-800/80",
          ].join(" ")}
        >
          Back
        </Link>
      </div>
    </div>
  );
};

ActionBar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ActionBar;
