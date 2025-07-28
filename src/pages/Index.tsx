import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sprout,
  CloudRain,
  TrendingUp,
  Calculator,
  BarChart3,
  Users,
  ArrowRight,
  CheckCircle,
  Cloud,
} from "lucide-react";
import { Link } from "react-router-dom";



const Index = () => {
  const features = [
    {
      icon: Sprout,
      title: "Yield Tracking",
      description:
        "Record and monitor your crop yields across different seasons and fields",
    },
    {
      icon: CloudRain,
      title: "Weather Monitoring",
      description:
        "Get real-time weather data and forecasts to plan your farming activities",
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description:
        "Use data-driven insights to predict yields and optimize farming practices",
    },
    {
      icon: Calculator,
      title: "Cost Management",
      description:
        "Track farming expenses and calculate profitability for better decision making",
    },
    {
      icon: BarChart3,
      title: "Data Visualization",
      description:
        "View your farming data through intuitive charts and graphs",
    },
    {
      icon: Users,
      title: "Farmer Network",
      description:
        "Connect with other farmers and share knowledge and best practices",
    },
  ];

  const benefits = [
    "Increase crop yields by up to 25%",
    "Reduce farming costs through better planning",
    "Make data-driven decisions",
    "Track performance over time",
    "Access weather forecasts",
    "Simple mobile-friendly interface",
  ];

  return (
    <div className="min-h-screen">
      {/* background*/}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* style={{ backgroundImage: `url(${})` }} */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-gradient-to-r from-crop-green/80 to-crop-green/40"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Smart Farming
            <span className="block text-harvest-gold">Starts Here</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Empower your farming with data-driven insights. Track yields,
            monitor weather, and optimize your crops for maximum productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="farm"
              size="lg"
              className="text-lg px-8 py-4"
              asChild
            >
              <Link to="/dashboard">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 bg-white/10 text-white border-white/30 hover:bg-white/20"
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-earth">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive platform provides all the tools small-scale
              farmers need to track, analyze, and optimize their agricultural
              operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="shadow-soft hover:shadow-crop transition-spring hover:scale-105 group"
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <feature.icon className="h-12 w-12 text-crop-green group-hover:text-primary-glow transition-smooth" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Why Choose Our Platform?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of farmers who have transformed their
                agricultural practices with our data-driven approach.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-crop-green flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button variant="farm" size="lg" asChild>
                  <Link to="/dashboard">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="lg:pl-8">
              <Card className="shadow-medium">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-crop-green mb-2">
                      10,000+
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Farmers already using our platform
                    </p>

                    <div className="grid grid-cols-2 gap-6 text-center">
                      <div>
                        <div className="text-2xl font-bold text-harvest-gold">
                          25%
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Yield Increase
                        </p>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-sky-blue">
                          30%
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Cost Reduction
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="py-20 bg-gradient-earth">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Explore Our Platform
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Access all the tools you need to optimize your farming operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="shadow-soft hover:shadow-medium transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  Dashboard
                </CardTitle>
                <CardDescription>
                  View your farm's performance metrics and insights
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/dashboard">View Dashboard</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sprout className="h-5 w-5 text-crop-green" />
                  Record Yields
                </CardTitle>
                <CardDescription>
                  Log your harvest data and track crop performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/yield-form">Add Yield Data</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cloud className="h-5 w-5 text-sky-blue" />
                  Weather Tracking
                </CardTitle>
                <CardDescription>
                  Monitor weather conditions and forecasts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/weather">Check Weather</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-field text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Farming?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join thousands of farmers who are already using data to increase
            their yields and profitability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              className="text-lg px-8 py-4"
              asChild
            >
              <Link to="/dashboard">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 bg-white/10 text-white border-white/30 hover:bg-white/20"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
