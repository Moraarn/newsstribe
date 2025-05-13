"use client"

import { Bell, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { NewsCard } from "@/components/news-card"
import { Notification } from "@/components/notification"
import { PointsTracker } from "@/components/points-tracker"
import { BottomNavigation } from "@/components/bottom-navigation"
import { Tabs } from "@/components/ui/tabs"
import Image from "next/image"

export default function HomeScreen() {
  const newsItems = [
    {
      id: 1,
      title: "Kenya's Tech Boom: Nairobi Emerges as Africa's Silicon Savannah",
      category: "Technology",
      author: "James Mwangi",
      readTime: "4 min",
      points: 15,
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
    },
    {
      id: 2,
      title: "Harambee Stars Qualify for AFCON 2025 After Thrilling Victory",
      category: "Sports",
      author: "Wanjiku Njeri",
      readTime: "3 min",
      points: 10,
      image: "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg",
    },
    {
      id: 3,
      title: "New Climate Policy: Kenya Pledges Carbon Neutrality by 2050",
      category: "Environment",
      author: "David Ochieng",
      readTime: "5 min",
      points: 20,
      image: "https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg",
    },
    {
      id: 4,
      title: "Kenyan Film 'Rafiki' Wins International Award at Cannes",
      category: "Entertainment",
      author: "Aisha Mohamed",
      readTime: "2 min",
      points: 10,
      image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg",
    },
  ]

  return (
    <Tabs defaultValue="home" className="flex flex-col min-h-screen">
      <div className="flex flex-col flex-1 pb-20">
        {/* <header className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image src="/logo.jpg" alt="NewsTribe Logo" width={32} height={32} className="mr-2 rounded-full" />
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
        </header> */}

        <div className="px-4 py-3">
          <PointsTracker points={120} />
          <Notification message="New quiz available: 'Kenya's Political History'" type="quiz" />
        </div>

        <div className="px-4 py-2">
          <h2 className="text-lg font-bold mb-3">Your Daily Feed</h2>
          <div className="space-y-4">
            {newsItems.map((item) => (
              <NewsCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
      <BottomNavigation />
    </Tabs>
  )
}
