import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FaArrowRight,
  FaCheck,
  FaStar,
} from "react-icons/fa";
import { GiHappySkull } from "react-icons/gi";

export const CTASection = () => {
  return (
    <section className="py-24 px-6 bg-background text-foreground">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-20">
          <Card className="glass-card p-12 max-w-4xl mx-auto border-2 border-primary/20 hover:border-primary/40 transition-all duration-500">
            <Badge variant="outline" className="mb-6 glass border-success/30 text-success text-base">
              <GiHappySkull /> Limited Time Offer
            </Badge>

            <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              Ready to transform your
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {" "}rental business?
              </span>
            </h2>

            <p className="text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of landlords and tenants who've already discovered
              the power of beautiful, intelligent property management.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button variant="hero" size="xl" className="group">
                Start Your Free Trial
                <FaArrowRight className="w-5 h-5 text-pink-400 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="glass" size="xl">
                Schedule Demo
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-6 text-base text-muted-foreground">
              {[
                "14-day free trial",
                "No credit card required",
                "Cancel anytime",
              ].map((text, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <FaCheck className="w-4 h-4 text-pink-400" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Starter",
              price: "$29",
              features: [
                "Up to 5 properties",
                "Basic reporting",
                "Email support",
                "Mobile app access",
              ],
              button: <Button variant="outline" className="w-full">Get Started</Button>,
            },
            {
              title: "Professional",
              price: "$79",
              features: [
                "Up to 25 properties",
                "Advanced analytics",
                "Priority support",
                "API access",
                "Custom branding",
              ],
              badge: "Most Popular",
              button: <Button variant="hero" className="w-full">Get Started</Button>,
            },
            {
              title: "Enterprise",
              price: "$199",
              features: [
                "Unlimited properties",
                "White-label solution",
                "Dedicated support",
                "Custom integrations",
                "SLA guarantee",
              ],
              button: <Button variant="accent" className="w-full">Contact Sales</Button>,
            },
          ].map((plan, index) => (
            <Card
              key={index}
              className={`glass-card p-8 text-center ${plan.badge ? "border-2 border-primary/40 relative" : ""}`}
            >
              {plan.badge && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 gradient-primary text-primary-foreground">
                  {plan.badge}
                </Badge>
              )}
              <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <div className="space-y-4 mb-8 text-left">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <FaCheck className="w-4 h-4 text-pink-400" />
                    <span className="text-base">{feature}</span>
                  </div>
                ))}
              </div>
              {plan.button}
            </Card>
          ))}
        </div>

        
        <div className="mt-20">
          <Card className="glass-card p-8 max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="w-5 h-5 text-pink-400 fill-current" />
              ))}
            </div>

            <blockquote className="text-xl text-muted-foreground mb-6 italic leading-relaxed">
              "RentWise transformed how we manage our 50+ property portfolio. The interface is
              stunning and the automation saves us 20+ hours per week. Our tenants love it too!"
            </blockquote>

            <div>
              <div className="font-semibold">Sarah Chebet</div>
              <div className="text-sm text-muted-foreground">Property Management Company CEO</div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
