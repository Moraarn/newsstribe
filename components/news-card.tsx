import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Clock, MessageCircle, Share2, ThumbsUp, Award, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRouter } from 'next/navigation'

export interface NewsCardProps {
  id: number;
  title: string;
  category: string;
  author: string;
  readTime: string;
  points: number;
  image: string;
  onRead: () => void;
}

export function NewsCard({
  id,
  title,
  category,
  author,
  readTime,
  points,
  image,
  onRead,
}: NewsCardProps) {
  const router = useRouter();

  const handleReadClick = () => {
    onRead();
    router.push(`/article/${id}`);
  };

  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <Badge className="absolute top-2 left-2 bg-green-600">
          {category}
        </Badge>
        <Badge className="absolute top-2 right-2 bg-yellow-500">
          +{points} pts
        </Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{title}</h3>
        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <span>{author}</span>
          <span className="flex items-center">
            <BookOpen className="h-4 w-4 mr-1" />
            {readTime}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <Button 
            variant="outline" 
            size="sm"
            onClick={handleReadClick}
          >
            Read Article
          </Button>
          <Button variant="ghost" size="icon">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
