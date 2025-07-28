import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Sun, Sprout,Cloud, CloudRain, Droplets, Wind, Thermometer, Eye, Calendar } from 'lucide-react';

const WeatherPage = () => {
  const currentWeather = {
    temperature: 24,
    condition: "Partly Cloudy",
    humidity: 65,
    windSpeed: 8,
    visibility: 10,
    rainfall: 0,
    uvIndex: 6
  };

  const weeklyForecast = [
    { day: "Mon", high: 26, low: 18, condition: "Sunny", icon: Sun, rainfall: 0 },
    { day: "Tue", high: 24, low: 17, condition: "Cloudy", icon: Cloud, rainfall: 0 },
    { day: "Wed", high: 22, low: 16, condition: "Rainy", icon: CloudRain, rainfall: 8 },
    { day: "Thu", high: 23, low: 15, condition: "Rainy", icon: CloudRain, rainfall: 12 },
    { day: "Fri", high: 25, low: 17, condition: "Partly Cloudy", icon: Cloud, rainfall: 2 },
    { day: "Sat", high: 27, low: 19, condition: "Sunny", icon: Sun, rainfall: 0 },
    { day: "Sun", high: 28, low: 20, condition: "Sunny", icon: Sun, rainfall: 0 }
  ];
   const monthlyData = [
    { month: "Jan", avgTemp: 22, rainfall: 45 },
    { month: "Feb", avgTemp: 24, rainfall: 38 },
    { month: "Mar", avgTemp: 26, rainfall: 52 },
    { month: "Apr", avgTemp: 25, rainfall: 78 },
    { month: "May", avgTemp: 23, rainfall: 95 },
    { month: "Jun", avgTemp: 21, rainfall: 120 }
  ];

  const getConditionColor = (condition) => {
    switch (condition) {
      case 'Sunny': return 'text-harvest-gold';
      case 'Cloudy': case 'Partly Cloudy': return 'text-muted-foreground';
      case 'Rainy': return 'text-sky-blue';
      default: return 'text-foreground';
    }
  };

  const getRainfallStatus = (rainfall) => {
    if (rainfall === 0) return { status: 'Dry', color: 'bg-harvest-gold' };
    if (rainfall < 5) return { status: 'Light', color: 'bg-sky-blue' };
    if (rainfall < 15) return { status: 'Moderate', color: 'bg-primary' };
    return { status: 'Heavy', color: 'bg-destructive' };
  };

  return (
    <div className="min-h-screen bg-gradient-sky">
      <div className="container mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2 flex items-center gap-3">
            <Sun className="h-8 w-8 text-harvest-gold" />
            Weather Tracking
          </h1>
          <p className="text-muted-foreground">
            Monitor weather conditions to optimize your farming decisions
          </p>
        </div>

        {/* Current Weather */}
        <Card className="shadow-soft mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Thermometer className="h-5 w-5 text-harvest-gold" />
              Current Conditions
            </CardTitle>
            <CardDescription>Real-time weather in your area</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-harvest-gold mb-2">
                  {currentWeather.temperature}°C
                </div>
                <p className="text-muted-foreground">{currentWeather.condition}</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Droplets className="h-4 w-4 text-sky-blue" />
                  <span className="text-sm">Humidity: {currentWeather.humidity}%</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wind className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Wind: {currentWeather.windSpeed} km/h</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Visibility: {currentWeather.visibility} km</span>
                </div>
                <div className="flex items-center gap-2">
                  <CloudRain className="h-4 w-4 text-sky-blue" />
                  <span className="text-sm">Rainfall: {currentWeather.rainfall} mm</span>
                </div>
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">
                  UV {currentWeather.uvIndex}
                </div>
                <Badge className="bg-primary/10 text-primary">Moderate</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="weekly" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="weekly" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              7-Day Forecast
            </TabsTrigger>
            <TabsTrigger value="monthly">Monthly Overview</TabsTrigger>
          </TabsList>

          <TabsContent value="weekly">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Weekly Forecast</CardTitle>
                <CardDescription>Plan your farming activities for the week ahead</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
                  {weeklyForecast.map((day, index) => {
                    const IconComponent = day.icon;
                    const rainfallInfo = getRainfallStatus(day.rainfall);
                    
                    return (
                      <div key={index} className="text-center space-y-3 p-4 rounded-lg bg-card border">
                        <div className="font-medium text-foreground">{day.day}</div>
                        <IconComponent className={`h-8 w-8 mx-auto ${getConditionColor(day.condition)}`} />
                        <div className="space-y-1">
                          <div className="font-bold text-foreground">{day.high}°</div>
                          <div className="text-sm text-muted-foreground">{day.low}°</div>
                        </div>
                        <div className="space-y-1">
                          <Badge className={`${rainfallInfo.color} text-white text-xs`}>
                            {day.rainfall}mm
                          </Badge>
                          <div className="text-xs text-muted-foreground">{rainfallInfo.status}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="monthly">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>Temperature Trends</CardTitle>
                  <CardDescription>Average monthly temperatures</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {monthlyData.map((month, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted">
                        <span className="font-medium">{month.month}</span>
                        <div className="flex items-center gap-4">
                          <span className="text-harvest-gold font-bold">{month.avgTemp}°C</span>
                          <div className="w-24 bg-background rounded-full h-2 overflow-hidden">
                            <div 
                              className="h-full bg-harvest-gold rounded-full transition-all"
                              style={{ width: `${(month.avgTemp / 30) * 100}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>Rainfall Patterns</CardTitle>
                  <CardDescription>Monthly precipitation data</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {monthlyData.map((month, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted">
                        <span className="font-medium">{month.month}</span>
                        <div className="flex items-center gap-4">
                          <span className="text-sky-blue font-bold">{month.rainfall}mm</span>
                          <div className="w-24 bg-background rounded-full h-2 overflow-hidden">
                            <div 
                              className="h-full bg-sky-blue rounded-full transition-all"
                              style={{ width: `${(month.rainfall / 150) * 100}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Farming Recommendations */}
        <Card className="shadow-soft mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sprout className="h-5 w-5 text-crop-green" />
              Weather-Based Recommendations
            </CardTitle>
            <CardDescription>Actionable insights for your farm</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-crop-green/10 rounded-lg border border-crop-green/20">
                <h4 className="font-semibold text-crop-green mb-2">Optimal Conditions</h4>
                <p className="text-sm text-muted-foreground">
                  Current temperature is perfect for maize growth. Consider planting in the next 2-3 days.
                </p>
              </div>
              <div className="p-4 bg-sky-blue/10 rounded-lg border border-sky-blue/20">
                <h4 className="font-semibold text-sky-blue mb-2">Irrigation Alert</h4>
                <p className="text-sm text-muted-foreground">
                  Rain expected Wednesday-Thursday. Skip irrigation for outdoor crops until Friday.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WeatherPage;