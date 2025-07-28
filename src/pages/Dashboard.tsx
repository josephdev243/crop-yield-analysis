import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
{/*import { Badge } from '@/components/ui/badge';*/}
{/*import { Progress } from '@/components/ui/progress';*/}
import { Sprout, Droplets, DollarSign, TrendingUp, Sun, Cloud } from 'lucide-react';

const Dashboard = () => {
  const currentWeather = {
    temperature: "24°C",
    humidity: "65%",
    condition: "Partly Cloudy",
    rainfall: "12mm this week"
  };

  const yieldData = [
    { crop: "Maize", expected: 120, actual: 98, status: "Good" },
    { crop: "Beans", expected: 80, actual: 85, status: "Excellent" },
    { crop: "Tomatoes", expected: 200, actual: 180, status: "Fair" },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Excellent': return 'bg-crop-green text-white';
      case 'Good': return 'bg-harvest-gold text-white';
      case 'Fair': return 'bg-secondary text-secondary-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-field">
      <div className="container mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Farm Dashboard</h1>
          <p className="text-muted-foreground">Track your yields, weather, and farm performance</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Yield</CardTitle>
              <Sprout className="h-4 w-4 text-crop-green" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-crop-green">363 kg</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Weather</CardTitle>
              <Sun className="h-4 w-4 text-harvest-gold" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-harvest-gold">{currentWeather.temperature}</div>
              <p className="text-xs text-muted-foreground">{currentWeather.condition}</p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">$2,450</div>
              <p className="text-xs text-muted-foreground">This season</p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Efficiency</CardTitle>
              <TrendingUp className="h-4 w-4 text-crop-green" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-crop-green">87%</div>
              <p className="text-xs text-muted-foreground">Above target</p>
            </CardContent>
          </Card>
        </div>

        {/* Yield Tracking */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sprout className="h-5 w-5 text-crop-green" />
                Crop Yield Overview
              </CardTitle>
              <CardDescription>Current season performance vs expected</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {yieldData.map((crop, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{crop.crop}</span>
                    {/*<Badge className={getStatusColor(crop.status)}>
                      {crop.status}
                    </Badge>*/}
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Actual: {crop.actual}kg</span>
                    <span>Expected: {crop.expected}kg</span>
                  </div>
                 {/*<Progress 
                    value={(crop.actual / crop.expected) * 100} 
                    className="h-2"
                  />*/}
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cloud className="h-5 w-5 text-sky-blue" />
                Weather Conditions
              </CardTitle>
              <CardDescription>Current conditions affecting your crops</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Temperature</p>
                  <p className="text-2xl font-bold text-harvest-gold">{currentWeather.temperature}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Humidity</p>
                  <p className="text-2xl font-bold text-sky-blue">{currentWeather.humidity}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Rainfall this week</span>
                  <span className="font-medium">{currentWeather.rainfall}</span>
                </div>
               {/* <Progress value={60} className="h-2" />*/}
              </div>

              <div className="p-3 bg-muted rounded-lg">
                <p className="text-sm">
                  <strong>Recommendation:</strong> Perfect conditions for maize growth. 
                  Consider light irrigation for tomatoes in the afternoon.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;