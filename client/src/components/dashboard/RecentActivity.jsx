import React from "react";
import {
  FaClock,
  FaDollarSign,
  FaUser,
  FaTools,
  FaFileAlt,
} from "react-icons/fa";

const activities = [
  {
    id: "1",
    type: "payment",
    title: "Rent Payment Received",
    description: "Sarah Johnson - Maple Apartments #4B",
    timestamp: "2 hours ago",
    status: "completed",
  },
  {
    id: "2",
    type: "maintenance",
    title: "Maintenance Request",
    description: "Leaking faucet - Oak Street Condo #12",
    timestamp: "4 hours ago",
    status: "pending",
  },
  {
    id: "3",
    type: "lease",
    title: "Lease Renewal Signed",
    description: "Mike Rodriguez - Downtown Loft #301",
    timestamp: "1 day ago",
    status: "completed",
  },
  {
    id: "4",
    type: "inspection",
    title: "Property Inspection",
    description: "Quarterly inspection - Pine Villa #8",
    timestamp: "2 days ago",
    status: "completed",
  },
  {
    id: "5",
    type: "payment",
    title: "Late Payment Notice",
    description: "Alex Chen - Garden View #22",
    timestamp: "3 days ago",
    status: "overdue",
  },
];

export default function RecentActivity() {
  const getActivityIcon = (type) => {
    switch (type) {
      case "payment":
        return <FaDollarSign className="text-pink-400 w-4 h-4" />;
      case "maintenance":
        return <FaTools className="text-pink-400 w-4 h-4" />;
      case "lease":
        return <FaFileAlt className="text-pink-400 w-4 h-4" />;
      case "inspection":
        return <FaUser className="text-pink-400 w-4 h-4" />;
      default:
        return <FaClock className="text-pink-400 w-4 h-4" />;
    }
  };

  const getStatusBadge = (status) => {
    const base = "px-2 py-0.5 text-xs font-medium rounded border";
    switch (status) {
      case "completed":
        return <span className={`${base} bg-green-100 text-green-700 border-green-300`}>Completed</span>;
      case "pending":
        return <span className={`${base} bg-yellow-100 text-yellow-700 border-yellow-300`}>Pending</span>;
      case "overdue":
        return <span className={`${base} bg-red-100 text-red-700 border-red-300`}>Overdue</span>;
      default:
        return null;
    }
  };

  return (
    <div className="rounded-lg shadow-md border border-gray-700 bg-white text-black">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <FaClock className="text-pink-400" />
          Recent Activity
        </h2>
      </div>
      <div className="p-6 space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
              {getActivityIcon(activity.type)}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 mb-1">
                <h4 className="font-medium text-sm truncate">{activity.title}</h4>
                {activity.status && getStatusBadge(activity.status)}
              </div>
              <p className="text-sm text-gray-500 truncate">{activity.description}</p>
              <p className="text-xs text-gray-400 mt-1">{activity.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
