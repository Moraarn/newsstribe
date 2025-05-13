"use client"

import { Bell, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BottomNavigation } from "@/components/bottom-navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { NewsCard } from "@/components/news-card"
import { PointsTracker } from "@/components/points-tracker"
import { Notification } from "@/components/notification"

export default function ExplorePage() {
  const trendingNews = [
    {
      id: 1,
      title: "Breaking: Major Cabinet Reshuffle Announced by President",
      category: "Politics",
      author: "John Kamau",
      readTime: "6 min",
      points: 25,
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    },
    {
      id: 2,
      title: "Kenyan Startup Raises $10M in Series A Funding",
      category: "Business",
      author: "Sarah Odhiambo",
      readTime: "4 min",
      points: 15,
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    },
    {
      id: 3,
      title: "New Tech Hub Opens in Nairobi's Westlands",
      category: "Technology",
      author: "David Mwangi",
      readTime: "3 min",
      points: 20,
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
    }
  ]

  return (
    <Tabs defaultValue="explore" className="flex flex-col min-h-screen">
      <div className="flex flex-col flex-1 pb-20">
        <header className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Avatar className="h-8 w-8 mr-2">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="NewsTribe" />
                <AvatarFallback className="bg-green-600 text-white">NT</AvatarFallback>
              </Avatar>
              <h1 className="text-xl font-bold bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">
                NewsTribe
              </h1>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
              </Button>
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                <AvatarFallback className="bg-orange-500 text-white">JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        <div className="px-4 py-3">
          <PointsTracker points={250} />

          <Notification 
            message="New articles available in your favorite categories!" 
            type="news" 
          />

          <h2 className="text-lg font-bold mb-3">Explore</h2>
          <Tabs defaultValue="trending">
            <TabsList className="grid w-full grid-cols-4 mb-4">
              <TabsTrigger value="trending">Trending</TabsTrigger>
              <TabsTrigger value="politics">Politics</TabsTrigger>
              <TabsTrigger value="business">Business</TabsTrigger>
              <TabsTrigger value="sports">Sports</TabsTrigger>
            </TabsList>
            <TabsContent value="trending" className="space-y-4 mt-2">
              {trendingNews.map((item) => (
                <NewsCard key={item.id} {...item} />
              ))}
            </TabsContent>
            <TabsContent value="politics" className="space-y-4 mt-2">
              <p className="text-center text-gray-500 py-8">Select topics to follow</p>
            </TabsContent>
            <TabsContent value="business" className="space-y-4 mt-2">
              <p className="text-center text-gray-500 py-8">Select topics to follow</p>
            </TabsContent>
            <TabsContent value="sports" className="space-y-4 mt-2">
              <p className="text-center text-gray-500 py-8">Select topics to follow</p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <BottomNavigation />
    </Tabs>
  )
}
