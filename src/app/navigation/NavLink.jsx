import Link from "next/link";
import { motion } from "framer-motion";

const NavLink = ({ href, title, active }) => {
  const isRDV = title === "Prendre RDV";

  const rdvButton = isRDV
    ? "bg-primary text-white px-3 rounded-3xl hover:text-white hover:bg-secondary"
    : "";

  return (
    <Link
      href={href}
      className={`relative block  sm:text-base  py-2 rounded text-black hover:text-primary ${rdvButton}`}
    >
      <span className="relative z-10">{title}</span>
      {!isRDV && active && (
        <motion.div
          layoutId="underline"
          className="absolute bottom-0 mx-1 left-0 right-0 h-1 bg-secondary rounded-full"
        />
      )}
    </Link>
  );
};

export default NavLink;
