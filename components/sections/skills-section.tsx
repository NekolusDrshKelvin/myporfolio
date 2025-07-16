import { Code, Database, Cloud, GitBranch, Server, LayoutDashboard } from "lucide-react"

const skills = [
  { name: "JavaScript", icon: <Code className="h-8 w-8 text-teal-400" /> },
  { name: "TypeScript", icon: <Code className="h-8 w-8 text-teal-400" /> },
  { name: "React", icon: <LayoutDashboard className="h-8 w-8 text-teal-400" /> },
  { name: "Next.js", icon: <LayoutDashboard className="h-8 w-8 text-teal-400" /> },
  { name: "Node.js", icon: <Server className="h-8 w-8 text-teal-400" /> },
  { name: "Express.js", icon: <Server className="h-8 w-8 text-teal-400" /> },
  { name: "PostgreSQL", icon: <Database className="h-8 w-8 text-teal-400" /> },
  { name: "MongoDB", icon: <Database className="h-8 w-8 text-teal-400" /> },
  { name: "Tailwind CSS", icon: <LayoutDashboard className="h-8 w-8 text-teal-400" /> },
  { name: "Git", icon: <GitBranch className="h-8 w-8 text-teal-400" /> },
  { name: "Docker", icon: <Cloud className="h-8 w-8 text-teal-400" /> },
  { name: "AWS", icon: <Cloud className="h-8 w-8 text-teal-400" /> },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full py-20 px-6 md:px-12 bg-gray-950 text-gray-100 border-b border-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-teal-400">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {skill.icon}
              <p className="mt-3 text-lg font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
