'use client';

import { useApp } from '@/lib/context';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Share2, MessageCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function ArticlePage() {
  const { id } = useParams();
  const router = useRouter();
  const { articles, addPoints, addNotification, user } = useApp();
  const [article, setArticle] = useState(articles.find(a => a.id === Number(id)));
  const [comment, setComment] = useState('');
  const [hasEarnedPoints, setHasEarnedPoints] = useState(false);

  useEffect(() => {
    if (!article) {
      router.push('/home');
    }
  }, [article, router]);

  if (!article) return null;

  const handleReadComplete = () => {
    if (!hasEarnedPoints) {
      addPoints(article.points);
      addNotification({
        type: 'achievement',
        message: `You earned ${article.points} points for reading "${article.title}"!`,
        read: false,
      });
      setHasEarnedPoints(true);
    }
  };

  const handleAddComment = () => {
    if (comment.trim()) {
      // Add comment logic here
      setComment('');
      addPoints(5); // Bonus points for commenting
      addNotification({
        type: 'achievement',
        message: 'You earned 5 points for commenting!',
        read: false,
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => router.back()}
          className="mr-2"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <span className="font-semibold">Article</span>
      </div>

      {/* Article Content */}
      <div className="max-w-3xl mx-auto px-4 py-6">
        <div className="mb-6">
          <Badge className="mb-2">{article.category}</Badge>
          <h1 className="text-2xl font-bold mb-4">{article.title}</h1>
          <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
            <div className="flex items-center">
              <Avatar className="h-8 w-8 mr-2">
                <AvatarImage src="/placeholder.svg" alt={article.author} />
                <AvatarFallback>{article.author[0]}</AvatarFallback>
              </Avatar>
              <span>{article.author}</span>
            </div>
            <span>{article.readTime} read</span>
          </div>
        </div>

        <img
          src={article.image}
          alt={article.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        <div className="prose max-w-none mb-8">
          <p>{article.content}</p>
        </div>

        {/* Points Badge */}
        {!hasEarnedPoints && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
            <p className="text-yellow-800">
              Read the full article to earn {article.points} points!
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="outline"
            onClick={handleReadComplete}
            disabled={hasEarnedPoints}
          >
            {hasEarnedPoints ? 'Points Earned!' : 'Mark as Read'}
          </Button>
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon">
              <Share2 className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <MessageCircle className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Comments Section */}
        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-lg font-semibold mb-4">Comments</h3>
          <div className="space-y-4 mb-6">
            {article.comments.map((comment) => (
              <div key={comment.id} className="flex space-x-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg" alt="User" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-sm">{comment.content}</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(comment.timestamp).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <Textarea
              placeholder="Add a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <Button onClick={handleAddComment} disabled={!comment.trim()}>
              Post Comment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 