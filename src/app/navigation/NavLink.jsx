import Link from "next/link";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const NavLink = ({ href, title, active }) => {
  const isRDV = title === "Prendre RDV";
  const buttonClasses = active ? "text-secondary" : "text-black";

  const rdvButton = isRDV ? "bg-primary text-white rounded" : "";

  return (
    <Link
      href={href}
      className={`block py-2 pl-3 pr-4 sm:text-xl rounded md:p-0 text-black hover:text-primary ${buttonClasses} ${rdvButton}`}
    >
      {title}
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-primary-500 mt-2 mr-3"
      ></motion.div>  
    </Link>
  );
};

export default NavLink;
