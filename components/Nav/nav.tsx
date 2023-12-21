import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="w-full flex justify-center py-5 text-md">
      <ul className="flex items-center justify-between text-center gap-4 md:gap-8 bg-primary px-5 py-3 rounded-full">
        <li className="hover:font-bold transition-all text-center ">
          <Link href="/">About</Link>
        </li>
        <li className="hover:font-bold transition-all text-center">
          <Link href="/#works">Works</Link>
        </li>
        <li className="hover:font-bold transition-all text-center">
          <Link href="/projects">Projects</Link>
        </li>
        <li className="hover:font-bold transition-all text-center">
          <Link href="/blogs">Blogs</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
