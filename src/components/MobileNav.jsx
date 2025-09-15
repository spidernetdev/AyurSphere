import { Home, Calendar, Activity, MessageCircle, User, Stethoscope, BookOpen } from "lucide-react";

const MobileNav = ({ activeTab, onTabChange }) => {
  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "doctors", icon: Stethoscope, label: "Doctors" },
    { id: "blog", icon: BookOpen, label: "Blog" },
    { id: "vaidya", icon: MessageCircle, label: "Vaidya" },
    { id: "profile", icon: User, label: "Profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border px-4 py-2 z-50 md:hidden">
      <div className="flex justify-around items-center max-w-sm mx-auto">
        {navItems.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => onTabChange(id)}
            className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all duration-200 ${
              activeTab === id
                ? "text-primary bg-primary/10"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Icon className="w-5 h-5 mb-1" />
            <span className="text-xs font-medium">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default MobileNav;