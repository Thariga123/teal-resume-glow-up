import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, FileText, ExternalLink, MapPin, Calendar, Award, Rocket, Code, BookOpen, Star, Briefcase, Heart, BarChart3, Database, TrendingUp, PieChart } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="w-full py-6 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row justify-between items-center border-b border-border">
        <h1 className="text-2xl font-bold text-teal-600">Your Name</h1>
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

      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Hero Section */}
        <section className="py-16 flex flex-col items-center text-center justify-center">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-6 shadow-lg">
            <Avatar className="w-full h-full">
              <AvatarImage src="/profile-photo.png" alt="Your Name" className="w-full h-full object-cover" />
              <AvatarFallback className="bg-teal-200 text-teal-800 text-4xl font-bold">YN</AvatarFallback>
            </Avatar>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground">
            Your Name
          </h1>
          <h2 className="text-xl md:text-2xl text-teal-600 mb-6">📊 Aspiring Data Analyst | Transforming Data into Insights 📈</h2>
          <p className="text-lg max-w-2xl mb-8 text-foreground text-center leading-relaxed">
            Passionate about uncovering patterns and stories hidden in data. Skilled in data analysis, visualization, and statistical modeling. 
            Eager to leverage analytical skills to drive data-driven decision making and solve real-world business problems.
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
          <h2 className="text-3xl font-bold mb-8 text-teal-600 text-center md:text-left">About Me 🌟</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center">
              <p className="text-foreground mb-4 leading-relaxed text-justify">
                Hello! I'm a data enthusiast from a leading engineering college. 
                I'm passionate about transforming raw data into actionable insights and creating data-driven solutions 
                that solve real business problems. My journey into data analytics has equipped me with strong analytical 
                thinking and problem-solving skills.
              </p>
              <p className="text-foreground mb-4 leading-relaxed text-justify">
                I specialize in data collection, cleaning, analysis, and visualization using industry-standard tools and techniques. 
                With hands-on experience in multiple data analysis projects, I've developed expertise in discovering patterns, 
                trends, and insights from complex datasets. I'm seeking opportunities to apply my skills in a dynamic environment 
                where I can contribute to data-driven decision making.
              </p>
            </div>
            <div className="bg-teal-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-teal-700 flex items-center">
                <BookOpen className="mr-2 h-5 w-5 text-teal-600" /> Education
              </h3>
              <div id="education" className="mb-4">
                <p className="font-medium">Bachelor of Engineering - Computer Science</p>
                <p className="text-teal-600">University Name</p>
                <p className="text-sm text-muted-foreground">2022 - 2026 | CGPA: 9.5/10</p>
              </div>
              <div className="mb-4">
                <p className="font-medium">Higher Secondary School</p>
                <p className="text-teal-600">School Name</p>
                <p className="text-sm text-muted-foreground">2020 - 2022 | 90%</p>
              </div>
              <div>
                <p className="font-medium">Secondary School</p>
                <p className="text-teal-600">School Name</p>
                <p className="text-sm text-muted-foreground">2019 - 2020 | 95%</p>
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-12 bg-teal-100" />

        {/* Training & Certifications Section */}
        <section className="py-12">
          <h2 className="text-3xl font-bold mb-8 text-teal-600 text-center md:text-left">Training & Certifications 📚</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-teal-100 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-teal-700">Data Analytics Training</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Star className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span>Phase 1 - Data Analysis (30 Levels Completed)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span>Python for Data Analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span>SQL & Database Management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span>Data Visualization with Power BI & Tableau</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-teal-100 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-teal-700">Professional Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
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
                    <span>Oracle AI Foundation Associate | Oracle | Feb 2025</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span>Advanced Excel & Statistical Analysis</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12 bg-teal-100" />

        {/* Skills Section */}
        <section id="skills" className="py-12">
          <h2 className="text-3xl font-bold mb-8 text-teal-600 text-center md:text-left">Data Analysis Skills 🛠️</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-teal-100 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-teal-700 flex items-center">
                  <Code className="mr-2 h-5 w-5" /> Programming
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    <span>Python (Pandas, NumPy)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    <span>SQL & MySQL</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    <span>R Programming</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    <span>Excel (Advanced)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-teal-100 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-teal-700 flex items-center">
                  <BarChart3 className="mr-2 h-5 w-5" /> Visualization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    <span>Power BI</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    <span>Tableau</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    <span>Matplotlib & Seaborn</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    <span>Excel Dashboards</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-teal-100 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-teal-700 flex items-center">
                  <Database className="mr-2 h-5 w-5" /> Data Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    <span>Web Scraping</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    <span>Data Cleaning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    <span>ETL Processes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    <span>API Integration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-teal-100 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-teal-700 flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5" /> Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    <span>Statistical Analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    <span>Predictive Modeling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    <span>A/B Testing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    <span>Business Intelligence</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12 bg-teal-100" />

        {/* Core Competencies Section */}
        <section className="py-12">
          <h2 className="text-3xl font-bold mb-8 text-teal-600 text-center md:text-left">Core Competencies 🏆</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-teal-100 shadow-sm">
              <CardHeader>
                <CardTitle className="text-teal-700 flex items-center">
                  <BarChart3 className="mr-2 h-5 w-5" /> Data Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500 mt-2"></div>
                    <span>Exploratory Data Analysis (EDA)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500 mt-2"></div>
                    <span>Data Cleaning & Preprocessing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500 mt-2"></div>
                    <span>Trend & Pattern Recognition</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-teal-100 shadow-sm">
              <CardHeader>
                <CardTitle className="text-teal-700 flex items-center">
                  <PieChart className="mr-2 h-5 w-5" /> Business Insights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500 mt-2"></div>
                    <span>Market Research & Analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500 mt-2"></div>
                    <span>Competitor Analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500 mt-2"></div>
                    <span>KPI Tracking & Reporting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-teal-100 shadow-sm">
              <CardHeader>
                <CardTitle className="text-teal-700 flex items-center">
                  <Award className="mr-2 h-5 w-5" /> Soft Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500 mt-2"></div>
                    <span>Problem Solving</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500 mt-2"></div>
                    <span>Critical Thinking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500 mt-2"></div>
                    <span>Data Storytelling</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12 bg-teal-100" />

        {/* Projects Section */}
        <section id="projects" className="py-12">
          <h2 className="text-3xl font-bold mb-8 text-teal-600 text-center md:text-left">Data Analysis Projects 📊</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-teal-100 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-teal-400 to-cyan-600 flex items-center justify-center">
                <BarChart3 className="w-16 h-16 text-white" />
              </div>
              <CardHeader>
                <CardTitle className="text-teal-700">🛒 Ecom MarketSpy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-foreground">
                  Competitor Product Insights for D2C Brands. Analyzed e-commerce data to extract competitor 
                  product information, pricing trends, and market positioning insights for direct-to-consumer brands.
                </p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-xs">Web Scraping</span>
                  <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-xs">Python</span>
                  <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-xs">Market Analysis</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-teal-100 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-600 flex items-center justify-center">
                <TrendingUp className="w-16 h-16 text-white" />
              </div>
              <CardHeader>
                <CardTitle className="text-teal-700">💬 Reddit Intent Leads Engine</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-foreground">
                  Discover Leads from Buying Conversations. Mined Reddit discussions to identify potential 
                  customer leads by analyzing buying intent signals in community conversations.
                </p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-xs">NLP</span>
                  <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-xs">Sentiment Analysis</span>
                  <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-xs">Lead Generation</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-teal-100 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center">
                <Briefcase className="w-16 h-16 text-white" />
              </div>
              <CardHeader>
                <CardTitle className="text-teal-700">🚀 Startup Hiring Monitor</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-foreground">
                  Real-Time Signal Tracker for Growing Startups. Tracked startup hiring patterns to identify 
                  growth signals and emerging opportunities in the startup ecosystem.
                </p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-xs">Data Mining</span>
                  <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-xs">Trend Analysis</span>
                  <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-xs">APIs</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-teal-100 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center">
                <Calendar className="w-16 h-16 text-white" />
              </div>
              <CardHeader>
                <CardTitle className="text-teal-700">🎯 EventRadar</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-foreground">
                  Real-Time Tech & Business Event Discovery Tracker. Built a system to discover and track 
                  technology and business events, providing insights into industry trends and networking opportunities.
                </p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-xs">Event Tracking</span>
                  <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-xs">Data Collection</span>
                  <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-xs">Automation</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-teal-100 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
                <Database className="w-16 h-16 text-white" />
              </div>
              <CardHeader>
                <CardTitle className="text-teal-700">💼 SignalMiner</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-foreground">
                  Extracting Startup Growth Signals from LinkedIn Job Posts. Analyzed LinkedIn job postings 
                  to extract growth indicators and expansion signals from startup companies.
                </p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-xs">LinkedIn API</span>
                  <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-xs">Signal Detection</span>
                  <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-xs">Business Intelligence</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-teal-100 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-yellow-400 to-orange-600 flex items-center justify-center">
                <Rocket className="w-16 h-16 text-white" />
              </div>
              <CardHeader>
                <CardTitle className="text-teal-700">💡 MicroSaaS Ideas Miner</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-foreground">
                  Discovering Underserved Problems from Public Conversations. Analyzed public forums and 
                  discussions to identify pain points and opportunities for micro-SaaS products.
                </p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-xs">Text Mining</span>
                  <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-xs">Opportunity Analysis</span>
                  <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-xs">Data Visualization</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12 bg-teal-100" />

        {/* Experience & Activities Section */}
        <section className="py-12">
          <h2 className="text-3xl font-bold mb-8 text-teal-600 text-center md:text-left">Experience & Activities 🌱</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-teal-100 shadow-sm">
              <CardHeader>
                <CardTitle className="text-teal-700 flex items-center">
                  <Briefcase className="mr-2 h-5 w-5" /> Training & Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-teal-500 mt-2"></div>
                    <div>
                      <p className="font-medium">Data Analysis Training Program</p>
                      <p className="text-sm text-muted-foreground">Completed 30 levels covering Python, SQL, Statistics, and Visualization</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-teal-500 mt-2"></div>
                    <div>
                      <p className="font-medium">Multiple Real-World Projects</p>
                      <p className="text-sm text-muted-foreground">8+ comprehensive data analysis projects across various domains</p>
                    </div>
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
                    <span>Environmental initiatives - Planting saplings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500 mt-2"></div>
                    <span>Member of Women Empowerment Cell - SNS College Of Engineering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500 mt-2"></div>
                    <span>Active participant in data analytics community workshops</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12 bg-teal-100" />

        {/* Contact Section */}
        <section id="contact" className="py-12">
          <h2 className="text-3xl font-bold mb-8 text-teal-600 text-center md:text-left">Get In Touch 📬</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center">
              <p className="text-foreground mb-6 leading-relaxed text-justify">
                I'm always interested in new opportunities and collaborations. Feel free to reach out to me through
                any of the following platforms. Whether it's about data analysis projects, collaboration opportunities,
                or just to connect and discuss ideas, I'd love to hear from you.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-teal-600" />
                  <a href="mailto:your.email@example.com" className="text-foreground hover:text-teal-600">
                    your.email@example.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-teal-600" />
                  <a 
                    href="https://www.linkedin.com/in/your-profile" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-teal-600"
                  >
                    linkedin.com/in/your-profile
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-teal-600" />
                  <span className="text-foreground">
                    Your City, Your State
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
            <p className="text-teal-800 mb-4 md:mb-0">© 2024 Your Name. All rights reserved.</p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/your-profile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-800"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:your.email@example.com"
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
