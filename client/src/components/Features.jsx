import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AiOutlineBuild } from "react-icons/ai";
import {
  FaBuilding,
  FaUsers,
  FaCalendarAlt,
  FaShieldAlt,
  FaDollarSign,
  FaFileAlt,
  FaBell,
  FaMobileAlt,
  FaChartBar,
} from "react-icons/fa";

const features = [
  {
    icon: FaBuilding,
    title: "Portfolio Manager",
    description:
      "List, edit, and organize properties with rich metadata, photos, and lease status.",
    badge: "Core",
  },
  {
    icon: FaDollarSign,
    title: "Rent Flow",
    description:
      "Track payments, send reminders, and generate monthly statements automatically.",
    badge: "Finance",
  },
  {
    icon: FaCalendarAlt,
    title: "Due Date Calendar",
    description:
      "Visualize rent cycles, lease expirations, and maintenance schedules.",
    badge: "Planner",
  },
  {
    icon: FaUsers,
    title: "Tenant Dashboard",
    description:
      "Tenants can view leases, submit issues, and pay rent—all in one place.",
    badge: "Portal",
  },
  {
    icon: FaFileAlt,
    title: "Lease Vault",
    description:
      "Securely store and access lease agreements, inspection reports, and receipts.",
    badge: "Storage",
  },
  {
    icon: FaBell,
    title: "Smart Alerts",
    description:
      "Get notified instantly about payments, issues, and lease updates.",
    badge: "Realtime",
  },
  {
    icon: FaMobileAlt,
    title: "Mobile Ready",
    description:
      "Optimized for mobile with offline support and push notifications.",
    badge: "UX",
  },
  {
    icon: FaChartBar,
    title: "Insights Engine",
    description:
      "Analyze trends, occupancy rates, and income streams with visual dashboards.",
    badge: "Analytics",
  },
  {
    icon: FaShieldAlt,
    title: "Secure Access",
    description:
      "Role-based permissions and encrypted data to protect your rental business.",
    badge: "Security",
  },
];

const userTypes = [
  {
    title: "Landlords",
    description:
      "Tools to scale your rental business with clarity and control.",
    features: [
      "Multi-property dashboard",
      "Automated rent flow",
      "Maintenance tracking",
      "Document vault",
      "Financial analytics",
      "Role-based access",
    ],
    gradient: "gradient-primary",
  },
  {
    title: "Tenants",
    description:
      "A smooth, transparent rental experience from move-in to move-out.",
    features: [
      "Online rent payments",
      "Maintenance requests",
      "Lease access",
      "Notifications & reminders",
      "Payment history",
      "Support chat",
    ],
    gradient: "gradient-secondary",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <Badge
            variant="outline"
            className="mb-6 glass border-accent/30  text-pink-400 text-base md:text-lg"
          >
            <AiOutlineBuild /> Built for Modern Rentals
          </Badge>
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              run RentWise
            </span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From listings to lease management, RentWise gives landlords and
            tenants the tools they need— wrapped in a beautiful,
            glassmorphism-powered interface.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glass-card group hover:scale-[1.03] transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <feature.icon className="w-7 h-7 text-pink-400" />
                  </div>
                  <Badge variant="outline" className="text-sm">
                    {feature.badge}
                  </Badge>
                </div>
                <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {userTypes.map((type, index) => (
            <Card
              key={index}
              className="glass-card p-8 hover:scale-[1.03] transition-all duration-300"
            >
              <div
                className={`w-16 h-16 ${type.gradient} rounded-2xl flex items-center justify-center mb-6`}
              >
                <FaUsers className="w-8 h-8 text-pink-400" />
              </div>

              <h3 className="text-3xl font-bold mb-3">{type.title}</h3>
              <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
                {type.description}
              </p>

              <div className="space-y-4">
                {type.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2.5 h-2.5 gradient-accent rounded-full" />
                    <span className="text-base">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
