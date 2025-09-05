import React from "react";
import { FaBell, FaSearch, FaUser } from "react-icons/fa";
import { ModeToggle } from "@/components/ModeToggle"; 

export default function DashboardHeader() {
  return (
    <header className="h-16 border-b border-border bg-card flex items-center justify-between px-6 text-foreground">
     
      <div className="flex items-center gap-4">
        <ModeToggle />

        <div className="relative max-w-sm w-full">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search properties, tenants..."
            className="pl-10 pr-4 py-2 w-full rounded-md bg-muted border border-border text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>
      </div>

     
      <div className="flex items-center gap-3">
        <button className="relative p-2 rounded hover:bg-muted">
          <FaBell className="text-pink-400" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-pink-400 rounded-full"></span>
        </button>
        <div className="h-10 w-10 rounded-full overflow-hidden border border-border bg-muted flex items-center justify-center">
          <FaUser className="text-pink-400" />
        </div>
      </div>
    </header>
  );
}
