"use client"

import { useApp } from '@/lib/context';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Share2, Search } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ExplorePage() {
  const { articles } = useApp();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Define main categories
  const categories = [
    { id: "all", label: "All" },
    { id: "technology", label: "Technology" },
    { id: "sports", label: "Sports" },
    { id: "environment", label: "Environment" },
    { id: "entertainment", label: "Entertainment" },
    { id: "business", label: "Business" }
  ];

  // Filter articles based on search and category
  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || 
                          article.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  const handleReadClick = (articleId: number) => {
    router.push(`/article/${articleId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search articles..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Category Tabs */}
        <Tabs defaultValue="all" className="mb-6" onValueChange={setSelectedCategory}>
          <TabsList className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="capitalize transition-colors duration-150
                  hover:bg-green-100 hover:text-green-700
                  data-[state=active]:font-bold
                  data-[state=active]:text-green-600
                  data-[state=active]:border-b-2
                  data-[state=active]:border-green-600
                  data-[state=active]:bg-green-50"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-2 left-2 bg-green-600">
                    {article.category}
                  </Badge>
                  <Badge className="absolute top-2 right-2 bg-yellow-500">
                    +{article.points} pts
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{article.title}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <span>{article.author}</span>
                    <span className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-1" />
                      {article.readTime}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleReadClick(article.id)}
                    >
                      Read Article
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-8">
              <p className="text-gray-500">No articles found matching your search criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
