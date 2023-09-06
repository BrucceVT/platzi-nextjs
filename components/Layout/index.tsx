import React from "react";
import Navbar from "components/Navbar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <footer>
        <p>soy un footer</p>
      </footer>
    </div>
  );
};

export default Layout;
