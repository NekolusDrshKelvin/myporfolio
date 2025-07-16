import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 to-gray-800 text-white overflow-hidden"
    >
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-5"></div>
      </div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center px-6 max-w-6xl gap-12">
        <div className="flex-shrink-0">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-teal-400 shadow-2xl">
            <Image src="/images/profile.jpeg" alt="NekolusDrshKelvin Profile" fill className="object-cover" priority />
          </div>
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-up">
            Hi, I&apos;m <span className="text-teal-400">NekolusDrshKelvin</span>.
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 animate-fade-in-up delay-200">
            A <span className="font-medium text-teal-300">Full-Stack Developer</span> building modern web experiences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 animate-fade-in-up delay-400">
            <Button
              asChild
              className="bg-teal-500 hover:bg-teal-600 text-white text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <Link href="#projects">
                View My Work <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              asChild
              className="border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 bg-transparent"
            >
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
