
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Mission = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="mb-4">Our Mission</h2>
            <p className="text-lg mb-6">
              For over 30 years, Health Solutions has been dedicated to improving the health and 
              wellbeing of individuals and communities through innovative programs, advocacy, 
              and research.
            </p>
            <p className="mb-8">
              We believe that everyone deserves access to quality healthcare, regardless of 
              their background or circumstances. Our dedicated team works tirelessly to develop 
              and implement solutions that address the complex health challenges facing our 
              communities.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/about">
                <Button className="health-button-primary">About Us</Button>
              </Link>
              <Link to="/about/team">
                <Button variant="outline">Our Team</Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video bg-muted overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Healthcare professionals in discussion" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg max-w-xs hidden md:block">
              <p className="font-bold text-xl mb-2">30+ Years</p>
              <p className="text-sm">
                Of service excellence and community impact, helping thousands of people lead healthier lives.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16">
          <div className="p-6 bg-secondary rounded-lg">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality</h3>
            <p>
              We maintain the highest standards in all our programs and services, ensuring effective and evidence-based approaches.
            </p>
          </div>
          
          <div className="p-6 bg-secondary rounded-lg">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Compassion</h3>
            <p>
              We approach every individual with empathy, dignity, and respect, recognizing each person's unique circumstances.
            </p>
          </div>
          
          <div className="p-6 bg-secondary rounded-lg">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p>
              We continuously seek new and better ways to address health challenges through research and creative solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
