import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-20 px-6 md:px-12 bg-gray-950 text-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-teal-400">Get In Touch</h2>
        <p className="text-lg leading-relaxed mb-8">
          Have a project in mind or just want to say hello? Feel free to reach out!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-12 items-start justify-center">
          {" "}
          {/* Changed to 1 column */}
          <div className="space-y-6 text-left mx-auto">
            {" "}
            {/* Centered the content */}
            <div className="flex items-center space-x-4">
              <Mail className="h-8 w-8 text-teal-400" />
              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-gray-300">ksett2024@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="h-8 w-8 text-teal-400" />
              <div>
                <h3 className="text-xl font-semibold">Phone</h3>
                <p className="text-gray-300">+959450363062</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="h-8 w-8 text-teal-400" />
              <div>
                <h3 className="text-xl font-semibold">Location</h3>
                <p className="text-gray-300">Yangon, Myanmar</p>
              </div>
            </div>
          </div>
          {/* Removed the form element entirely */}
        </div>
      </div>
    </section>
  )
}
