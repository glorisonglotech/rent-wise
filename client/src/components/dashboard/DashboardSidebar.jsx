import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaBuilding,
  FaUsers,
  FaDollarSign,
  FaTools,
  FaFileAlt,
  FaBell,
  FaCog,
  FaBars,
} from "react-icons/fa";

const navigationItems = [
  { title: "Dashboard", url: "/", icon: FaHome },
  { title: "Properties", url: "/properties", icon: FaBuilding },
  { title: "Tenants", url: "/tenants", icon: FaUsers },
  { title: "Financials", url: "/financials", icon: FaDollarSign },
  { title: "Maintenance", url: "/maintenance", icon: FaTools },
  { title: "Reports", url: "/reports", icon: FaFileAlt },
];

const settingsItems = [
  { title: "Notifications", url: "/notifications", icon: FaBell },
  { title: "Settings", url: "/settings", icon: FaCog },
];

export default function DashboardSidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={`bg-black text-white border-r transition-all duration-300 ${collapsed ? "w-16" : "w-64"} flex flex-col h-screen`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-pink-400 rounded-lg flex items-center justify-center text-white">
            <FaBuilding size={collapsed ? 24 : 18} />
          </div>
          {!collapsed && (
            <div>
              <h2 className="font-bold text-xl">RentWise</h2>
              <p className="text-sm text-gray-400">Property Manager</p>
            </div>
          )}
        </div>
        <button onClick={() => setCollapsed(!collapsed)} className="text-gray-400 hover:text-white">
          <FaBars />
        </button>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto p-4">
        <SidebarGroup label="Main Navigation" collapsed={collapsed}>
          {navigationItems.map(({ title, url, icon: Icon }) => (
            <NavLink
              key={title}
              to={url}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md ${collapsed ? "justify-center" : ""} text-base ${
                  isActive
                    ? "bg-white text-black font-semibold"
                    : "text-gray-400 hover:bg-gray-800 hover:text-white"
                }`
              }
            >
              <Icon className={`text-pink-400 ${collapsed ? "text-2xl" : "text-lg"}`} />
              {!collapsed && <span>{title}</span>}
            </NavLink>
          ))}
        </SidebarGroup>

        <SidebarGroup label="System" collapsed={collapsed} className="mt-6">
          {settingsItems.map(({ title, url, icon: Icon }) => (
            <NavLink
              key={title}
              to={url}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md ${collapsed ? "justify-center" : ""} text-base ${
                  isActive
                    ? "bg-white text-black font-semibold"
                    : "text-gray-400 hover:bg-gray-800 hover:text-white"
                }`
              }
            >
              <Icon className={`text-pink-400 ${collapsed ? "text-2xl" : "text-lg"}`} />
              {!collapsed && <span>{title}</span>}
            </NavLink>
          ))}
        </SidebarGroup>
      </div>
    </aside>
  );
}

function SidebarGroup({ label, children, collapsed, className = "" }) {
  return (
    <div className={className}>
      {!collapsed && (
        <div className="text-sm font-semibold text-gray-500 uppercase mb-2 tracking-wide">
          {label}
        </div>
      )}
      <div className="space-y-1">{children}</div>
    </div>
  );
}
