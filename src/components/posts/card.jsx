import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ post }) => {
  return (
    <Link
      to={`/blog/${post.id}`}
    >
      <div className="flex flex-col text-sm bg-black/20 border-b border-red-800 px-2 py-0.5 text-right">
        {post.createdAt}
      </div>
      <div className="flex p-2 flex-col">
        <h2>{post.title.toUpperCase()}</h2>
        <p className="text-sm">{post.description}</p>
      </div>
      <div></div>
    </Link>
  );
};

Card.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    body: PropTypes.string,
  }).isRequired,
};

export default Card;
