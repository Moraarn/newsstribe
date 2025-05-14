"use client"

import { Bell, Search, Gift, Star, Ticket, Coffee, ShoppingBag, Coins, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BottomNavigation } from "@/components/bottom-navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useApp } from '@/lib/context'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useState } from "react"
import { BookOpen, MessageCircle } from "lucide-react"

export default function RewardsPage() {
  const { user, rewards, redeemReward } = useApp()
  const [redeeming, setRedeeming] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleRedeem = async (rewardId: string) => {
    setRedeeming(rewardId)
    setError(null)
    
    try {
      const success = redeemReward(rewardId)
      if (!success) {
        setError("You don't have enough points for this reward.")
      }
    } catch (err) {
      setError("Failed to redeem reward. Please try again.")
    } finally {
      setRedeeming(null)
    }
  }

  return (
    <Tabs defaultValue="rewards" className="flex flex-col min-h-screen">
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
          <div className="bg-gradient-to-r from-primary to-primary rounded-lg p-4 mb-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold">Your Points</h2>
                <p className="text-3xl font-bold mt-1">{user.points}</p>
              </div>
              <Gift className="h-12 w-12" />
            </div>
            <p className="text-sm mt-2">Earn more points by completing quests and engaging with content</p>
          </div>

          {/* Points Display */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Coins className="h-8 w-8 text-primary mr-3" />
                  <div>
                    <h2 className="text-2xl font-bold">{user.points}</h2>
                    <p className="text-gray-600">Available Points</p>
                  </div>
                </div>
                <Badge className="bg-primary text-lg px-4 py-2">
                  {user.tier} Tier
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Error Alert */}
          {error && (
            <Alert variant="destructive" className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <Tabs defaultValue="all">
            <TabsList className="grid w-full grid-cols-4 mb-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="subscription">Subscription</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="vouchers">Vouchers</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rewards.map((reward) => (
                  <Card key={reward.id} className="overflow-hidden">
                    <div className="relative h-40 w-full bg-gray-100">
                      <img
                        src={reward.image}
                        alt={reward.title}
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-2 left-2 bg-blue-600 capitalize">
                        {reward.type}
                      </Badge>
                      <Badge className="absolute top-2 right-2 bg-yellow-500">
                        {reward.points} pts
                      </Badge>
                    </div>
                    <CardHeader className="p-4 pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{reward.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <p className="text-sm text-gray-600 mb-4">{reward.description}</p>
                      <Button
                        className="w-full"
                        variant={user.points >= reward.points ? "default" : "outline"}
                        disabled={user.points < reward.points || !reward.available}
                        onClick={() => handleRedeem(reward.id)}
                      >
                        {redeeming === reward.id ? (
                          "Processing..."
                        ) : user.points >= reward.points ? (
                          "Redeem Now"
                        ) : (
                          "Not Enough Points"
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="subscription" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rewards.filter(r => r.type === "subscription").map((reward) => (
                  <Card key={reward.id} className="overflow-hidden">
                    <div className="relative h-40 w-full bg-gray-100">
                      <img
                        src={reward.image}
                        alt={reward.title}
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-2 left-2 bg-blue-600 capitalize">
                        {reward.type}
                      </Badge>
                      <Badge className="absolute top-2 right-2 bg-yellow-500">
                        {reward.points} pts
                      </Badge>
                    </div>
                    <CardHeader className="p-4 pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{reward.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <p className="text-sm text-gray-600 mb-4">{reward.description}</p>
                      <Button
                        className="w-full"
                        variant={user.points >= reward.points ? "default" : "outline"}
                        disabled={user.points < reward.points || !reward.available}
                        onClick={() => handleRedeem(reward.id)}
                      >
                        {redeeming === reward.id ? (
                          "Processing..."
                        ) : user.points >= reward.points ? (
                          "Redeem Now"
                        ) : (
                          "Not Enough Points"
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="events" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rewards.filter(r => r.type === "ticket" || r.type === "event").map((reward) => (
                  <Card key={reward.id} className="overflow-hidden">
                    <div className="relative h-40 w-full bg-gray-100">
                      <img
                        src={reward.image}
                        alt={reward.title}
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-2 left-2 bg-blue-600 capitalize">
                        {reward.type}
                      </Badge>
                      <Badge className="absolute top-2 right-2 bg-yellow-500">
                        {reward.points} pts
                      </Badge>
                    </div>
                    <CardHeader className="p-4 pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{reward.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <p className="text-sm text-gray-600 mb-4">{reward.description}</p>
                      <Button
                        className="w-full"
                        variant={user.points >= reward.points ? "default" : "outline"}
                        disabled={user.points < reward.points || !reward.available}
                        onClick={() => handleRedeem(reward.id)}
                      >
                        {redeeming === reward.id ? (
                          "Processing..."
                        ) : user.points >= reward.points ? (
                          "Redeem Now"
                        ) : (
                          "Not Enough Points"
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="vouchers" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rewards.filter(r => r.type === "shopping" || r.type === "food").map((reward) => (
                  <Card key={reward.id} className="overflow-hidden">
                    <div className="relative h-40 w-full bg-gray-100">
                      <img
                        src={reward.image}
                        alt={reward.title}
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-2 left-2 bg-blue-600 capitalize">
                        {reward.type}
                      </Badge>
                      <Badge className="absolute top-2 right-2 bg-yellow-500">
                        {reward.points} pts
                      </Badge>
                    </div>
                    <CardHeader className="p-4 pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{reward.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <p className="text-sm text-gray-600 mb-4">{reward.description}</p>
                      <Button
                        className="w-full"
                        variant={user.points >= reward.points ? "default" : "outline"}
                        disabled={user.points < reward.points || !reward.available}
                        onClick={() => handleRedeem(reward.id)}
                      >
                        {redeeming === reward.id ? (
                          "Processing..."
                        ) : user.points >= reward.points ? (
                          "Redeem Now"
                        ) : (
                          "Not Enough Points"
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <BottomNavigation />
    </Tabs>
  )
}
