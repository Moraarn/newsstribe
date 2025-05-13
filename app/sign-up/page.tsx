"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowLeft, Mail, User, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"

export default function SignUpPage() {
  const [step, setStep] = useState<number>(1)
  const totalSteps = 3

  const handleNextStep = () => {
    setStep(step + 1)
  }

  const handlePrevStep = () => {
    setStep(step - 1)
  }

  const progressPercentage = (step / totalSteps) * 100

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="border-b border-gray-100 p-4 backdrop-blur-lg bg-white/80">
        <div className="container mx-auto">
          <Link href="/" className="flex items-center">
            <ArrowLeft className="h-5 w-5 mr-2" />
            <div className="flex items-center">
              <div className="h-8 w-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white font-bold mr-2 shadow-lg shadow-green-200">
                NT
              </div>
              <h1 className="text-xl font-extrabold bg-gradient-to-r from-green-600 via-emerald-500 to-teal-400 bg-clip-text text-transparent">
                NewsTribe
              </h1>
            </div>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-500">
                Step {step} of {totalSteps}
              </span>
              <span className="text-sm font-medium text-green-600">{Math.round(progressPercentage)}%</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>

          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center">
                <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
                  Create your account
                </h1>
                <p className="text-gray-500 mt-2">Join the tribe and start earning rewards</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100">
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      variant="outline"
                      className="w-full flex items-center justify-center gap-2 py-6 border-2 hover:border-gray-300 hover:bg-gray-50 transition-all"
                    >
                      <svg className="h-5 w-5" viewBox="0 0 24 24">
                        <path
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          fill="#4285F4"
                        />
                        <path
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          fill="#34A853"
                        />
                        <path
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          fill="#EA4335"
                        />
                      </svg>
                      <span className="font-medium">Google</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full flex items-center justify-center gap-2 py-6 border-2 hover:border-gray-300 hover:bg-gray-50 transition-all"
                    >
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z" />
                      </svg>
                      <span className="font-medium">Apple</span>
                    </Button>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-gray-200" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-white px-4 text-gray-500 font-medium">Or continue with email</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700">
                        Email
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                        <Input
                          id="email"
                          placeholder="Enter your email"
                          className="pl-12 py-6 rounded-xl border-gray-200 focus:border-green-500 focus:ring-green-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-gray-700">
                        Password
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                        <Input
                          id="password"
                          type="password"
                          placeholder="Create a password"
                          className="pl-12 py-6 rounded-xl border-gray-200 focus:border-green-500 focus:ring-green-500"
                        />
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 pt-2">
                      <Checkbox
                        id="terms"
                        className="mt-0.5 data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
                      />
                      <label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
                        I agree to the{" "}
                        <a href="#" className="text-green-600 hover:underline font-medium">
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-green-600 hover:underline font-medium">
                          Privacy Policy
                        </a>
                      </label>
                    </div>
                  </div>

                  <Button
                    className="w-full py-6 bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white font-medium shadow-lg shadow-green-100/50 rounded-xl"
                    onClick={handleNextStep}
                  >
                    Continue
                  </Button>

                  <p className="text-center text-sm text-gray-500">
                    Already have an account?{" "}
                    <Link href="/sign-in" className="text-green-600 hover:underline font-medium">
                      Sign in
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center">
                <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
                  Personalize your experience
                </h1>
                <p className="text-gray-500 mt-2">Select topics you're interested in</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100">
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border-2 border-gray-100 rounded-xl p-4 cursor-pointer hover:border-green-500 hover:bg-green-50 transition-all group">
                      <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center mb-3 group-hover:bg-green-200 transition-colors">
                        <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                          />
                        </svg>
                      </div>
                      <h3 className="font-medium text-gray-900">Politics</h3>
                      <p className="text-xs text-gray-500 mt-1">Government, policy & elections</p>
                    </div>
                    <div className="border-2 border-gray-100 rounded-xl p-4 cursor-pointer hover:border-green-500 hover:bg-green-50 transition-all group">
                      <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mb-3 group-hover:bg-blue-200 transition-colors">
                        <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="font-medium text-gray-900">Business</h3>
                      <p className="text-xs text-gray-500 mt-1">Economy, markets & finance</p>
                    </div>
                    <div className="border-2 border-gray-100 rounded-xl p-4 cursor-pointer hover:border-green-500 hover:bg-green-50 transition-all group">
                      <div className="bg-purple-100 w-10 h-10 rounded-full flex items-center justify-center mb-3 group-hover:bg-purple-200 transition-colors">
                        <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <h3 className="font-medium text-gray-900">Technology</h3>
                      <p className="text-xs text-gray-500 mt-1">Innovation, startups & digital</p>
                    </div>
                    <div className="border-2 border-gray-100 rounded-xl p-4 cursor-pointer hover:border-green-500 hover:bg-green-50 transition-all group">
                      <div className="bg-orange-100 w-10 h-10 rounded-full flex items-center justify-center mb-3 group-hover:bg-orange-200 transition-colors">
                        <svg className="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                          />
                        </svg>
                      </div>
                      <h3 className="font-medium text-gray-900">Sports</h3>
                      <p className="text-xs text-gray-500 mt-1">Football, athletics & more</p>
                    </div>
                    <div className="border-2 border-gray-100 rounded-xl p-4 cursor-pointer hover:border-green-500 hover:bg-green-50 transition-all group">
                      <div className="bg-pink-100 w-10 h-10 rounded-full flex items-center justify-center mb-3 group-hover:bg-pink-200 transition-colors">
                        <svg className="w-5 h-5 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="font-medium text-gray-900">Entertainment</h3>
                      <p className="text-xs text-gray-500 mt-1">Music, film & culture</p>
                    </div>
                    <div className="border-2 border-gray-100 rounded-xl p-4 cursor-pointer hover:border-green-500 hover:bg-green-50 transition-all group">
                      <div className="bg-red-100 w-10 h-10 rounded-full flex items-center justify-center mb-3 group-hover:bg-red-200 transition-colors">
                        <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="font-medium text-gray-900">Lifestyle</h3>
                      <p className="text-xs text-gray-500 mt-1">Health, food & travel</p>
                    </div>
                  </div>

                  <div className="flex justify-between pt-4">
                    <Button
                      variant="outline"
                      onClick={handlePrevStep}
                      className="border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700 font-medium rounded-xl"
                    >
                      Back
                    </Button>
                    <Button
                      className="bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white font-medium shadow-lg shadow-green-100/50 rounded-xl"
                      onClick={handleNextStep}
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="text-center">
                <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
                  Almost there!
                </h1>
                <p className="text-gray-500 mt-2">Complete your profile</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100">
                <div className="space-y-6">
                  <div className="flex flex-col items-center justify-center mb-6">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center mb-4 relative group cursor-pointer">
                      <User className="h-10 w-10 text-gray-400" />
                      <div className="absolute inset-0 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white text-xs font-medium">Upload</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">Add a profile picture</p>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullname" className="text-gray-700">
                        Full Name
                      </Label>
                      <div className="relative">
                        <User className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                        <Input
                          id="fullname"
                          placeholder="Enter your full name"
                          className="pl-12 py-6 rounded-xl border-gray-200 focus:border-green-500 focus:ring-green-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="username" className="text-gray-700">
                        Username
                      </Label>
                      <div className="relative">
                        <span className="absolute left-4 top-3.5 text-gray-400">@</span>
                        <Input
                          id="username"
                          placeholder="Choose a username"
                          className="pl-12 py-6 rounded-xl border-gray-200 focus:border-green-500 focus:ring-green-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-3 pt-2">
                      <Label className="text-gray-700">Notifications</Label>
                      <div className="space-y-3 bg-gray-50 p-4 rounded-xl">
                        <div className="flex items-start space-x-3">
                          <Checkbox
                            id="notify-news"
                            defaultChecked
                            className="mt-0.5 data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
                          />
                          <div>
                            <label htmlFor="notify-news" className="font-medium text-gray-700">
                              Breaking news alerts
                            </label>
                            <p className="text-xs text-gray-500 mt-0.5">Get notified about important breaking news</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Checkbox
                            id="notify-quizzes"
                            defaultChecked
                            className="mt-0.5 data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
                          />
                          <div>
                            <label htmlFor="notify-quizzes" className="font-medium text-gray-700">
                              Daily quizzes and challenges
                            </label>
                            <p className="text-xs text-gray-500 mt-0.5">Be the first to know about new quizzes</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Checkbox
                            id="notify-rewards"
                            defaultChecked
                            className="mt-0.5 data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
                          />
                          <div>
                            <label htmlFor="notify-rewards" className="font-medium text-gray-700">
                              Reward opportunities
                            </label>
                            <p className="text-xs text-gray-500 mt-0.5">Get alerts about new rewards and promotions</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between pt-4">
                    <Button
                      variant="outline"
                      onClick={handlePrevStep}
                      className="border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700 font-medium rounded-xl"
                    >
                      Back
                    </Button>
                    <Link href="/home">
                      <Button className="bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white font-medium shadow-lg shadow-green-100/50 rounded-xl">
                        Complete Sign Up
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
