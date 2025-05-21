
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, FileText, ExternalLink, MapPin, Calendar, Award, Rocket, Code, BookOpen, Star, Briefcase, Heart } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="w-full py-6 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-2xl font-bold text-teal-600">Thariga Shrinithi R</h1>
        <nav className="mt-4 md:mt-0">
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="text-foreground hover:text-teal-600 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#education" className="text-foreground hover:text-teal-600 transition-colors">
                Education
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
          <div className="w-32 h-32 rounded-full overflow-hidden mb-6">
            <Avatar className="w-full h-full">
              <AvatarImage src="/profile-photo.png" alt="Thariga Shrinithi R" className="w-full h-full object-cover" />
              <AvatarFallback className="bg-teal-200 text-teal-800 text-4xl font-bold">TS</AvatarFallback>
            </Avatar>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground">
            Thariga Shrinithi R
          </h1>
          <h2 className="text-xl md:text-2xl text-teal-600 mb-6">✨ An Ambitious and Versatile Learner ✨</h2>
          <p className="text-lg max-w-2xl mb-8 text-foreground">
            Aspiring Engineering student driven to develop innovative solutions through technical expertise and creativity. 
            Passionate about continuous learning and eager to apply skills in real-world projects.
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
          <h2 className="text-3xl font-bold mb-6 text-teal-600">About Me 🌟</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-foreground mb-4 leading-relaxed">
                Hello! I'm Thariga Shrinithi R, an Electronics and Communication Engineering student from SNS College
                of Engineering. I'm passionate about developing innovative solutions and have a strong foundation 
                in electronic systems design, circuit analysis, and communication protocols.
              </p>
              <p className="text-foreground mb-4 leading-relaxed">
                I'm seeking challenging opportunities to contribute, grow, and make a meaningful impact. Throughout my academic 
                career, I've worked on various projects that have enhanced my technical skills and problem-solving abilities. 
                I am dedicated to continuous learning and staying updated with the latest technologies.
              </p>
            </div>
            <div className="bg-teal-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-teal-700 flex items-center">
                <BookOpen className="mr-2 h-5 w-5 text-teal-600" /> Education
              </h3>
              <div id="education" className="mb-4">
                <p className="font-medium">B.E. in Electronics and Communication Engineering</p>
                <p className="text-teal-600">SNS College of Engineering</p>
                <p className="text-sm text-muted-foreground">2022 - 2026 | 9.8 CGPA (till 5th Sem)</p>
              </div>
              <div>
                <p className="font-medium">Higher Secondary School</p>
                <p className="text-teal-600">KONGUNADU MAT.HR.SEC.SCHOOL</p>
                <p className="text-sm text-muted-foreground">2021 - 2022 | 87.16%</p>
              </div>
              <div className="mt-4">
                <p className="font-medium">SSLC</p>
                <p className="text-sm text-muted-foreground">2019 - 2020 | 98.6%</p>
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-12 bg-teal-100" />

        {/* Value Added Courses Section */}
        <section className="py-12">
          <h2 className="text-3xl font-bold mb-6 text-teal-600">Value Added Courses 📚</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-teal-100 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-teal-700">Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Star className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span>Java Nano degree certificate | Prep Insta | Sep 2023</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span>Salesforce Certified AI Associate | Salesforce | Oct 2024</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span>Salesforce Certified AI Specialist | Salesforce | Oct 2024</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span>HTML | Prep Insta | Dec 2024</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-teal-100 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-teal-700">More Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Star className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span>SecOps Certified Network Security Practitioner | SecOps | Jan 2025</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span>Oracle AI Foundation Associate | Oracle | Feb 2025</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span>SecOps Certified AppSec Practitioner | SecOps | Mar 2025</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12 bg-teal-100" />

        {/* Skills Section */}
        <section id="skills" className="py-12">
          <h2 className="text-3xl font-bold mb-6 text-teal-600">Technical Skills 🛠️</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-teal-100 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-teal-700 flex items-center">
                  <Code className="mr-2 h-5 w-5" /> Programming & Web
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    <span>Java (Basics)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    <span>HTML, CSS, JavaScript</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    <span>React.js, Express.js, Node.js</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    <span>n8n</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-teal-100 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-teal-700 flex items-center">
                  <Rocket className="mr-2 h-5 w-5" /> Design
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    <span>Figma (Basics)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    <span>UI/UX Design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    <span>PCB Designing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-teal-100 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-teal-700 flex items-center">
                  <Award className="mr-2 h-5 w-5" /> Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    <span>Tamil</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    <span>English</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    <span>Basic Hindi</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    <span>Basic Japanese</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12 bg-teal-100" />

        {/* Workshops & Achievements Section */}
        <section className="py-12">
          <h2 className="text-3xl font-bold mb-6 text-teal-600">Workshops & Achievements 🏆</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-teal-100 shadow-sm">
              <CardHeader>
                <CardTitle className="text-teal-700 flex items-center">
                  <Calendar className="mr-2 h-5 w-5" /> Workshops Attended
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500 mt-2"></div>
                    <span>Robotic process automation | Sep 2023</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500 mt-2"></div>
                    <span>PCB designing and fabrication | Dec 2023</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-teal-100 shadow-sm">
              <CardHeader>
                <CardTitle className="text-teal-700 flex items-center">
                  <Award className="mr-2 h-5 w-5" /> Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500 mt-2"></div>
                    <span>Paper presentation - 3rd prize - Dhanalakshmi Srinivasan College of Engineering</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12 bg-teal-100" />

        {/* Projects Section */}
        <section id="projects" className="py-12">
          <h2 className="text-3xl font-bold mb-6 text-teal-600">Projects & Presentations 🚀</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-teal-100 overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-teal-400 to-teal-600 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">IoT Project</span>
              </div>
              <CardHeader>
                <CardTitle className="text-teal-700">IoT Based Irrigation System</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-foreground">
                  Developed a smart irrigation system using IoT technology to automate watering based on soil 
                  moisture levels and environmental conditions.
                </p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-xs">IoT</span>
                  <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-xs">Sensors</span>
                  <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-xs">Automation</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-teal-100 overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-teal-400 to-teal-600 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">RFID Project</span>
              </div>
              <CardHeader>
                <CardTitle className="text-teal-700">Automation of Petrol Bunk using RFID and GSM</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-foreground">
                  Created an automated system for petrol stations using RFID technology for vehicle 
                  identification and GSM modules for communication.
                </p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-xs">RFID</span>
                  <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-xs">GSM</span>
                  <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-xs">Automation</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-teal-100 overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-teal-400 to-teal-600 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Home Automation</span>
              </div>
              <CardHeader>
                <CardTitle className="text-teal-700">Headphones Powered Home Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-foreground">
                  Designed and implemented a home automation system that uses headphones as a control 
                  interface for various household appliances.
                </p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-xs">Home Automation</span>
                  <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-xs">IoT</span>
                  <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-xs">Electronics</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-teal-100 overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-teal-400 to-teal-600 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">AR/VR Concept</span>
              </div>
              <CardHeader>
                <CardTitle className="text-teal-700">AR & VR Integration in ATM</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-foreground">
                  Conceptualized and presented an idea for integrating Augmented Reality and Virtual Reality 
                  technologies into ATM interfaces for enhanced user experience.
                </p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-xs">AR</span>
                  <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-xs">VR</span>
                  <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-xs">Idea Presentation</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12 bg-teal-100" />

        {/* Internship & Social Activities Section */}
        <section className="py-12">
          <h2 className="text-3xl font-bold mb-6 text-teal-600">Internship & Social Activities 🌱</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-teal-100 shadow-sm">
              <CardHeader>
                <CardTitle className="text-teal-700 flex items-center">
                  <Briefcase className="mr-2 h-5 w-5" /> Internship Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-teal-500 mt-2"></div>
                  <div>
                    <p className="font-medium">UI/UX Design (21 days)</p>
                    <p className="text-sm text-muted-foreground">Postulate</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-teal-100 shadow-sm">
              <CardHeader>
                <CardTitle className="text-teal-700 flex items-center">
                  <Heart className="mr-2 h-5 w-5" /> Social Activities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500 mt-2"></div>
                    <span>Planting saplings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500 mt-2"></div>
                    <span>Member of Women Empowerment Cell - SNS College Of Engineering</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12 bg-teal-100" />

        {/* Contact Section */}
        <section id="contact" className="py-12">
          <h2 className="text-3xl font-bold mb-6 text-teal-600">Get In Touch 📬</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-foreground mb-6">
                I'm always interested in new opportunities and collaborations. Feel free to reach out to me through
                any of the following platforms:
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-teal-600" />
                  <a href="mailto:tharigashrinithi2005@gmail.com" className="text-foreground hover:text-teal-600">
                    tharigashrinithi2005@gmail.com
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
                  <MapPin className="h-5 w-5 text-teal-600" />
                  <span className="text-foreground">
                    3/58, Ayyampudur, Aniyar, Velagounda mpatti, Namakkal-637212
                  </span>
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
            <p className="text-teal-800 mb-4 md:mb-0">© 2024 Thariga Shrinithi R. All rights reserved.</p>
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
                href="mailto:tharigashrinithi2005@gmail.com"
                className="text-teal-600 hover:text-teal-800"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="text-center mt-4 text-teal-600">
            <p>I hereby declare that all the information provided is true to the best of my knowledge.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
