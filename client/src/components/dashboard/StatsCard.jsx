import React from "react";

export default function StatsCard({ title, value, change, icon: Icon, trend = "neutral" }) {
  const getTrendColor = () => {
    switch (trend) {
      case "up":
        return "text-green-400";
      case "down":
        return "text-red-400";
      default:
        return "text-gray-400";
    }
  };

  return (
    <div className="rounded-lg shadow-md border border-gray-700 bg-white text-black hover:shadow-lg transition-shadow duration-200">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <p className="text-2xl font-bold">{value}</p>
            {change && <p className={`text-xs font-medium ${getTrendColor()}`}>{change}</p>}
          </div>
          <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
            <Icon className="w-6 h-6 text-pink-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
