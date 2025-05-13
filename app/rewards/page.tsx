"use client"

import { Bell, Search, Gift, Star, Ticket, Coffee, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BottomNavigation } from "@/components/bottom-navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function RewardsPage() {
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
          <div className="bg-gradient-to-r from-green-600 to-yellow-500 rounded-lg p-4 mb-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold">Your Points</h2>
                <p className="text-3xl font-bold mt-1">1,250</p>
              </div>
              <Gift className="h-12 w-12" />
            </div>
            <p className="text-sm mt-2">Earn more points by completing quests and engaging with content</p>
          </div>

          <Tabs defaultValue="all">
            <TabsList className="grid w-full grid-cols-4 mb-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="subscription">Subscription</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="vouchers">Vouchers</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 mr-2 text-green-600" />
                      <CardTitle className="text-base">Premium Subscription</CardTitle>
                    </div>
                    <Badge className="bg-green-600 hover:bg-green-700">500 points</Badge>
                  </div>
                  <CardDescription>1 month of ad-free reading</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button className="w-full">Redeem</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <Ticket className="h-5 w-5 mr-2 text-green-600" />
                      <CardTitle className="text-base">Event Pass</CardTitle>
                    </div>
                    <Badge className="bg-green-600 hover:bg-green-700">300 points</Badge>
                  </div>
                  <CardDescription>Access to exclusive news events</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button className="w-full">Redeem</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <Coffee className="h-5 w-5 mr-2 text-green-600" />
                      <CardTitle className="text-base">Coffee Voucher</CardTitle>
                    </div>
                    <Badge className="bg-green-600 hover:bg-green-700">200 points</Badge>
                  </div>
                  <CardDescription>Free coffee at partner cafes</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button className="w-full">Redeem</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <ShoppingBag className="h-5 w-5 mr-2 text-green-600" />
                      <CardTitle className="text-base">Shopping Discount</CardTitle>
                    </div>
                    <Badge className="bg-green-600 hover:bg-green-700">400 points</Badge>
                  </div>
                  <CardDescription>20% off at partner stores</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button className="w-full">Redeem</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="subscription" className="space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 mr-2 text-green-600" />
                      <CardTitle className="text-base">Premium Subscription</CardTitle>
                    </div>
                    <Badge className="bg-green-600 hover:bg-green-700">500 points</Badge>
                  </div>
                  <CardDescription>1 month of ad-free reading</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button className="w-full">Redeem</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="events" className="space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <Ticket className="h-5 w-5 mr-2 text-green-600" />
                      <CardTitle className="text-base">Event Pass</CardTitle>
                    </div>
                    <Badge className="bg-green-600 hover:bg-green-700">300 points</Badge>
                  </div>
                  <CardDescription>Access to exclusive news events</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button className="w-full">Redeem</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="vouchers" className="space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <Coffee className="h-5 w-5 mr-2 text-green-600" />
                      <CardTitle className="text-base">Coffee Voucher</CardTitle>
                    </div>
                    <Badge className="bg-green-600 hover:bg-green-700">200 points</Badge>
                  </div>
                  <CardDescription>Free coffee at partner cafes</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button className="w-full">Redeem</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <ShoppingBag className="h-5 w-5 mr-2 text-green-600" />
                      <CardTitle className="text-base">Shopping Discount</CardTitle>
                    </div>
                    <Badge className="bg-green-600 hover:bg-green-700">400 points</Badge>
                  </div>
                  <CardDescription>20% off at partner stores</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button className="w-full">Redeem</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <BottomNavigation />
    </Tabs>
  )
}
