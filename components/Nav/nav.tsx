import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="w-full  flex justify-center py-5 text-md">
      <ul className="flex items-center justify-between text-center gap-14 bg-primary px-5 py-3 rounded-full">
        <li className="hover:font-bold transition-all text-center ">
          <Link href="/">About</Link>
        </li>
        <li className="hover:font-bold transition-all text-center">
          <Link href="/">Projects</Link>
        </li>
        <li className="hover:font-bold transition-all text-center">
          <Link href="/">Works</Link>
        </li>
        <li className="hover:font-bold transition-all text-center">
          <Link href="/">Blogs</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
