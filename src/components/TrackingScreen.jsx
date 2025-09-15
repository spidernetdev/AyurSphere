import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Heart, 
  Activity, 
  Zap, 
  Trophy, 
  Calendar,
  Clock,
  Star
} from "lucide-react";

const TrackingScreen = () => {
  const wellnessScore = 78;
  const currentStreak = 12;
  
  const metrics = [
    { 
      name: "Energy Level", 
      value: 85, 
      icon: Zap, 
      color: "text-yellow-500",
      trend: "+5%" 
    },
    { 
      name: "Sleep Quality", 
      value: 72, 
      icon: Heart, 
      color: "text-blue-500",
      trend: "+2%" 
    },
    { 
      name: "Stress Level", 
      value: 35, 
      icon: Activity, 
      color: "text-green-500",
      trend: "-8%" 
    }
  ];

  const recentSessions = [
    {
      id: 1,
      therapy: "Abhyanga Massage",
      date: "Dec 12",
      status: "completed",
      rating: 5,
      notes: "Felt very relaxed, improved sleep"
    },
    {
      id: 2,
      therapy: "Shirodhara",
      date: "Dec 10",
      status: "completed", 
      rating: 4,
      notes: "Good session, some stress relief"
    },
    {
      id: 3,
      therapy: "Consultation",
      date: "Dec 8",
      status: "completed",
      rating: 5,
      notes: "Excellent guidance on diet"
    }
  ];

  const achievements = [
    { id: 1, title: "7-Day Streak", earned: true, icon: "🔥" },
    { id: 2, title: "First Session", earned: true, icon: "🌟" },
    { id: 3, title: "Wellness Warrior", earned: true, icon: "💪" },
    { id: 4, title: "30-Day Challenge", earned: false, icon: "🏆" }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-primary p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Wellness Journey</h1>
        <p className="opacity-90">Track your progress towards better health</p>
      </div>

      <div className="p-4 space-y-6">
        {/* Wellness Score */}
        <Card className="bg-gradient-healing border-0 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold text-lg">Overall Wellness Score</h3>
                <p className="opacity-90 text-sm">Based on your recent activities</p>
              </div>
              <div className="text-3xl font-bold">{wellnessScore}</div>
            </div>
            <Progress value={wellnessScore} className="h-2 bg-white/20" />
          </CardContent>
        </Card>

        {/* Current Streak */}
        <Card>
          <CardContent className="p-4 flex items-center">
            <div className="bg-gradient-wellness p-3 rounded-full mr-4">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-card-foreground">Current Streak</h3>
              <p className="text-sm text-muted-foreground">Keep the momentum going!</p>
            </div>
            <div className="text-2xl font-bold text-primary">{currentStreak}</div>
          </CardContent>
        </Card>

        {/* Health Metrics */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-foreground">Health Metrics</h2>
          <div className="space-y-3">
            {metrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <IconComponent className={`w-5 h-5 mr-3 ${metric.color}`} />
                        <span className="font-medium text-card-foreground">{metric.name}</span>
                      </div>
                      <div className="flex items-center">
                        <TrendingUp className="w-4 h-4 mr-1 text-green-500" />
                        <span className="text-sm text-green-500">{metric.trend}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <Progress value={metric.value} className="flex-1 mr-3" />
                      <span className="text-sm font-medium text-muted-foreground">{metric.value}%</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Recent Sessions */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-foreground">Recent Sessions</h2>
          <div className="space-y-3">
            {recentSessions.map((session) => (
              <Card key={session.id}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-card-foreground">{session.therapy}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {session.status}
                    </Badge>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="mr-4">{session.date}</span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-3 h-3 ${i < session.rating ? 'fill-current text-yellow-500' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{session.notes}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-foreground">Achievements</h2>
          <div className="grid grid-cols-2 gap-3">
            {achievements.map((achievement) => (
              <Card 
                key={achievement.id}
                className={achievement.earned ? 'bg-gradient-subtle' : 'opacity-50'}
              >
                <CardContent className="p-4 text-center">
                  <div className="text-2xl mb-2">{achievement.icon}</div>
                  <h3 className="font-medium text-sm text-card-foreground">{achievement.title}</h3>
                  {!achievement.earned && (
                    <p className="text-xs text-muted-foreground mt-1">In Progress</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackingScreen;