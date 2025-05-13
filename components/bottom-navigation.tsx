"use client"

import { Home, Compass, Award, Gift, User } from "lucide-react"
import { TabsList, TabsTrigger } from "@/components/ui/tabs"
import { usePathname } from "next/navigation"
import Link from "next/link"

export function BottomNavigation() {
  const pathname = usePathname()

  return (
    <TabsList className="fixed bottom-0 left-0 right-0 h-16 grid grid-cols-5 bg-white border-t border-gray-200 shadow-sm">
      <Link href="/home" className="flex flex-col items-center justify-center">
        <TabsTrigger
          value="home"
          className="flex flex-col items-center justify-center data-[state=active]:text-green-600"
          data-state={pathname === "/home" ? "active" : "inactive"}
        >
          <Home className="h-5 w-5" />
          <span className="text-xs mt-1">Home</span>
        </TabsTrigger>
      </Link>
      <Link href="/explore" className="flex flex-col items-center justify-center">
        <TabsTrigger
          value="explore"
          className="flex flex-col items-center justify-center data-[state=active]:text-green-600"
          data-state={pathname === "/explore" ? "active" : "inactive"}
        >
          <Compass className="h-5 w-5" />
          <span className="text-xs mt-1">Explore</span>
        </TabsTrigger>
      </Link>
      <Link href="/quests" className="flex flex-col items-center justify-center">
        <TabsTrigger
          value="quests"
          className="flex flex-col items-center justify-center data-[state=active]:text-green-600"
          data-state={pathname === "/quests" ? "active" : "inactive"}
        >
          <Award className="h-5 w-5" />
          <span className="text-xs mt-1">Quests</span>
        </TabsTrigger>
      </Link>
      <Link href="/rewards" className="flex flex-col items-center justify-center">
        <TabsTrigger
          value="rewards"
          className="flex flex-col items-center justify-center data-[state=active]:text-green-600"
          data-state={pathname === "/rewards" ? "active" : "inactive"}
        >
          <Gift className="h-5 w-5" />
          <span className="text-xs mt-1">Rewards</span>
        </TabsTrigger>
      </Link>
      <Link href="/profile" className="flex flex-col items-center justify-center">
        <TabsTrigger
          value="profile"
          className="flex flex-col items-center justify-center data-[state=active]:text-green-600"
          data-state={pathname === "/profile" ? "active" : "inactive"}
        >
          <User className="h-5 w-5" />
          <span className="text-xs mt-1">Profile</span>
        </TabsTrigger>
      </Link>
    </TabsList>
  )
}
