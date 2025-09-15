import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Star, Leaf, Sun, Moon, Stethoscope, BookOpen, Bot } from "lucide-react";
import ayurvedaHero from "@/assets/ayurveda-hero.jpg";

const HomeScreen = ({ onNavigate }) => {
  const upcomingAppointments = [
    {
      id: 1,
      therapy: "Abhyanga Massage",
      date: "Today",
      time: "2:00 PM",
      therapist: "Dr. Priya Sharma",
      status: "confirmed"
    },
    {
      id: 2,
      therapy: "Shirodhara",
      date: "Tomorrow",
      time: "10:00 AM",
      therapist: "Dr. Raj Patel",
      status: "pending"
    }
  ];

  const quickActions = [
    { 
      id: "doctors", 
      title: "Find Doctors", 
      description: "Connect with expert Ayurvedic physicians",
      icon: Stethoscope,
      color: "bg-gradient-primary"
    },
    { 
      id: "blog", 
      title: "Ayurveda Blog", 
      description: "Learn about herbs and wellness",
      icon: BookOpen,
      color: "bg-gradient-healing"
    },
    { 
      id: "booking", 
      title: "Book Therapy", 
      description: "Schedule your Panchakarma sessions",
      icon: Calendar,
      color: "bg-gradient-wellness"
    },
    { 
      id: "vaidya", 
      title: "AI Vaidya", 
      description: "Get instant Ayurvedic guidance",
      icon: Bot,
      color: "bg-gradient-primary"
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      {/* Hero Section */}
      <div 
        className="relative h-64 bg-cover bg-center flex items-end"
        style={{ backgroundImage: `url(${ayurvedaHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="relative p-6 text-white">
          <h1 className="text-2xl font-bold mb-2">Welcome to AyurSutra</h1>
          <p className="text-sm opacity-90">Your journey to holistic wellness starts here</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="p-4 md:p-6 lg:p-8">
        <h2 className="text-lg font-semibold mb-4 text-foreground">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
          {quickActions.map((action) => {
            const IconComponent = action.icon;
            return (
              <Card 
                key={action.id}
                className="cursor-pointer hover:shadow-card transition-all duration-200 border-0 bg-gradient-subtle"
                onClick={() => onNavigate(action.id)}
              >
                <CardContent className="flex items-center p-4">
                  <div className={`p-3 rounded-full ${action.color} mr-4`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-card-foreground">{action.title}</h3>
                    <p className="text-sm text-muted-foreground">{action.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Upcoming Appointments */}
        <h2 className="text-lg font-semibold mb-4 text-foreground">Upcoming Sessions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {upcomingAppointments.map((appointment) => (
            <Card key={appointment.id} className="border border-border bg-card">
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-card-foreground">{appointment.therapy}</h3>
                  <Badge 
                    variant={appointment.status === 'confirmed' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {appointment.status}
                  </Badge>
                </div>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span className="mr-4">{appointment.date}</span>
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{appointment.time}</span>
                </div>
                <p className="text-sm text-muted-foreground">with {appointment.therapist}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Daily Wellness Tips */}
        <Card className="mt-6 bg-gradient-healing border-0">
          <CardHeader className="pb-3">
            <CardTitle className="text-white flex items-center">
              <Sun className="w-5 h-5 mr-2" />
              Today's Wellness Tip
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-white/90 text-sm">
              Start your day with warm water and honey to boost metabolism and aid digestion. 
              This ancient Ayurvedic practice helps balance your doshas naturally.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HomeScreen;