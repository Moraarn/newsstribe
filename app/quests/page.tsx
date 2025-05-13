"use client"

import { Award, CheckCircle, Clock, Bell, Search } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BottomNavigation } from "@/components/bottom-navigation"
import { Tabs } from "@/components/ui/tabs"

export default function QuestsPage() {
  return (
    <Tabs defaultValue="quests" className="flex flex-col min-h-screen">
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
          <h2 className="text-lg font-bold mb-3">Quests</h2>
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg p-4 mb-4 text-white">
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-bold text-lg">Daily Quiz</h2>
              <Badge className="bg-white/20 hover:bg-white/30">+15 points</Badge>
            </div>
            <p className="mb-3">Test your knowledge on today's top stories!</p>
            <Button className="w-full bg-white text-indigo-700 hover:bg-white/90">Start Quiz</Button>
          </div>

          <h2 className="font-bold text-lg mb-3">Active Challenges</h2>

          <div className="space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-base">Comment on 3 articles</CardTitle>
                  <Badge className="bg-green-600 hover:bg-green-700">+10 points</Badge>
                </div>
                <CardDescription>2/3 completed</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <Progress value={66} className="h-2" />
              </CardContent>
              <CardFooter className="pt-0">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>Expires in 8 hours</span>
                </div>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-base">Verify 5 news facts</CardTitle>
                  <Badge className="bg-green-600 hover:bg-green-700">+25 points</Badge>
                </div>
                <CardDescription>1/5 completed</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <Progress value={20} className="h-2" />
              </CardContent>
              <CardFooter className="pt-0">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>Expires in 2 days</span>
                </div>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-base">Share 1 article</CardTitle>
                  <Badge className="bg-green-600 hover:bg-green-700">+5 points</Badge>
                </div>
                <CardDescription>0/1 completed</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <Progress value={0} className="h-2" />
              </CardContent>
              <CardFooter className="pt-0">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>Expires in 1 day</span>
                </div>
              </CardFooter>
            </Card>
          </div>

          <h2 className="font-bold text-lg mt-6 mb-3">Completed Challenges</h2>

          <Card className="bg-gray-50">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-base text-gray-500">Read 5 articles today</CardTitle>
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <CardDescription>Completed</CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <Progress value={100} className="h-2 bg-gray-200" />
            </CardContent>
            <CardFooter className="pt-0">
              <div className="flex items-center text-sm text-gray-500">
                <Award className="h-4 w-4 mr-1" />
                <span>Earned 20 points</span>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
      <BottomNavigation />
    </Tabs>
  )
}
