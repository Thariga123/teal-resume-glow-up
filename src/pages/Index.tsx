
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, FileText, ExternalLink } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="w-full py-6 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-2xl font-bold text-teal-600">R. Tharigashrinithi</h1>
        <nav className="mt-4 md:mt-0">
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="text-foreground hover:text-teal-600 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="text-foreground hover:text-teal-600 transition-colors">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="text-foreground hover:text-teal-600 transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="text-foreground hover:text-teal-600 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container px-4 py-8">
        {/* Hero Section */}
        <section className="py-16 flex flex-col items-center text-center">
          <div className="w-32 h-32 rounded-full bg-teal-200 mb-6 flex items-center justify-center">
            <span className="text-teal-800 text-4xl font-bold">RT</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground">
            R. Tharigashrinithi
          </h1>
          <h2 className="text-xl md:text-2xl text-teal-600 mb-6">Electronics & Communication Engineer</h2>
          <p className="text-lg max-w-2xl mb-8 text-foreground">
            Passionate ECE graduate with expertise in electronic systems, communication protocols, and a drive for innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-teal-600 hover:bg-teal-700">
              <FileText className="mr-2 h-4 w-4" />
              Download CV
            </Button>
            <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </div>
        </section>
        
        <Separator className="my-12 bg-teal-100" />

        {/* About Section */}
        <section id="about" className="py-12">
          <h2 className="text-3xl font-bold mb-6 text-teal-600">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-foreground mb-4 leading-relaxed">
                Hello! I'm R. Tharigashrinithi, an Electronics and Communication Engineering graduate from Sri Nandhanam 
                College of Engineering and Technology. I'm passionate about developing innovative solutions and have a strong foundation 
                in electronic systems design, circuit analysis, and communication protocols.
              </p>
              <p className="text-foreground mb-4 leading-relaxed">
                Throughout my academic career, I've worked on various projects that have enhanced my technical skills and 
                problem-solving abilities. I am dedicated to continuous learning and staying updated with the latest technologies 
                in the ECE domain.
              </p>
            </div>
            <div className="bg-teal-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-teal-700">Education</h3>
              <div className="mb-4">
                <p className="font-medium">B.E. in Electronics and Communication Engineering</p>
                <p className="text-teal-600">Sri Nandhanam College of Engineering and Technology</p>
                <p className="text-sm text-muted-foreground">2020 - 2024</p>
              </div>
              <div>
                <p className="font-medium">Higher Secondary School</p>
                <p className="text-teal-600">XYZ Higher Secondary School</p>
                <p className="text-sm text-muted-foreground">2018 - 2020</p>
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-12 bg-teal-100" />

        {/* Skills Section */}
        <section id="skills" className="py-12">
          <h2 className="text-3xl font-bold mb-6 text-teal-600">My Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-teal-100 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-teal-700">Technical Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    <span>Circuit Design and Analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    <span>PCB Design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    <span>Microcontroller Programming</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    <span>Signal Processing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-teal-100 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-teal-700">Software Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    <span>MATLAB</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    <span>Proteus</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    <span>Arduino IDE</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    <span>C/C++ Programming</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-teal-100 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-teal-700">Soft Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    <span>Problem Solving</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    <span>Team Collaboration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    <span>Project Management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    <span>Communication</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12 bg-teal-100" />

        {/* Projects Section */}
        <section id="projects" className="py-12">
          <h2 className="text-3xl font-bold mb-6 text-teal-600">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-teal-100 overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-teal-400 to-teal-600 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Project Image</span>
              </div>
              <CardHeader>
                <CardTitle className="text-teal-700">Smart Home Automation System</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-foreground">
                  Developed a comprehensive IoT-based home automation system that allows users to control household 
                  appliances remotely using a mobile application.
                </p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-xs">Arduino</span>
                  <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-xs">ESP8266</span>
                  <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-xs">IoT</span>
                </div>
                <Button variant="outline" size="sm" className="text-teal-600 border-teal-600">
                  View Details <ExternalLink className="ml-2 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-teal-100 overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-teal-400 to-teal-600 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Project Image</span>
              </div>
              <CardHeader>
                <CardTitle className="text-teal-700">Wireless Health Monitoring Device</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-foreground">
                  Created a portable health monitoring system that measures vital signs and transmits data wirelessly 
                  to healthcare providers for remote patient monitoring.
                </p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-xs">Microcontrollers</span>
                  <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-xs">Sensors</span>
                  <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-xs">Bluetooth</span>
                </div>
                <Button variant="outline" size="sm" className="text-teal-600 border-teal-600">
                  View Details <ExternalLink className="ml-2 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12 bg-teal-100" />

        {/* Contact Section */}
        <section id="contact" className="py-12">
          <h2 className="text-3xl font-bold mb-6 text-teal-600">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-foreground mb-6">
                I'm always interested in new opportunities and collaborations. Feel free to reach out to me through
                any of the following platforms:
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-teal-600" />
                  <a href="mailto:tharigashrinithi@example.com" className="text-foreground hover:text-teal-600">
                    tharigashrinithi@example.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-teal-600" />
                  <a 
                    href="https://linkedin.com/in/r-tharigashrinithi-ece-snsce" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-teal-600"
                  >
                    linkedin.com/in/r-tharigashrinithi-ece-snsce
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-teal-600" />
                  <a 
                    href="https://github.com/tharigashrinithi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-teal-600"
                  >
                    github.com/tharigashrinithi
                  </a>
                </div>
              </div>
            </div>
            
            <Card className="border-teal-100 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-teal-700">Send me a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full rounded-md border-teal-200 focus:border-teal-400 focus:ring-teal-400 bg-background text-foreground"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full rounded-md border-teal-200 focus:border-teal-400 focus:ring-teal-400 bg-background text-foreground"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full rounded-md border-teal-200 focus:border-teal-400 focus:ring-teal-400 bg-background text-foreground"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-teal-50 py-8 mt-12">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-teal-800 mb-4 md:mb-0">© 2024 R. Tharigashrinithi. All rights reserved.</p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/in/r-tharigashrinithi-ece-snsce" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-800"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/tharigashrinithi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-800"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="mailto:tharigashrinithi@example.com"
                className="text-teal-600 hover:text-teal-800"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
