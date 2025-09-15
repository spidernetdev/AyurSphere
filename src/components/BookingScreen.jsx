import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Star, ArrowLeft } from "lucide-react";

const BookingScreen = () => {
  const [selectedTherapy, setSelectedTherapy] = useState(null);
  const [confirmedTherapy, setConfirmedTherapy] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const therapies = [
    {
      id: 1,
      name: "Abhyanga Massage",
      duration: "60 mins",
      price: "₹2,500",
      description: "Full body therapeutic oil massage",
      rating: 4.8,
      category: "Massage Therapy"
    },
    {
      id: 2,
      name: "Shirodhara",
      duration: "45 mins", 
      price: "₹3,000",
      description: "Continuous oil pouring on forehead",
      rating: 4.9,
      category: "Head Therapy"
    },
    {
      id: 3,
      name: "Panchakarma Detox",
      duration: "90 mins",
      price: "₹5,000",
      description: "Complete detoxification therapy",
      rating: 4.7,
      category: "Detox"
    },
    {
      id: 4,
      name: "Ayurvedic Consultation",
      duration: "30 mins",
      price: "₹1,500",
      description: "Personalized health assessment",
      rating: 4.6,
      category: "Consultation"
    }
  ];

  const availableDates = [
    { date: "Today", day: "Mon", available: false },
    { date: "Tomorrow", day: "Tue", available: true },
    { date: "Dec 15", day: "Wed", available: true },
    { date: "Dec 16", day: "Thu", available: true },
    { date: "Dec 17", day: "Fri", available: true }
  ];

  const timeSlots = [
    { time: "9:00 AM", available: true },
    { time: "10:30 AM", available: false },
    { time: "12:00 PM", available: true },
    { time: "2:00 PM", available: true },
    { time: "3:30 PM", available: true },
    { time: "5:00 PM", available: false }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-card border-b border-border p-4">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" className="mr-3">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-semibold text-card-foreground">Book Therapy</h1>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Select Therapy */}
        {!selectedTherapy && (
          <div>
            <h2 className="text-lg font-semibold mb-4 text-foreground">Choose Your Therapy</h2>
            <div className="space-y-3">
              {therapies.map((therapy) => (
                <Card 
                  key={therapy.id}
                  className="cursor-pointer transition-all duration-200 hover:shadow-card"
                  onClick={() => setSelectedTherapy(therapy)}
                >
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-medium text-card-foreground">{therapy.name}</h3>
                        <Badge variant="secondary" className="text-xs mt-1">
                          {therapy.category}
                        </Badge>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-primary">{therapy.price}</p>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Star className="w-3 h-3 mr-1 fill-current text-yellow-500" />
                          {therapy.rating}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{therapy.description}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />
                      {therapy.duration}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Confirm Therapy Selection */}
        {selectedTherapy && !confirmedTherapy && (
          <div>
            <h2 className="text-lg font-semibold mb-4 text-foreground">Confirm Your Selection</h2>
            <Card className="ring-2 ring-primary bg-primary/5">
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground">{selectedTherapy.name}</h3>
                    <Badge variant="secondary" className="text-sm mt-2">
                      {selectedTherapy.category}
                    </Badge>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">{selectedTherapy.price}</p>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <Star className="w-4 h-4 mr-1 fill-current text-yellow-500" />
                      {selectedTherapy.rating} rating
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{selectedTherapy.description}</p>
                <div className="flex items-center text-muted-foreground mb-6">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>Duration: {selectedTherapy.duration}</span>
                </div>
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    onClick={() => setSelectedTherapy(null)}
                    className="flex-1"
                  >
                    Change Selection
                  </Button>
                  <Button 
                    onClick={() => setConfirmedTherapy(selectedTherapy)}
                    className="flex-1"
                  >
                    Confirm Therapy
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Select Date */}
        {confirmedTherapy && (
          <div>
            <h2 className="text-lg font-semibold mb-4 text-foreground">Select Date</h2>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {availableDates.map((dateOption, index) => (
                <Card 
                  key={index}
                  className={`min-w-20 cursor-pointer transition-all duration-200 ${
                    !dateOption.available 
                      ? 'opacity-50 cursor-not-allowed' 
                      : selectedDate === dateOption.date 
                        ? 'ring-2 ring-primary bg-primary/5'
                        : 'hover:shadow-card'
                  }`}
                  onClick={() => dateOption.available && setSelectedDate(dateOption.date)}
                >
                  <CardContent className="p-3 text-center">
                    <p className="text-xs text-muted-foreground">{dateOption.day}</p>
                    <p className="font-medium text-card-foreground text-sm">{dateOption.date}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Select Time */}
        {selectedDate && (
          <div>
            <h2 className="text-lg font-semibold mb-4 text-foreground">Select Time</h2>
            <div className="grid grid-cols-2 gap-3">
              {timeSlots.map((slot, index) => (
                <Button
                  key={index}
                  variant={selectedTime === slot.time ? "default" : "outline"}
                  className={`h-12 ${
                    !slot.available 
                      ? 'opacity-50 cursor-not-allowed' 
                      : ''
                  }`}
                  disabled={!slot.available}
                  onClick={() => slot.available && setSelectedTime(slot.time)}
                >
                  {slot.time}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Booking Summary */}
        {confirmedTherapy && selectedDate && selectedTime && (
          <Card className="bg-gradient-subtle border-0">
            <CardHeader>
              <CardTitle className="text-lg">Booking Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Therapy:</span>
                <span className="font-medium">{confirmedTherapy.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Date:</span>
                <span className="font-medium">{selectedDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Time:</span>
                <span className="font-medium">{selectedTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Duration:</span>
                <span className="font-medium">{confirmedTherapy.duration}</span>
              </div>
              <div className="flex justify-between border-t border-border pt-3">
                <span className="font-semibold">Total:</span>
                <span className="font-semibold text-primary">{confirmedTherapy.price}</span>
              </div>
              <Button className="w-full mt-4" size="lg">
                Confirm Booking
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default BookingScreen;