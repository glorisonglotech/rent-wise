import React from "react";
import {
  FaDollarSign,
  FaBuilding,
  FaUsers,
  FaTools,
  FaChartLine,
  FaExclamationTriangle,
} from "react-icons/fa";

import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatsCard from "@/components/dashboard/StatsCard";
import PropertyCard from "@/components/dashboard/PropertyCard";
import RecentActivity from "@/components/dashboard/RecentActivity";

const properties = [
  { id: "1", name: "Sunset Apartments #4B", address: "123 Maple Street", tenant: "Sarah Johnson", rent: 2400, status: "occupied", leaseEnd: "Dec 2024" },
  { id: "2", name: "Oak Street Condo #12", address: "456 Oak Street", rent: 1800, status: "vacant" },
  { id: "3", name: "Downtown Loft #301", address: "789 Pine Ave", tenant: "Mike Rodriguez", rent: 3200, status: "occupied", leaseEnd: "Mar 2025" },
  { id: "4", name: "Pine Villa #8", address: "321 Elm Drive", rent: 2000, status: "maintenance" },
  { id: "5", name: "Garden View #22", address: "654 Birch Lane", tenant: "Lisa Chen", rent: 2200, status: "occupied", leaseEnd: "Jan 2025" },
  { id: "6", name: "Riverside Heights #15", address: "987 River Road", rent: 2800, status: "vacant" },
];

export default function DashboardPage() {
  const totalProperties = properties.length;
  const occupied = properties.filter(p => p.status === "occupied").length;
  const vacant = properties.filter(p => p.status === "vacant").length;
  const maintenance = properties.filter(p => p.status === "maintenance").length;
  const occupancyRate = Math.round((occupied / totalProperties) * 100);
  const totalRevenue = properties.filter(p => p.status === "occupied").reduce((sum, p) => sum + p.rent, 0);

  return (
    <div className="min-h-screen w-full flex bg-black text-white">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Welcome back, Test! 👋</h1>
              <p className="text-gray-400">Here's what's happening with your properties today.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatsCard title="Total Revenue" value={`$${totalRevenue.toLocaleString()}`} change="+12% from last month" icon={FaDollarSign} trend="up" />
              <StatsCard title="Properties" value={totalProperties} change={`${occupancyRate}% occupancy rate`} icon={FaBuilding} trend="up" />
              <StatsCard title="Active Tenants" value={occupied} change={`${vacant} vacant units`} icon={FaUsers} trend="neutral" />
              <StatsCard title="Maintenance" value={maintenance} change="2 completed this week" icon={FaTools} trend="down" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Your Properties</h2>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <FaChartLine className="text-pink-400" />
                    <span>{occupancyRate}% occupied</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {properties.map((property) => (
                    <PropertyCard key={property.id} {...property} />
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <RecentActivity />
                <div className="rounded-lg p-6 shadow-md border border-gray-700 bg-white text-black">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <FaExclamationTriangle className="text-pink-400" />
                    Quick Actions
                  </h3>
                  <div className="space-y-3">
                    <button className="w-full text-left p-3 rounded-lg bg-gray-100 hover:bg-gray-200 border border-gray-300">
                      <div className="font-medium">Add New Property</div>
                      <div className="text-sm text-gray-500">List a new rental property</div>
                    </button>
                    <button className="w-full text-left p-3 rounded-lg bg-gray-100 hover:bg-gray-200 border border-gray-300">
                      <div className="font-medium">Collect Rent</div>
                      <div className="text-sm text-gray-500">Record rent payments</div>
                    </button>
                    <button className="w-full text-left p-3 rounded-lg bg-gray-100 hover:bg-gray-200 border border-gray-300">
                      <div className="font-medium">Schedule Maintenance</div>
                      <div className="text-sm text-gray-500">Book property maintenance</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
