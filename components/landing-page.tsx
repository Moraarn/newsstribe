import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Award, Gift, Newspaper, TrendingUp, ChevronRight, CheckCircle } from "lucide-react"

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navigation */}
      <header className="sticky top-0 z-10 backdrop-blur-lg bg-white/80 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="h-10 w-10 bg-gradient-to-br from-primary to-primary rounded-xl flex items-center justify-center text-white font-bold mr-2 shadow-lg shadow-primary-200">
              NT
            </div>
            <h1 className="text-2xl font-extrabold bg-gradient-to-r from-primary via-primary to-primary bg-clip-text text-transparent">
              NewsTribe
            </h1>
          </div>
          <div className="flex items-center space-x-3">
            <Link href="/sign-in">
              <Button variant="ghost" size="sm" className="font-medium">
                Sign In
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button
                size="sm"
                className="bg-gradient-to-r from-primary to-primary hover:from-primary-700 hover:to-primary-600 text-white font-medium shadow-md shadow-primary-100"
              >
                Join Now
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-white to-primary -z-10"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary rounded-full opacity-10 blur-3xl"></div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <Badge className="mb-6 bg-primary text-primary hover:bg-primary-200 hover:text-primary-900 text-sm py-1.5 px-4 rounded-full font-medium">
                For Gen Z Kenyans
              </Badge>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
                Get <span className="text-primary">Rewarded</span> for Staying Informed
              </h2>
              <p className="text-lg md:text-xl mb-8 text-gray-600 leading-relaxed max-w-lg">
                NewsTribe transforms how you consume news. Read, engage, earn points, and redeem for airtime, data
                bundles, and exclusive experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/sign-up">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary hover:from-primary-700 hover:to-primary-600 text-white font-medium shadow-lg shadow-primary-100/50 rounded-xl"
                  >
                    Join the Tribe
                  </Button>
                </Link>
                <Link href="/sign-in">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-2 border-gray-200 text-gray-700 hover:bg-gray-50 font-medium rounded-xl"
                  >
                    Sign In
                  </Button>
                </Link>
              </div>

              <div className="mt-10 flex items-center space-x-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br ${
                        i === 1
                          ? "from-orange-400 to-red-400"
                          : i === 2
                            ? "from-blue-400 to-indigo-400"
                            : i === 3
                              ? "from-primary to-primary"
                              : "from-purple-400 to-pink-400"
                      }`}
                    ></div>
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-bold text-gray-900">10K+</span> active users
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <div className="relative w-[280px] h-[560px] md:w-[320px] md:h-[640px]">
                <div className="absolute inset-0 bg-black rounded-[40px] overflow-hidden border-[12px] border-black shadow-2xl">
                  <div className="relative h-full w-full overflow-hidden rounded-[28px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary opacity-20"></div>
                    <Image
                      src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg"
                      alt="NewsTribe App"
                      width={320}
                      height={640}
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 mb-4 shadow-xl">
                        <div className="flex items-center justify-between mb-2">
                          <Badge className="bg-red-500 text-white">Breaking</Badge>
                          <Badge className="bg-primary text-black flex items-center gap-1">
                            <Award className="h-3 w-3" />
                            +15 pts
                          </Badge>
                        </div>
                        <h3 className="text-base font-bold text-gray-900 leading-tight">
                          Kenya's Tech Boom: Nairobi Emerges as Africa's Silicon Savannah
                        </h3>
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 mr-2"></div>
                            <span className="text-xs text-gray-600">James Mwangi</span>
                          </div>
                          <span className="text-xs text-gray-500">4 min read</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary rounded-full opacity-20 blur-2xl"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary rounded-full opacity-20 blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary text-primary hover:bg-primary-200 hover:text-primary-900 text-sm py-1.5 px-4 rounded-full font-medium">
              Features
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Join NewsTribe?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A new way to stay informed while earning rewards that matter to you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary to-primary rounded-2xl p-8 border border-primary shadow-sm hover:shadow-md transition-all">
              <div className="bg-gradient-to-br from-primary to-primary w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary-200">
                <Award className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Earn Points</h3>
              <p className="text-gray-600 mb-6">
                Get rewarded for reading articles, taking quizzes, and engaging with content that matters to you.
              </p>
              <div className="flex items-center text-primary font-medium">
                <span>Learn more</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-primary rounded-2xl p-8 border border-primary shadow-sm hover:shadow-md transition-all">
              <div className="bg-gradient-to-br from-primary to-primary w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary-200">
                <Gift className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Redeem Rewards</h3>
              <p className="text-gray-600 mb-6">
                Turn your points into airtime, data bundles, event tickets, and exclusive content access.
              </p>
              <div className="flex items-center text-primary font-medium">
                <span>Learn more</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-primary rounded-2xl p-8 border border-primary shadow-sm hover:shadow-md transition-all">
              <div className="bg-gradient-to-br from-primary to-primary w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary-200">
                <Newspaper className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Content</h3>
              <p className="text-gray-600 mb-6">
                Access trusted news from Nation Media Group, personalized to your interests and preferences.
              </p>
              <div className="flex items-center text-primary font-medium">
                <span>Learn more</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200 hover:text-blue-900 text-sm py-1.5 px-4 rounded-full font-medium">
              Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Four simple steps to start earning rewards while staying informed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md h-full">
                <div className="bg-gradient-to-br from-primary to-primary w-12 h-12 rounded-full flex items-center justify-center mb-6 text-white font-bold text-xl shadow-lg shadow-primary-200">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Sign Up</h3>
                <p className="text-gray-600">Create your account and select your interests</p>
              </div>
              <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent -translate-y-1/2 -z-10"></div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md h-full">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-500 w-12 h-12 rounded-full flex items-center justify-center mb-6 text-white font-bold text-xl shadow-lg shadow-blue-200">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">Read & Engage</h3>
                <p className="text-gray-600">Consume news and participate in quizzes and polls</p>
              </div>
              <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent -translate-y-1/2 -z-10"></div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md h-full">
                <div className="bg-gradient-to-br from-primary to-primary w-12 h-12 rounded-full flex items-center justify-center mb-6 text-white font-bold text-xl shadow-lg shadow-primary-200">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3">Earn Points</h3>
                <p className="text-gray-600">Collect points for every interaction and activity</p>
              </div>
              <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent -translate-y-1/2 -z-10"></div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md h-full">
                <div className="bg-gradient-to-br from-primary to-primary w-12 h-12 rounded-full flex items-center justify-center mb-6 text-white font-bold text-xl shadow-lg shadow-primary-200">
                  4
                </div>
                <h3 className="text-xl font-bold mb-3">Redeem Rewards</h3>
                <p className="text-gray-600">Exchange your points for valuable rewards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials/Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary to-primary rounded-2xl p-8 border border-primary shadow-sm flex flex-col items-center text-center">
              <TrendingUp className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent">
                10K+
              </h3>
              <p className="text-gray-600 font-medium">Active Users</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 shadow-sm flex flex-col items-center text-center">
              <Newspaper className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                500+
              </h3>
              <p className="text-gray-600 font-medium">Daily Articles</p>
            </div>

            <div className="bg-gradient-to-br from-primary to-primary rounded-2xl p-8 border border-primary shadow-sm flex flex-col items-center text-center">
              <Gift className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent">
                5M+
              </h3>
              <p className="text-gray-600 font-medium">Points Redeemed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200 hover:text-purple-900 text-sm py-1.5 px-4 rounded-full font-medium">
              Testimonials
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied users who are earning while staying informed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
                    alt="Wanjiku M."
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Wanjiku M.</h4>
                  <p className="text-gray-500 text-sm">University Student</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "I've earned enough points for 3GB of data this month just by reading news I was going to read anyway.
                NewsTribe makes staying informed rewarding!"
              </p>
              <div className="flex text-primary">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
                    alt="David O."
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">David O.</h4>
                  <p className="text-gray-500 text-sm">Tech Professional</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "The daily quizzes are my favorite feature. They help me retain information and I've learned so much
                about current events while earning rewards."
              </p>
              <div className="flex text-primary">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary mr-4"></div>
                <div>
                  <h4 className="font-bold">Aisha M.</h4>
                  <p className="text-gray-500 text-sm">Small Business Owner</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "I redeemed my points for a ticket to a business networking event. The rewards are actually valuable and
                relevant to my interests!"
              </p>
              <div className="flex text-primary">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary -z-10"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary rounded-full opacity-20 blur-3xl"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Join the Tribe?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-primary">
            Start earning points, staying informed, and redeeming rewards today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/sign-up">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 font-medium shadow-lg shadow-primary-900/20 rounded-xl"
              >
                Get Started Now
              </Button>
            </Link>
            <Link href="#features">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 font-medium rounded-xl"
              >
                Learn More
              </Button>
            </Link>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-2 text-white">
              <CheckCircle className="h-5 w-5 text-primary-300" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <CheckCircle className="h-5 w-5 text-primary-300" />
              <span>Free to join</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <CheckCircle className="h-5 w-5 text-primary-300" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between mb-12">
            <div className="mb-10 md:mb-0 md:max-w-xs">
              <div className="flex items-center mb-6">
                <div className="h-10 w-10 bg-gradient-to-br from-primary to-primary rounded-xl flex items-center justify-center text-white font-bold mr-2 shadow-lg shadow-primary-900/20">
                  NT
                </div>
                <h1 className="text-2xl font-extrabold text-white">NewsTribe</h1>
              </div>
              <p className="text-gray-400 mb-6">
                A gamified news platform for Gen Z Kenyans, powered by Nation Media Group.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
              <div>
                <h3 className="font-bold text-lg mb-4">Company</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Press
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Partners
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4">Legal</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Terms
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Cookies
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Licenses
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4">Resources</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 NewsTribe. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookies Settings
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
