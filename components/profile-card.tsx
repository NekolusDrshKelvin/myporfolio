import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, Twitter } from "lucide-react"

interface ProfileCardProps {
  name: string
  title: string
  bio: string
  avatarUrl?: string
  githubUrl?: string
  linkedinUrl?: string
  twitterUrl?: string
  email?: string
}

export default function ProfileCard({
  name,
  title,
  bio,
  avatarUrl = "/placeholder.svg?height=128&width=128",
  githubUrl,
  linkedinUrl,
  twitterUrl,
  email,
}: ProfileCardProps) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-950 p-4">
      <Card className="w-full max-w-md mx-auto shadow-xl rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800">
        <CardHeader className="flex flex-col items-center p-8 bg-gray-800 dark:bg-gray-900 text-white">
          <Avatar className="w-32 h-32 border-4 border-white dark:border-gray-700 shadow-lg mb-4">
            <AvatarImage src={avatarUrl || "/placeholder.svg"} alt={`${name}'s avatar`} />
            <AvatarFallback className="bg-gray-600 text-white text-2xl">
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <CardTitle className="text-3xl font-bold tracking-tight">{name}</CardTitle>
          <CardDescription className="text-lg text-gray-300 dark:text-gray-400 mt-1">{title}</CardDescription>
        </CardHeader>
        <CardContent className="p-8 text-center">
          <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed text-base">{bio}</p>
          <div className="flex justify-center gap-6 mb-8">
            {githubUrl && (
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              >
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-7 w-7" />
                </a>
              </Button>
            )}
            {linkedinUrl && (
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-7 w-7" />
                </a>
              </Button>
            )}
            {twitterUrl && (
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-gray-500 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
              >
                <a href={twitterUrl} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-7 w-7" />
                </a>
              </Button>
            )}
          </div>
          {email && (
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition-colors duration-200">
              <Mail className="mr-2 h-5 w-5" /> Contact Me
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
