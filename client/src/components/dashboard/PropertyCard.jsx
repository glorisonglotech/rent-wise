import React from "react";
import {
  FaMapMarkerAlt,
  FaUser,
  FaDollarSign,
  FaCalendarAlt,
} from "react-icons/fa";

export default function PropertyCard({
  name,
  address,
  tenant,
  rent,
  status,
  leaseEnd,
  image,
}) {
  const getStatusBadge = () => {
    const base = "px-2 py-1 text-xs font-medium rounded border";
    switch (status) {
      case "occupied":
        return (
          <span className={`${base} bg-green-200 text-green-800 border-green-300`}>
            Occupied
          </span>
        );
      case "vacant":
        return (
          <span className={`${base} bg-yellow-200 text-yellow-800 border-yellow-300`}>
            Vacant
          </span>
        );
      case "maintenance":
        return (
          <span className={`${base} bg-red-200 text-red-800 border-red-300`}>
            Maintenance
          </span>
        );
      default:
        return (
          <span className={`${base} bg-muted text-muted-foreground border-border`}>
            Unknown
          </span>
        );
    }
  };

  return (
    <div className="rounded-xl overflow-hidden shadow-lg border border-border bg-card/80 backdrop-blur-md text-foreground hover:shadow-xl transition-transform duration-200 hover:scale-[1.02]">
      {/* Image Header */}
      <div className="relative h-48 bg-muted flex items-center justify-center">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <img
            src="https://th.bing.com/th/id/R.25930d6d4f0e9251b1007d2e29683ced?rik=%2bCDKMmdVOFHsFQ&riu=http%3a%2f%2fwww.propertyinvestmentnews.com%2fwp-content%2fuploads%2f2016%2f03%2fA11-1068x615.jpg&ehk=a6WstbQGft94wifpqwjQl9IkQwfSOO89%2fEphOGAcgCg%3d&risl=&pid=ImgRaw&r=0"
            alt="Default property"
            className="w-full h-full object-cover opacity-40"
          />
        )}
        <div className="absolute top-3 right-3">{getStatusBadge()}</div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
            <FaMapMarkerAlt className="text-pink-400" />
            <span>{address}</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm">
            <FaDollarSign className="text-pink-400" />
            <span className="font-medium">${rent.toLocaleString()}/month</span>
          </div>

          {tenant && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <FaUser className="text-pink-400" />
              <span>{tenant}</span>
            </div>
          )}

          {leaseEnd && status === "occupied" && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <FaCalendarAlt className="text-pink-400" />
              <span>Lease ends {leaseEnd}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
