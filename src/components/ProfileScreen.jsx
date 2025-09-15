import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { 
  User, 
  Calendar, 
  Heart, 
  Settings, 
  HelpCircle, 
  LogOut,
  Phone,
  Mail,
  MapPin,
  Award,
  Activity
} from "lucide-react";

const ProfileScreen = () => {
  const userProfile = {
    name: "Priya Sharma",
    email: "priya.sharma@email.com",
    phone: "+91 98765 43210",
    location: "Mumbai, Maharashtra",
    joinDate: "March 2024",
    membershipType: "Premium",
    dosha: "Vata-Pitta"
  };

  const healthStats = [
    { label: "Sessions Completed", value: "24", icon: Calendar },
    { label: "Wellness Score", value: "78", icon: Heart },
    { label: "Current Streak", value: "12 days", icon: Activity },
    { label: "Total Saved", value: "₹5,240", icon: Award }
  ];

  const menuItems = [
    { 
      id: 1, 
      title: "Health Records", 
      description: "View your therapy history",
      icon: Heart,
      badge: null
    },
    { 
      id: 2, 
      title: "Notifications", 
      description: "Manage your preferences",
      icon: Settings,
      badge: "3"
    },
    { 
      id: 3, 
      title: "Help & Support", 
      description: "Get help when you need it",
      icon: HelpCircle,
      badge: null
    },
    { 
      id: 4, 
      title: "Privacy Settings", 
      description: "Control your data",
      icon: Settings,
      badge: null
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-primary p-6 text-white">
        <div className="flex items-center">
          <Avatar className="w-16 h-16 mr-4 border-2 border-white/20">
            <AvatarImage src="/placeholder-avatar.jpg" />
            <AvatarFallback className="bg-white/20 text-white text-xl">
              {userProfile.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-xl font-bold">{userProfile.name}</h1>
            <p className="opacity-90 text-sm">Member since {userProfile.joinDate}</p>
            <Badge className="mt-1 bg-white/20 text-white border-0">
              {userProfile.membershipType}
            </Badge>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Personal Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="w-5 h-5 mr-2" />
              Personal Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-3 text-muted-foreground" />
              <span className="text-sm text-card-foreground">{userProfile.email}</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-3 text-muted-foreground" />
              <span className="text-sm text-card-foreground">{userProfile.phone}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-3 text-muted-foreground" />
              <span className="text-sm text-card-foreground">{userProfile.location}</span>
            </div>
            <Separator />
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Primary Dosha</span>
              <Badge variant="secondary">{userProfile.dosha}</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Health Statistics */}
        <Card>
          <CardHeader>
            <CardTitle>Health Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {healthStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <IconComponent className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <p className="text-2xl font-bold text-card-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Menu Items */}
        <Card>
          <CardContent className="p-0">
            {menuItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={item.id}>
                  <div className="flex items-center p-4 cursor-pointer hover:bg-muted/50 transition-colors">
                    <IconComponent className="w-5 h-5 mr-3 text-muted-foreground" />
                    <div className="flex-1">
                      <h3 className="font-medium text-card-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    {item.badge && (
                      <Badge variant="destructive" className="ml-2">
                        {item.badge}
                      </Badge>
                    )}
                  </div>
                  {index < menuItems.length - 1 && <Separator />}
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Logout Button */}
        <Button 
          variant="outline" 
          className="w-full text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>

        {/* App Version */}
        <div className="text-center">
          <p className="text-xs text-muted-foreground">AyurSutra v1.0.0</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;