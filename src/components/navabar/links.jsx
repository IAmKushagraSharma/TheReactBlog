import { NavLink } from "react-router-dom";
import { links } from "../../lib/data";

const Links = () => {
  return (
    <ul className="flex gap-x-2">
      {links.map(({ label, href }, index) => (
        <NavLink
          key={index}
          className={({ isActive }) => {
            return `flex px-2 py-0.5 rounded-sm hover:bg-red-900 transition-all duration-300 ${isActive && "bg-red-900"}`;
          }}
          to={href}
        >
          <span>{label}</span>
        </NavLink>
      ))}
    </ul>
  );
};

export default Links;
