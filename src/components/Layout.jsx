import React, { useState } from "react";
import Sidebar from "./Sidebar.jsx";
import { useAuth } from "../context/AuthContext.jsx";

const Layout = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const { auth, logout } = useAuth();
  const handleLogout = () => {
    logout();
    // You can call your logout function from AuthContext here
  };

  return (
    <div className="d-flex">
      <Sidebar activeMenu={activeMenu} handleLogout={handleLogout} />
      <main className="flex-grow-1 p-4 bg-light">
        {children}
      </main>
    </div>
  );
};

export default Layout;
