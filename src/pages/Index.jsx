import { Button } from "@/components/ui/button";
import { Heart, Stethoscope, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-accent/20 flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-6">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-pediatric rounded-full shadow-pediatric mb-6">
            <Heart className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-primary mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Sunshine Pediatrics
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Comprehensive healthcare for your little ones, powered by love and expertise.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="warm" size="lg" asChild>
            <a href="/">Healthcare Professional Login</a>
          </Button>
          <Button variant="outline" size="lg">
            Schedule Appointment
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 rounded-lg bg-white/50 shadow-card">
            <Stethoscope className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-primary mb-2">Expert Care</h3>
            <p className="text-sm text-muted-foreground">Board-certified pediatricians dedicated to your child's health</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-white/50 shadow-card">
            <Heart className="w-8 h-8 text-secondary mx-auto mb-3" />
            <h3 className="font-semibold text-primary mb-2">Compassionate Service</h3>
            <p className="text-sm text-muted-foreground">Caring environment where children feel safe and comfortable</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-white/50 shadow-card">
            <Users className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-primary mb-2">Family-Centered</h3>
            <p className="text-sm text-muted-foreground">Supporting families through every stage of childhood development</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;