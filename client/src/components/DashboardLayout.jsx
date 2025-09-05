import React, { useState } from "react";
import {
  FaBars,
  FaHome,
  FaChartLine,
  FaUser,
  FaDollarSign,
  FaUsers,
  FaChartPie,
} from "react-icons/fa";

export  function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      {/* Sidebar */}
      <aside
        className={`bg-white border-r shadow-sm transition-all duration-300 ${
          sidebarOpen ? "w-64" : "w-16"
        } flex flex-col p-4`}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className={`text-xl font-bold ${sidebarOpen ? "block" : "hidden"}`}>RentWise</h2>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-600 hover:text-gray-900"
          >
            <FaBars />
          </button>
        </div>
        <nav className="flex flex-col gap-4 text-sm">
          <SidebarLink icon={<FaHome />} label="Overview" open={sidebarOpen} />
          <SidebarLink icon={<FaChartLine />} label="Analytics" open={sidebarOpen} />
          <SidebarLink icon={<FaUser />} label="Users" open={sidebarOpen} />
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">SaaS Dashboard</h1>
          <div className="text-sm text-gray-500">Welcome back, Glorison</div>
        </header>

        {/* Content */}
        <main className="p-6 space-y-6">
          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <KpiCard icon={<FaDollarSign />} label="Total Revenue" value="$200,456.87" change="+2.5%" />
            <KpiCard icon={<FaUsers />} label="Active Users" value="9,528" change="+9.5%" />
            <KpiCard icon={<FaChartPie />} label="Customer LTV" value="$849.54" change="-1.6%" />
            <KpiCard icon={<FaChartLine />} label="CAC" value="$528.00" change="+3.5%" />
          </div>

          {/* Chart Section */}
          <section className="bg-white border rounded-lg p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-4">User Growth</h2>
            <div className="h-48 bg-gray-100 flex items-center justify-center text-gray-400">
              [Chart goes here]
            </div>
          </section>

          {/* Data Table */}
          <section className="bg-white border rounded-lg p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Recent Invoices</h2>
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b text-gray-500">
                  <th className="py-2">Serial No</th>
                  <th className="py-2">Close Date</th>
                  <th className="py-2">User</th>
                  <th className="py-2">Amount</th>
                  <th className="py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                <InvoiceRow id="#DF429" date="Apr 28, 2016" user="Jenny Wilson" amount="$473.85" status="Complete" />
                <InvoiceRow id="#HTY274" date="Oct 30, 2017" user="Wade Warren" amount="$293.01" status="Complete" />
                <InvoiceRow id="#LKE600" date="May 29, 2017" user="Darlene Robertson" amount="$782.01" status="Pending" />
                <InvoiceRow id="#HRP447" date="May 20, 2015" user="Arlene McCoy" amount="$202.87" status="Cancelled" />
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </div>
  );
}

// 🧩 Sidebar Link
function SidebarLink({ icon, label, open }) {
  return (
    <a href="#" className="flex items-center gap-3 hover:text-blue-600">
      <div className="text-lg">{icon}</div>
      {open && <span>{label}</span>}
    </a>
  );
}

// 🧩 KPI Card
function KpiCard({ icon, label, value, change }) {
  const isPositive = change.startsWith("+");
  return (
    <div className="bg-white border rounded-lg p-4 shadow-sm flex items-center gap-4">
      <div className="text-2xl text-blue-500">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <h3 className="text-lg font-bold text-gray-800">{value}</h3>
        <span className={`text-xs ${isPositive ? "text-green-500" : "text-red-500"}`}>
          {change}
        </span>
      </div>
    </div>
  );
}

// 🧩 Invoice Row
function InvoiceRow({ id, date, user, amount, status }) {
  const statusColor = {
    Complete: "text-green-600",
    Pending: "text-yellow-600",
    Cancelled: "text-red-600",
  }[status] || "text-gray-600";

  return (
    <tr className="border-b">
      <td className="py-2">{id}</td>
      <td className="py-2">{date}</td>
      <td className="py-2">{user}</td>
      <td className="py-2">{amount}</td>
      <td className={`py-2 font-medium ${statusColor}`}>{status}</td>
    </tr>
  );
}
