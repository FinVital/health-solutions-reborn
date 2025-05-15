
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: "Health Solutions Launches New Mental Health Initiative",
      excerpt: "New program aims to provide accessible mental health services to underserved communities.",
      date: "May 15, 2023",
      category: "Press Release",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      slug: "/news/mental-health-initiative",
    },
    {
      id: 2,
      title: "Annual Community Health Fair Scheduled for Next Month",
      excerpt: "Join us for free health screenings, wellness workshops, and family activities.",
      date: "April 28, 2023",
      category: "Event",
      image: "https://images.unsplash.com/photo-1469571486292-b53601162cd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      slug: "/news/health-fair-2023",
    },
    {
      id: 3,
      title: "Research Study Reveals Impact of Nutrition Programs",
      excerpt: "Our latest research shows significant health improvements in communities with access to nutrition education.",
      date: "April 10, 2023",
      category: "Research",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      slug: "/news/nutrition-program-research",
    },
  ];
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="mb-3">Latest News & Events</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Stay informed about our latest initiatives, research findings, and upcoming events.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link to="/news">
              <Button variant="outline" className="flex items-center gap-2">
                View all news <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <Card key={item.id} className="flex flex-col h-full overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-full z-10">
                  {item.category}
                </div>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="text-sm text-muted-foreground mb-2">{item.date}</div>
                <h3 className="text-xl font-semibold leading-tight">
                  <Link to={item.slug} className="hover:text-primary transition-colors">
                    {item.title}
                  </Link>
                </h3>
              </CardHeader>
              <CardContent className="flex-grow">
                <p>{item.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Link 
                  to={item.slug} 
                  className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
                >
                  Read more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
