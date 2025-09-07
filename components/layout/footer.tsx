import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full py-8 px-6 md:px-12 bg-gray-900 text-gray-400 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} NekolusDrshKelvin. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <Link
            href="https://github.com/NekolusDrshKelvin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-teal-400 transition-colors"
          >
            <Github className="h-6 w-6" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/nekolus-drsh-kelvin-48b215383?trk=contact-info"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-teal-400 transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </Link>
          
          <Link
            href="mailto:ksett2024@gmail.com"
            aria-label="Email"
            className="hover:text-teal-400 transition-colors"
          >
            <Mail className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
