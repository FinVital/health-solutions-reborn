
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { ArrowRight } from 'lucide-react';

const ServiceFinder = () => {
  const [serviceType, setServiceType] = useState<string>('');
  const [location, setLocation] = useState<string>('');

  const serviceTypes = [
    { value: 'health', label: 'Primary Healthcare' },
    { value: 'mental', label: 'Mental Health Services' },
    { value: 'substance', label: 'Substance Use Treatment' },
    { value: 'community', label: 'Community Programs' },
    { value: 'education', label: 'Health Education' },
  ];

  const locations = [
    { value: 'manhattan', label: 'Manhattan' },
    { value: 'brooklyn', label: 'Brooklyn' },
    { value: 'queens', label: 'Queens' },
    { value: 'bronx', label: 'Bronx' },
    { value: 'statenisland', label: 'Staten Island' },
    { value: 'online', label: 'Online/Virtual' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would typically navigate to search results page
    console.log('Search for:', serviceType, location);
    alert('This would search for ' + serviceType + ' services in ' + location);
  };

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-primary text-primary-foreground p-6">
            <h2 className="text-2xl md:text-3xl font-bold">Find the Right Service for You</h2>
            <p className="mt-2">
              Use our service finder tool to discover programs and resources that meet your specific needs.
            </p>
          </div>
          
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="service-type" className="block font-medium">
                    What type of service are you looking for?
                  </label>
                  <Select value={serviceType} onValueChange={setServiceType}>
                    <SelectTrigger id="service-type" className="w-full">
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="location" className="block font-medium">
                    Where do you need this service?
                  </label>
                  <Select value={location} onValueChange={setLocation}>
                    <SelectTrigger id="location" className="w-full">
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map((loc) => (
                        <SelectItem key={loc.value} value={loc.value}>
                          {loc.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="health-cta w-full text-lg py-6"
                disabled={!serviceType || !location}
              >
                Find Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-muted-foreground">
                Need help finding the right service? Call our helpline at <strong>(800) 123-4567</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFinder;
