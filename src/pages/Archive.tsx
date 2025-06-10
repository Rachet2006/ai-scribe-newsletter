
import { useState } from 'react';
import { Calendar, Clock, ArrowLeft, Search, Filter } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Archive = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const archivedIssues = [
    {
      id: 1,
      title: "GPT-5 Breakthrough: What It Means for Enterprise AI",
      description: "Deep dive into the latest language model capabilities and their real-world applications in business automation.",
      date: "Dec 5, 2024",
      category: "LLMs",
      readTime: "8 min read",
      issueNumber: 47,
      featured: true
    },
    {
      id: 2,
      title: "The Rise of AI Agents: Autonomous Intelligence in Action",
      description: "Exploring how AI agents are transforming industries from customer service to software development.",
      date: "Dec 3, 2024",
      category: "AI Agents",
      readTime: "6 min read",
      issueNumber: 46,
      featured: false
    },
    {
      id: 3,
      title: "Prompt Engineering Mastery: Advanced Techniques",
      description: "Learn professional prompt engineering strategies that top AI practitioners use to get better results.",
      date: "Nov 28, 2024",
      category: "Techniques",
      readTime: "12 min read",
      issueNumber: 45,
      featured: false
    },
    {
      id: 4,
      title: "Computer Vision Revolution: From Detection to Generation",
      description: "How computer vision is evolving from simple object detection to creating entirely new visual content.",
      date: "Nov 21, 2024",
      category: "Computer Vision",
      readTime: "10 min read",
      issueNumber: 44,
      featured: false
    },
    {
      id: 5,
      title: "The Ethics of AI: Building Responsible Systems",
      description: "Examining the ethical implications of AI development and deployment in real-world applications.",
      date: "Nov 14, 2024",
      category: "Ethics",
      readTime: "9 min read",
      issueNumber: 43,
      featured: false
    },
    {
      id: 6,
      title: "Machine Learning Operations: Scaling AI in Production",
      description: "Best practices for deploying and maintaining machine learning models at enterprise scale.",
      date: "Nov 7, 2024",
      category: "MLOps",
      readTime: "11 min read",
      issueNumber: 42,
      featured: false
    }
  ];

  const categories = ['All', 'LLMs', 'AI Agents', 'Techniques', 'Computer Vision', 'Ethics', 'MLOps'];

  const filteredIssues = archivedIssues.filter(issue => {
    const matchesSearch = issue.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         issue.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || issue.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="mb-12">
            <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Newsletter Archive
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Explore our complete collection of AI insights, research breakdowns, and industry analysis.
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-background/80 backdrop-blur-sm border-border/60"
              />
            </div>
            
            <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0">
              <Filter className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="whitespace-nowrap"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <p className="text-muted-foreground mb-6">
            {filteredIssues.length} article{filteredIssues.length !== 1 ? 's' : ''} found
          </p>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIssues.map((issue) => (
              <Card key={issue.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/60 bg-card/80 backdrop-blur-sm">
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge 
                      variant={issue.featured ? "default" : "secondary"} 
                      className="text-xs font-medium"
                    >
                      {issue.featured ? "Featured" : issue.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground font-mono">
                      Issue #{issue.issueNumber}
                    </span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors leading-tight">
                    {issue.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {issue.description}
                  </CardDescription>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{issue.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{issue.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors border border-transparent group-hover:border-primary"
                  >
                    Read Article
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredIssues.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No articles found matching your search criteria.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Archive;
