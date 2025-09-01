import {
  FaBuilding,
  FaShieldAlt,
  FaRocket,
  FaLifeRing,
  FaInfoCircle,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="glass-card border-0 border-t border-glass-border/30 mt-20 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                <FaBuilding className="w-5 h-5 text-pink-400" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                RentWise
              </span>
            </div>
            <p className="text-muted-foreground text-base leading-relaxed">
              Modern property management made simple and beautiful.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Product</h4>
            <div className="space-y-2 text-base text-muted-foreground">
              <div className="flex items-center gap-2">
                <FaRocket className="w-4 h-4 text-pink-400" />
                <span>Features</span>
              </div>
              <div className="flex items-center gap-2">
                <FaShieldAlt className="w-4 h-4 text-pink-400" />
                <span>Pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <FaInfoCircle className="w-4 h-4 text-pink-400" />
                <span>API</span>
              </div>
            </div>
          </div>

      
          <div>
            <h4 className="font-semibold mb-4 text-lg">Company</h4>
            <div className="space-y-2 text-base text-muted-foreground">
              <div>About</div>
              <div>Blog</div>
              <div>Careers</div>
            </div>
          </div>

        
          <div>
            <h4 className="font-semibold mb-4 text-lg">Support</h4>
            <div className="space-y-2 text-base text-muted-foreground">
              <div>Help Center</div>
              <div>Contact</div>
              <div>Status</div>
            </div>
          </div>
        </div>

        <div className="border-t border-glass-border/30 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 RentWise. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div>Privacy Policy</div>
              <div>Terms of Service</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
