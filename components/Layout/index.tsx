import React from "react";
import Navbar from "components/Navbar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className=" bg-slate-600">
      <Navbar />
      {children}
      <footer>
        <p>soy un footer</p>
      </footer>
    </div>
  );
};

export default Layout;
