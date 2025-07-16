import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  githubUrl?: string
  liveUrl?: string
  tags: string[]
}

export default function ProjectCard({ title, description, imageUrl, githubUrl, liveUrl, tags }: ProjectCardProps) {
  return (
    <Card className="bg-gray-800 text-gray-100 border border-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl font-bold text-teal-400">{title}</CardTitle>
        <CardDescription className="text-gray-300 text-sm">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-700 rounded-full px-3 py-1 text-xs font-semibold text-gray-200 mr-2 mb-1"
            >
              {tag}
            </span>
          ))}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <p className="text-gray-200 mb-4 text-base">{description}</p>
        <div className="flex gap-3 mt-auto">
          {liveUrl && (
            <Button asChild className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md text-sm">
              <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
              </Link>
            </Button>
          )}
          {githubUrl && (
            <Button
              variant="outline"
              asChild
              className="border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white px-4 py-2 rounded-md text-sm bg-transparent"
            >
              <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
