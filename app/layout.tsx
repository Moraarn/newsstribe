'use client';

import './globals.css'
import Image from "next/image"
import { Bell, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AppProvider } from "@/lib/context"
import { useRouter } from 'next/navigation'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter();

  return (
    <html lang="en">
      <body>
        <AppProvider>
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center">
              <div className="mr-4 flex">
                <Image
                  src="/logo.jpg"
                  alt="NewsTribe Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="ml-2 text-xl font-bold">NewsTribe</span>
              </div>
              <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                <div className="w-full flex-1 md:w-auto md:flex-none">
                  <Button variant="ghost" className="mr-2">
                    <Search className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost">
                    <Bell className="h-5 w-5" />
                  </Button>
                </div>
                <Button 
                  variant="ghost" 
                  className="cursor-pointer"
                  onClick={() => router.push('/profile')}
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg" alt="User" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </Button>
              </div>
            </div>
          </header>
          {children}
        </AppProvider>
      </body>
    </html>
  )
}
