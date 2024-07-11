import Link from "next/link";
import React from "react";

const links = [
  { href: "/", title: "About" },
  { href: "/#experiences", title: "Experiences" },
  { href: "/projects", title: "Projects" },
  { href: "/#works", title: "Works" },
  // { href: "/blogs", title: "Blogs" },
];
const Nav = () => {
  return (
    <nav className="w-full flex justify-center py-5 text-md fixed bottom-0 md:sticky md:top-0 ">
      <ul className="flex items-center justify-between text-center shadow-md gap-3 md:gap-5  bg-primary px-5 py-3 rounded-full">
        {links.map((link, index) => (
          <li
            className="hover:font-bold transition-all text-center "
            key={index}
          >
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
      <div className="h-20 bottom-0 md:top-0 bg-gradient-to-t md:bg-gradient-to-b from-secondary to-transparent w-full fixed -z-10 backdrop-blur-md md:[-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] [-webkit-mask-image:linear-gradient(to_top,black,transparent)]" />
    </nav>
  );
};

export default Nav;
