import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="w-full py-4 px-6 md:px-12 bg-gray-900 text-white shadow-lg fixed top-0 z-50">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <Link
          href="#"
          className="text-2xl font-bold text-teal-400 hover:text-teal-300 transition-colors"
          prefetch={false}
        >
          NekolusDrshKelvin(Mr.Kaung)
        </Link>
        <div className="space-x-4 hidden md:flex">
          <Link href="#about" className="text-lg hover:text-teal-400 transition-colors" prefetch={false}>
            About
          </Link>
          <Link href="#skills" className="text-lg hover:text-teal-400 transition-colors" prefetch={false}>
            Skills
          </Link>
          <Link href="#projects" className="text-lg hover:text-teal-400 transition-colors" prefetch={false}>
            Projects
          </Link>
          <Link href="#contact" className="text-lg hover:text-teal-400 transition-colors" prefetch={false}>
            Contact
          </Link>
        </div>
        <Button className="md:hidden bg-teal-500 hover:bg-teal-600 text-white">Menu</Button>{" "}
        {/* Placeholder for mobile menu */}
      </nav>
    </header>
  )
}
