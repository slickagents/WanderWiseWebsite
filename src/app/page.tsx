import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { History, MapPin, Coffee, Brain, Bell, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Image
            src="/WanderWise_logo.png"
            alt="WanderWise Logo"
            width={140}
            height={140}
            className="h-12 w-auto"
          />
          <span className="sr-only">WanderWise</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#detailed-features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#notify">
            Stay Updated
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            About
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-[#2A3990] text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Discover Your World with WanderWise
                  </h1>
                  <p className="max-w-[600px] text-gray-200 md:text-xl">
                    Your personal guide to exploring tourist destinations, uncovering local history, and finding the best deals
                    around you.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <p className="text-lg font-semibold text-[#FFB800]">Coming soon on both Android and iOS!</p>
                </div>
              </div>
              <Image
                alt="App preview"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:aspect-square"
                height="550"
                src="/WanderWise_logo.png"
                width="550"
              />
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Explore with Confidence</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  WanderWise brings you personalized recommendations and fascinating facts about your surroundings.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="relative overflow-hidden">
                <CardContent className="flex flex-col items-center gap-2 p-6">
                  <MapPin className="h-12 w-12 text-[#FFB800]" />
                  <h3 className="text-xl font-bold">Tourist Destinations</h3>
                  <p className="text-sm text-gray-500 text-center">
                    Discover popular attractions and hidden gems wherever you go
                  </p>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden">
                <CardContent className="flex flex-col items-center gap-2 p-6">
                  <History className="h-12 w-12 text-[#FFB800]" />
                  <h3 className="text-xl font-bold">Local History</h3>
                  <p className="text-sm text-gray-500 text-center">
                    Uncover fascinating stories about the places around you
                  </p>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden">
                <CardContent className="flex flex-col items-center gap-2 p-6">
                  <Coffee className="h-12 w-12 text-[#FFB800]" />
                  <h3 className="text-xl font-bold">Best Deals</h3>
                  <p className="text-sm text-gray-500 text-center">
                    Find great offers at local cafes and restaurants
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="detailed-features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Powerful Features</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover how WanderWise uses cutting-edge technology to enhance your exploration experience.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card className="relative overflow-hidden">
                <CardContent className="flex flex-col items-center gap-2 p-6">
                  <Brain className="h-12 w-12 text-[#FFB800]" />
                  <h3 className="text-xl font-bold">State-of-the-Art AI</h3>
                  <p className="text-sm text-gray-500 text-center">
                    WanderWise uses advanced AI to provide concise, interesting, and personalized facts about places based on
                    websites, reviews, and web searches.
                  </p>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden">
                <CardContent className="flex flex-col items-center gap-2 p-6">
                  <Sparkles className="h-12 w-12 text-[#FFB800]" />
                  <h3 className="text-xl font-bold">Personalized Experience</h3>
                  <p className="text-sm text-gray-500 text-center">
                    Using the latest artificial intelligence technology, WanderWise personalizes facts for each individual user,
                    ensuring a unique exploration experience.
                  </p>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden">
                <CardContent className="flex flex-col items-center gap-2 p-6">
                  <Bell className="h-12 w-12 text-[#FFB800]" />
                  <h3 className="text-xl font-bold">Smart Notifications</h3>
                  <p className="text-sm text-gray-500 text-center">
                    WanderWise is always at work! Receive push notifications with the most interesting facts about places around
                    you, constantly improving based on your preferences.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="notify" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Stay Updated</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Be the first to know when WanderWise launches. Sign up for our newsletter to receive updates and early access.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col gap-2 min-[400px]:flex-row">
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
                    placeholder="Enter your email"
                    type="email"
                    required
                  />
                  <Button type="submit" className="bg-[#2A3990] text-white hover:bg-[#2A3990]/90">
                    Notify Me
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 WanderWise. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
