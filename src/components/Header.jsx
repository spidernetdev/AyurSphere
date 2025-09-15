import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Home, Users, BookOpen, Calendar, User, Stethoscope } from "lucide-react";

const Header = ({ activeTab, onTabChange }) => {
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "doctors", label: "Find Doctors", icon: Stethoscope },
    { id: "blog", label: "Blog", icon: BookOpen },
    { id: "booking", label: "Book Now", icon: Calendar },
    { id: "tracking", label: "Track Progress", icon: Users },
    { id: "vaidya", label: "AI Vaidya", icon: User, badge: "AI" },
  ];

  return (
    <header className="hidden md:block bg-background/95 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-healing rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">A</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">AyurSutra</h1>
              <p className="text-xs text-muted-foreground">Digital Ayurveda Platform</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              
              return (
                <Button
                  key={item.id}
                  variant={isActive ? "default" : "ghost"}
                  size="sm"
                  onClick={() => onTabChange(item.id)}
                  className={`relative gap-2 transition-all duration-200 ${
                    isActive 
                      ? "bg-primary text-primary-foreground shadow-md" 
                      : "hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden lg:inline">{item.label}</span>
                  {item.badge && (
                    <Badge 
                      variant="secondary" 
                      className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs bg-healing text-healing-foreground"
                    >
                      {item.badge}
                    </Badge>
                  )}
                </Button>
              );
            })}
          </nav>

          {/* User Profile */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => onTabChange("profile")}
            className={`gap-2 ${
              activeTab === "profile" 
                ? "bg-primary text-primary-foreground border-primary" 
                : "hover:bg-primary/10 hover:text-primary hover:border-primary/30"
            }`}
          >
            <User className="h-4 w-4" />
            <span className="hidden xl:inline">Profile</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;