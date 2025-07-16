import ProjectCard from "@/components/ui/project-card"

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce application with user authentication, product catalog, shopping cart, and payment integration.",
    imageUrl: "/images/ecommerce.png", // Updated image URL
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    liveUrl: "#",
    tags: ["Next.js", "Node.js", "Express", "MongoDB", "Stripe"],
  },
  {
    title: "Task Management App",
    description:
      "A responsive task management tool with drag-and-drop functionality, real-time updates, and user collaboration features.",
    imageUrl: "/images/task-management.png", // Updated image URL
    githubUrl: "https://github.com/yourusername/task-app",
    liveUrl: "#",
    tags: ["React", "Firebase", "Tailwind CSS", "WebSockets"],
  },
  {
    title: "Personal Blog",
    description:
      "A minimalist blog platform built for sharing articles and insights, featuring markdown support and SEO optimization.",
    imageUrl: "/images/personal-blog.png", // Updated image URL
    githubUrl: "https://github.com/yourusername/personal-blog",
    liveUrl: "#",
    tags: ["Next.js", "MDX", "GraphQL", "PostgreSQL"],
  },
  {
    title: "AI Chatbot Integration",
    description:
      "An application demonstrating integration with a large language model for interactive conversational AI.",
    imageUrl: "/images/ai-chatbot.png", // Updated image URL
    githubUrl: "https://github.com/yourusername/ai-chatbot",
    liveUrl: "#",
    tags: ["Next.js", "AI SDK", "OpenAI", "TypeScript"],
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-20 px-6 md:px-12 bg-gray-900 text-gray-100 border-b border-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-teal-400">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
