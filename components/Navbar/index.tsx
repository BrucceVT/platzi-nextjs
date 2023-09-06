import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/" passHref legacyBehavior>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about" passHref legacyBehavior>
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
