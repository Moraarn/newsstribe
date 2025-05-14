"use client"

import { useApp } from '@/lib/context';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Trophy, BookOpen, MessageCircle, CheckCircle2, Clock, Award } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { BottomNavigation } from "@/components/bottom-navigation";
import { Tabs } from "@/components/ui/tabs";

export default function QuestsPage() {
  const { quests, quizzes, completeQuest, completeQuiz } = useApp();
  const router = useRouter();
  const [selectedQuiz, setSelectedQuiz] = useState<string | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});

  const handleQuizAnswer = (questionId: string, answer: string) => {
    setQuizAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleQuizSubmit = (quizId: string) => {
    const quiz = quizzes.find(q => q.id === quizId);
    if (!quiz) return;

    let score = 0;
    quiz.questions.forEach(question => {
      if (quizAnswers[question.id] === question.correctAnswer) {
        score += question.points;
      }
    });

    completeQuiz(quizId, score);
    setSelectedQuiz(null);
    setQuizAnswers({});
  };

  return (
    <Tabs defaultValue="quests" className="flex flex-col min-h-screen">
      <div className="flex flex-col flex-1 pb-20">
        {/* <header className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src="/logo.jpg" alt="NewsTribe Logo" width={32} height={32} className="mr-2 rounded-full" />
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
        </header> */}

        <div className="px-4 py-3">
          <h2 className="text-lg font-bold mb-3">Quests</h2>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Daily Quests</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {quests.filter(quest => quest.type === 'daily').map((quest) => (
                <Card key={quest.id}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <Trophy className="h-5 w-5 text-yellow-500 mr-2" />
                        <h3 className="font-semibold">{quest.title}</h3>
                      </div>
                      <Badge className="bg-green-600">+{quest.points} pts</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{quest.description}</p>
                    <div className="flex items-center justify-between">
                      <Progress value={quest.completed ? 100 : 0} className="w-full mr-4" />
                      <Button
                        variant={quest.completed ? "outline" : "default"}
                        size="sm"
                        onClick={() => !quest.completed && completeQuest(quest.id)}
                        disabled={quest.completed}
                      >
                        {quest.completed ? (
                          <CheckCircle2 className="h-4 w-4 mr-2" />
                        ) : null}
                        {quest.completed ? "Completed" : "Complete"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
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
                <CheckCircle2 className="h-5 w-5 text-green-600" />
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

          <div>
            <h2 className="text-2xl font-bold mb-4">Knowledge Quizzes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {quizzes.map((quiz) => (
                <Card key={quiz.id}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <BookOpen className="h-5 w-5 text-blue-500 mr-2" />
                        <h3 className="font-semibold">{quiz.title}</h3>
                      </div>
                      <Badge className="bg-blue-600">+{quiz.totalPoints} pts</Badge>
                    </div>
                    
                    {selectedQuiz === quiz.id ? (
                      <div className="space-y-4">
                        {quiz.questions.map((question) => (
                          <div key={question.id} className="space-y-2">
                            <p className="font-medium">{question.question}</p>
                            <div className="grid grid-cols-1 gap-2">
                              {question.options.map((option) => (
                                <Button
                                  key={option}
                                  variant={quizAnswers[question.id] === option ? "default" : "outline"}
                                  className="justify-start"
                                  onClick={() => handleQuizAnswer(question.id, option)}
                                >
                                  {option}
                                </Button>
                              ))}
                            </div>
                          </div>
                        ))}
                        <Button
                          className="w-full"
                          onClick={() => handleQuizSubmit(quiz.id)}
                        >
                          Submit Quiz
                        </Button>
                      </div>
                    ) : (
                      <Button
                        className="w-full"
                        onClick={() => setSelectedQuiz(quiz.id)}
                        disabled={quiz.completed}
                      >
                        {quiz.completed ? "Completed" : "Start Quiz"}
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      <BottomNavigation />
    </Tabs>
  )
}
