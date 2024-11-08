import Links from "./links";
import Logo from "./logo";

const Navbar = () => {
  return (
    <div className="sticky top-0 bg-[#350000] h-14 border-b border-red-900/50 z-40">
      <div className="flex h-full mx-4 justify-between items-center">
        <Logo />
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
