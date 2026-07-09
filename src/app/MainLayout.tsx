import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

import "./MainLayout.scss";

export default function MainLayout() {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <div className="page-container">
          <Outlet />
        </div>
      </div>
    </div>
  );
}