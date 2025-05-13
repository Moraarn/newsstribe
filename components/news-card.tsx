import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Clock, MessageCircle, Share2, ThumbsUp, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface NewsCardProps {
  title: string
  category: string
  author: string
  readTime: string
  points: number
  image: string
}

export function NewsCard({ title, category, author, readTime, points, image }: NewsCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={200}
          className="w-full h-48 object-cover"
        />
        <Badge className="absolute top-3 left-3 bg-green-600 hover:bg-green-700">{category}</Badge>
        <Badge className="absolute top-3 right-3 bg-yellow-500 hover:bg-yellow-600 flex items-center gap-1">
          <Award className="h-3 w-3" />
          {points} pts
        </Badge>
      </div>
      <CardHeader className="p-3 pb-0">
        <h3 className="font-bold text-lg leading-tight">{title}</h3>
      </CardHeader>
      <CardContent className="p-3 pt-2">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <Avatar className="h-5 w-5 mr-1">
              <AvatarImage src="/placeholder.svg?height=20&width=20" alt={author} />
              <AvatarFallback className="text-[10px]">{author.charAt(0)}</AvatarFallback>
            </Avatar>
            <span>{author}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            <span>{readTime}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-3 pt-0 flex justify-between">
        <div className="flex space-x-2">
          <Button variant="ghost" size="sm" className="h-8 px-2">
            <ThumbsUp className="h-4 w-4 mr-1" />
            <span className="text-xs">Like</span>
          </Button>
          <Button variant="ghost" size="sm" className="h-8 px-2">
            <MessageCircle className="h-4 w-4 mr-1" />
            <span className="text-xs">Comment</span>
          </Button>
        </div>
        <Button variant="ghost" size="sm" className="h-8 px-2">
          <Share2 className="h-4 w-4 mr-1" />
          <span className="text-xs">Share</span>
        </Button>
      </CardFooter>
    </Card>
  )
}
