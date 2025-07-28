import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sprout, Save } from 'lucide-react';

const YieldForm = () => {
  const [formData, setFormData] = useState({
    cropType: '',
    plantingDate: '',
    harvestDate: '',
    areaPlanted: '',
    actualYield: '',
    expectedYield: '',
    fertilizer: '',
    pesticides: '',
    irrigation: '',
    weatherConditions: '',
    notes: ''
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Yield data submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-gradient-field">
      <div className="container mx-auto p-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2 flex items-center gap-3">
              <Sprout className="h-8 w-8 text-crop-green" />
              Record Yield Data
            </h1>
            <p className="text-muted-foreground">
              Track your crop performance to improve future yields
            </p>
          </div>

          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>Yield Information</CardTitle>
              <CardDescription>
                Enter details about your harvest and growing conditions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="cropType">Crop Type</Label>
                    <Select onValueChange={(value) => handleChange('cropType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select crop type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="maize">Maize</SelectItem>
                        <SelectItem value="beans">Beans</SelectItem>
                        <SelectItem value="tomatoes">Tomatoes</SelectItem>
                        <SelectItem value="potatoes">Potatoes</SelectItem>
                        <SelectItem value="cabbage">Cabbage</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="areaPlanted">Area Planted (acres)</Label>
                    <Input
                      id="areaPlanted"
                      type="number"
                      step="0.1"
                      placeholder="e.g., 2.5"
                      value={formData.areaPlanted}
                      onChange={(e) => handleChange('areaPlanted', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="plantingDate">Planting Date</Label>
                    <Input
                      id="plantingDate"
                      type="date"
                      value={formData.plantingDate}
                      onChange={(e) => handleChange('plantingDate', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="harvestDate">Harvest Date</Label>
                    <Input
                      id="harvestDate"
                      type="date"
                      value={formData.harvestDate}
                      onChange={(e) => handleChange('harvestDate', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="expectedYield">Expected Yield (kg)</Label>
                    <Input
                      id="expectedYield"
                      type="number"
                      placeholder="e.g., 150"
                      value={formData.expectedYield}
                      onChange={(e) => handleChange('expectedYield', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="actualYield">Actual Yield (kg)</Label>
                    <Input
                      id="actualYield"
                      type="number"
                      placeholder="e.g., 145"
                      value={formData.actualYield}
                      onChange={(e) => handleChange('actualYield', e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Growing Conditions</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fertilizer">Fertilizer Used</Label>
                      <Input
                        id="fertilizer"
                        placeholder="Type and amount"
                        value={formData.fertilizer}
                        onChange={(e) => handleChange('fertilizer', e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="pesticides">Pesticides Used</Label>
                      <Input
                        id="pesticides"
                        placeholder="Type and frequency"
                        value={formData.pesticides}
                        onChange={(e) => handleChange('pesticides', e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="irrigation">Irrigation Method</Label>
                      <Select onValueChange={(value) => handleChange('irrigation', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="rainfed">Rainfed</SelectItem>
                          <SelectItem value="drip">Drip Irrigation</SelectItem>
                          <SelectItem value="sprinkler">Sprinkler</SelectItem>
                          <SelectItem value="flood">Flood Irrigation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="weatherConditions">Weather Conditions</Label>
                    <Textarea
                      id="weatherConditions"
                      placeholder="Describe the weather during the growing season..."
                      value={formData.weatherConditions}
                      onChange={(e) => handleChange('weatherConditions', e.target.value)}
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Textarea
                      id="notes"
                      placeholder="Any challenges, observations, or lessons learned..."
                      value={formData.notes}
                      onChange={(e) => handleChange('notes', e.target.value)}
                      rows={3}
                    />
                  </div>
                </div>

                <div className="flex justify-end space-x-4">
                  <Button type="button" variant="outline">
                    Save as Draft
                  </Button>
                  <Button type="submit" className="flex items-center gap-2">
                    <Save className="h-4 w-4" />
                    Save Yield Record
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default YieldForm;