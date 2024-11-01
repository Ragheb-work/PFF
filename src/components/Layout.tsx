import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

const Layout = () => {
  // Shared state in the parent
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      {/* Navbar */}
      <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {/* Sidebar */}
      <div className="flex justify-start sm:justify-end">
        <SideBar isMenuOpen={isMenuOpen} />

        {/* Main Content */}
        <main className="w-full pt-20 px-4 sm:w-[calc(100vw-16rem)] md:px-16">
          {/* Dynamic content based on the route */}
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
