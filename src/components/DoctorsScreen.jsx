import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Search, Star, MapPin, Languages, Clock, ChevronLeft } from "lucide-react";
import { Input } from "@/components/ui/input";

const DoctorsScreen = ({ onNavigate }) => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialization, setSelectedSpecialization] = useState("all");

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch("/api/doctors.json");
        const data = await response.json();
        setDoctors(data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      } finally {
        setTimeout(() => setLoading(false), 1000); // Simulate loading
      }
    };

    fetchDoctors();
  }, []);

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialization = selectedSpecialization === "all" || 
                                 doctor.specialization.toLowerCase().includes(selectedSpecialization.toLowerCase());
    return matchesSearch && matchesSpecialization;
  });

  const specializations = [
    "all", "general physician", "panchakarma", "women's health", 
    "joint pain", "skin care", "cardiac"
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-healing-light to-background">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-6">
            <Skeleton className="h-10 w-10 rounded-full" />
            <Skeleton className="h-8 w-48" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="text-center">
                  <Skeleton className="h-24 w-24 rounded-full mx-auto mb-4" />
                  <Skeleton className="h-6 w-32 mx-auto mb-2" />
                  <Skeleton className="h-4 w-24 mx-auto" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Skeleton className="h-10 w-full" />
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-healing-light to-background">
      {/* Header */}
      <div className="bg-primary/5 backdrop-blur-sm border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => onNavigate('home')}
                className="md:hidden"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <h1 className="text-2xl font-bold text-foreground">Find Doctors</h1>
            </div>
            <Badge variant="secondary" className="hidden md:inline-flex">
              {filteredDoctors.length} Available
            </Badge>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search doctors by name or specialization..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            {specializations.map((spec) => (
              <Button
                key={spec}
                variant={selectedSpecialization === spec ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedSpecialization(spec)}
                className="capitalize"
              >
                {spec === "all" ? "All Doctors" : spec}
              </Button>
            ))}
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doctor) => (
            <Card key={doctor.id} className="overflow-hidden hover-scale group border-healing/20 hover:border-primary/30 transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="relative mx-auto mb-4">
                  <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-all duration-300">
                    <img 
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-primary rounded-full p-1">
                    <div className="flex items-center gap-1 px-2 py-1 text-xs text-primary-foreground font-medium">
                      <Star className="h-3 w-3 fill-current" />
                      {doctor.rating}
                    </div>
                  </div>
                </div>
                <CardTitle className="text-lg font-semibold">{doctor.name}</CardTitle>
                <CardDescription className="text-primary font-medium">{doctor.specialization}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{doctor.experience} Experience</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{doctor.location}</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Languages className="h-4 w-4" />
                  <span>{doctor.languages.join(", ")}</span>
                </div>

                <p className="text-sm text-muted-foreground line-clamp-2">
                  {doctor.about}
                </p>

                <div className="flex items-center justify-between pt-2">
                  <div className="text-right">
                    <span className="text-sm text-muted-foreground">Consultation</span>
                    <div className="text-lg font-bold text-primary">{doctor.fees}</div>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="pt-0">
                <Button className="w-full group-hover:bg-primary/90 transition-colors">
                  Book Consultation
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted-foreground mb-4">
              <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg">No doctors found</p>
              <p className="text-sm">Try adjusting your search criteria</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorsScreen;