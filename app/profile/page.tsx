"use client"

import { useApp } from '@/lib/context';
import { Bell, Search, Award, BookOpen, Share2, Settings, LogOut, Edit2, Trophy, Star, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BottomNavigation } from "@/components/bottom-navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { PointsTracker } from "@/components/points-tracker"
import { Notification } from "@/components/notification"

export default function ProfilePage() {
  const { user, articles, notifications } = useApp();

  // Calculate user statistics
  const totalArticlesRead = articles.filter(article => 
    article.comments.some(comment => comment.userId === user.id)
  ).length;

  const totalComments = articles.reduce((acc, article) => 
    acc + article.comments.filter(comment => comment.userId === user.id).length, 0
  );

  const totalNotifications = notifications.length;

  // Determine user tier based on points
  const getTier = (points: number) => {
    if (points >= 1000) return { name: 'Platinum', color: 'bg-gray-400' };
    if (points >= 500) return { name: 'Gold', color: 'bg-yellow-400' };
    if (points >= 200) return { name: 'Silver', color: 'bg-gray-300' };
    return { name: 'Bronze', color: 'bg-amber-600' };
  };

  const tier = getTier(user.points);

  return (
    <Tabs defaultValue="profile" className="flex flex-col min-h-screen">
      <div className="flex flex-col flex-1 pb-20">
        {/* <header className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-3">
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
              <img src="/logo.jpg" alt="NewsTribe Logo" width={32} height={32} className="mr-2 rounded-full" />
            </div>
          </div>
        </header> */}

        <div className="px-4 py-3">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Avatar className="h-20 w-20 mr-4">
                <AvatarImage src="/placeholder.svg" alt={user.name} />
                <AvatarFallback>{user.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-xl font-bold">{user.name}</h2>
                <div className="flex items-center space-x-2 mt-1">
                  <Badge className={tier.color}>{tier.name}</Badge>
                  <span className="text-gray-600">Member since {new Date(user.joinDate).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
            <Button variant="outline" size="icon">
              <Edit2 className="h-4 w-4" />
            </Button>
          </div>

          <PointsTracker points={user.points} />

          <Notification 
            message="You're 3 comments away from earning the Community Builder badge!" 
            type="quiz" 
          />

          <div className="grid grid-cols-3 gap-4 mb-6">
            <Card>
              <CardHeader className="p-4">
                <CardTitle className="text-2xl font-bold">{user.points}</CardTitle>
                <CardDescription>Points</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="p-4">
                <CardTitle className="text-2xl font-bold">{totalArticlesRead}</CardTitle>
                <CardDescription>Articles Read</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="p-4">
                <CardTitle className="text-2xl font-bold">{totalComments}</CardTitle>
                <CardDescription>Comments</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <Tabs defaultValue="activity">
            <TabsList className="grid w-full grid-cols-3 mb-4">
              <TabsTrigger value="activity">Activity</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="activity" className="space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-green-600" />
                    <CardTitle className="text-base">Recent Activity</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {notifications.slice(0, 5).map((notification, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Star className="h-5 w-5 text-yellow-500" />
                        <p className="text-sm">{notification.message}</p>
                        <span className="text-xs text-gray-500">
                          {new Date(notification.timestamp).toLocaleDateString()}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="achievements" className="space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center">
                    <Award className="h-5 w-5 mr-2 text-green-600" />
                    <CardTitle className="text-base">Achievements</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Early Adopter</p>
                        <p className="text-sm text-gray-500">Joined in the first month</p>
                      </div>
                      <Badge className="bg-green-600">Completed</Badge>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">News Enthusiast</p>
                        <p className="text-sm text-gray-500">Read 100 articles</p>
                      </div>
                      <Badge className="bg-green-600">Completed</Badge>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Community Builder</p>
                        <p className="text-sm text-gray-500">Make 50 comments</p>
                      </div>
                      <Badge variant="outline">In Progress</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center">
                    <Settings className="h-5 w-5 mr-2 text-green-600" />
                    <CardTitle className="text-base">Settings</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button variant="ghost" className="w-full justify-start">
                      <Settings className="h-4 w-4 mr-2" />
                      Account Settings
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Bell className="h-4 w-4 mr-2" />
                      Notifications
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Share2 className="h-4 w-4 mr-2" />
                      Privacy
                    </Button>
                    <Separator />
                    <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
                      <LogOut className="h-4 w-4 mr-2" />
                      Log Out
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <BottomNavigation />
    </Tabs>
  )
}
