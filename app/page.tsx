"use client"

import { Bell, Search, Award, BookOpen, Share2, ArrowRight, Users, Globe, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BottomNavigation } from "@/components/bottom-navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { NewsCard } from "@/components/news-card"
import { PointsTracker } from "@/components/points-tracker"
import { Notification } from "@/components/notification"
import Image from "next/image"

export default function LandingPage() {
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
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-green-600 to-yellow-500 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left">
                <h2 className="text-4xl font-bold mb-2">Stay Informed, Earn Rewards</h2>
                <h3 className="text-xl mb-4 font-medium text-white/90">Your Daily Dose of News, Gen Z Style ✨</h3>
                <p className="text-lg mb-8">Join our community of news enthusiasts. Read, engage, and earn points for your contributions.</p>
                <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                  <Button size="lg" className="bg-white text-green-600 hover:bg-white/90">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="relative w-[280px] h-[560px] mx-auto bg-black rounded-[40px] p-4 shadow-2xl">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-black rounded-b-[20px]"></div>
                  <div className="w-full h-full bg-gradient-to-br from-green-500/20 to-yellow-500/20 rounded-[32px] overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src="/placeholder.svg" alt="User" />
                            <AvatarFallback className="bg-orange-500 text-white">JD</AvatarFallback>
                          </Avatar>
                          <div className="ml-3">
                            <p className="font-semibold">John Doe</p>
                            <p className="text-sm text-white/70">Level 3 Explorer</p>
                          </div>
                        </div>
                        <Badge className="bg-white/20">1,250 pts</Badge>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-white/10 rounded-lg p-4">
                          <h3 className="font-semibold mb-2">Breaking News</h3>
                          <p className="text-sm text-white/80">Major cabinet reshuffle announced by the president...</p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-4">
                          <h3 className="font-semibold mb-2">Trending</h3>
                          <p className="text-sm text-white/80">Kenyan startup raises $10M in Series A funding...</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-12">Why Choose NewsTribe?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>Community Driven</CardTitle>
                  <CardDescription>Join a vibrant community of news enthusiasts and share your insights.</CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-yellow-600" />
                  </div>
                  <CardTitle>Earn Rewards</CardTitle>
                  <CardDescription>Get points for reading, commenting, and sharing news articles.</CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Verified News</CardTitle>
                  <CardDescription>Access reliable and fact-checked news from trusted sources.</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Trending News Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold">Trending Now</h3>
              <Button variant="ghost" className="text-green-600">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {trendingNews.map((item) => (
                <NewsCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="text-4xl font-bold text-green-600 mb-2">10K+</h4>
                <p className="text-gray-600">Active Users</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-green-600 mb-2">50K+</h4>
                <p className="text-gray-600">Articles Read</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-green-600 mb-2">1M+</h4>
                <p className="text-gray-600">Points Earned</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-yellow-500 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Join NewsTribe?</h3>
            <p className="text-lg mb-8">Start reading, engaging, and earning rewards today.</p>
            <Button size="lg" className="bg-white text-green-600 hover:bg-white/90">
              Sign Up Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>

      <BottomNavigation />
    </div>
  )
}
