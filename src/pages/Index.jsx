import { useState } from "react";
import HomeScreen from "@/components/HomeScreen";
import BookingScreen from "@/components/BookingScreen";
import TrackingScreen from "@/components/TrackingScreen";
import VaidyaScreen from "@/components/VaidyaScreen";
import ProfileScreen from "@/components/ProfileScreen";
import DoctorsScreen from "@/components/DoctorsScreen";
import BlogScreen from "@/components/BlogScreen";
import MobileNav from "@/components/MobileNav";
import Header from "@/components/Header";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");

  const renderScreen = () => {
    switch (activeTab) {
      case "home":
        return <HomeScreen onNavigate={setActiveTab} />;
      case "doctors":
        return <DoctorsScreen onNavigate={setActiveTab} />;
      case "blog":
        return <BlogScreen onNavigate={setActiveTab} />;
      case "booking":
        return <BookingScreen />;
      case "tracking":
        return <TrackingScreen />;
      case "vaidya":
        return <VaidyaScreen />;
      case "profile":
        return <ProfileScreen />;
      default:
        return <HomeScreen onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="relative">
        {renderScreen()}
      </main>
      <MobileNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;