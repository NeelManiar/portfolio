


"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

type Project = {
  title: string
  description: string
  tags: string[]
  link: string
  image?: string
}

type Achievement = {
  title: string
  description: string
  image?: string
}

type WorkExperience = {
  role: string
  organization: string
  duration: string
  description: string
  image?: string
}

// Replace or add to these. Keep or delete slots — the layout adjusts either way.
const projects: Project[] = [
  {
    title: "NEW NAME",
    description:
      "Current, groundbreaking, revolutionary product under development that safeguards our data and applications from sophisticated AI hacking attempts.",
    tags: ["AI", "Education", "Product"],
    link: "https://github.com/NeelManiar",
  },
  {
    title: "AI Startups Performance Analysis",
    description:
      "An excerpt of a data-driven research project that I carried out in my internship where we analysed how AI startups perform, correlating multiple factors to identify all external factors that go in building AI Companies today. Note: It is Modified and Posted with Permission",
    tags: ["Research", "Data Science", "Python"],
    link: "https://github.com/NeelManiar/AI-Startups-Performance-Analysis",
  },
  {
    title: "IndiConnect",
    description: "A high school project where we developed an end to end solution for betterment of the lives of average workers and employees more sustainable and efficient by making a small, but powerful impact in their everyday, monotonous lives.",
    tags: ["Tag"],
    link: "https://github.com/NeelManiar/IndiConnect",
  },
  {
    title: "ChatUp",
    description: "An attentive, general purpose chatbot that I created using Streamlit and OpenAI's APIs to serve as a casual yapper alongside you. ",
    tags: ["Tag"],
    link: "https://github.com/NeelManiar/ChatUp",
  },
  {
    title: "Football Transfer Market Simulator",
    description: "Football Teams waste a lot of time, money and energy in finding the right player. This simulator will allow teams to build the complete, tournament squad.",
    tags: ["Tag"],
    link: "https://github.com/NeelManiar/Football-Transfer-Market-Simulator",
  },
  {
    title: "IBM Watson + Flask Application",
    description: "A hands-on AI application developed as part of IBM's AI developer coursework, exploring how AI capabilities can be integrated into practical software. The project gave me experience working with Python, APIs, application logic, and the process of turning an AI concept into a functioning application.",
    tags: ["Tag"],
    link: "https://github.com/NeelManiar/Final-project",
  },
  {
    title: "Mutual Funds Portfolio Manager",
    description: "A Python-based data-analysis tool designed to compare mutual-fund portfolio data across different months. It processes raw portfolio files to identify securities that have been added or removed, making it easier to track changes in investment portfolios and understand how fund holdings evolve over time.",
    tags: ["Tag"],
    link: "https://github.com/NeelManiar/Mutual-Funds-Analysis",
  },
  {
    title: "NBA Players Evaluation",
    description: "An interactive data-analysis application built with Python and Streamlit for exploring NBA player statistics. The project combines data processing, statistical analysis, visualization, and an interactive interface, allowing users to investigate player performance and export the resulting data for further analysis.",
    tags: ["Tag"],
    link: "https://github.com/NeelManiar/NBA-Player-Analysis",
  },
  {
    title: "Tokyo 2020 Summer Olympics Analysis",
    description: "A data-analysis project exploring medal distributions and country-level performance during the Tokyo 2020 Olympic Games. I used data processing and visualization to investigate how sporting outcomes varied across participating countries and to turn a large dataset into understandable statistical insights.",
    tags: ["Tag"],
    link: "https://github.com/NeelManiar/Tokyo-2020-Olympics-Analysis",
  },
  {
    title: "Diwali Sales Analysis",
    description: "An exploratory data-science project done for a retail company analyzing retail transactions during the Diwali period to understand purchasing patterns and customer behavior. Using Python, Pandas, NumPy, and Matplotlib, I cleaned and explored the dataset, identified trends across customers and products, and translated the results into visual insights.",
    tags: ["Tag"],
    link: "https://github.com/NeelManiar/Diwali-Sales-Analysis",
  },
]

// Add your real achievements — exam ranks, olympiad results, hackathon wins, etc.
const achievements: Achievement[] = [
  {
    title: "Shark Teens S4",
    description: "Came 1st in a pitching competition at the age of 13, competing against university graduates to raise investments. ",
  },
  {
    title: "TIE Ahmedabad (TYE)",
    description: "Pitched at the Indian Institute of Ahmedabad (IIM-A) in front of some of the biggest industry leaders in Ahmedabad and India where we achieved nation wide recognition.",
  },
  {
    title: "National Entrepreneurship Olympiad, IIT Bombay",
    description: "Participated in NEO, organised by E-Cell IITB in class 6, got certified and expanded by knowledge about the know hows of entrepreneurship.",
  },
  {
    title: "Real World Challenges Convention (RWCC)",
    description: "Represented my school multiple times in the annual, prestigious RWCC mega competitons held in Singapore, where we debated about AI, Security, Innovation, Creativity and Entreprenuership.",
  },
  {
    title: "Science Olympiad Foundation",
    description: "Participated in countless English, Maths and Science and Cyber Olympiads organised by the SOF throughout my schooling years, reaping many awards, nationally and internationally."
  },
  {
    title: "Aryabhata Ganit Challenge",
    description: "Achieved a Top 100 Rank (western region) in annual Mathematics Challenge for High Schoolers in India by the CBSE. Came 1st in the preliminary school selections.",
  },
  {
    title: "Global Student Exchange Program (GSE)",
    description: "Won the GSE in 2021 where created innovative solutions to aid the massive agriculture industry in India by emphasising on building efficient reform mechanisms and smart systems to minimise produce loss and pricing discrepancies.",
  },
]

// Add internships, freelance work, or organizations you've contributed to.
const experience: WorkExperience[] = [
  {
    role: "Co-Founder and CEO",
    organization: "Datacraft",
    duration: "January 2023 – July 2023",
    description: "I founded a B2B2C company with my friend at the age of 13 out of an entrepreneurship workshop hosted by the renowned organisation, The Indus Entreprenuers (TIE), Ahmedabad Chapter. We aimed to solve the present issue of effectively managing data, from product details to insurance papers. For a normal man, this has been a headache. We even raised basic investment from an incubator, that too, winning against graduate students, however we failed to build up on the momentum, and paused the idea."
  },
  {
    role: "Cofounder, Strategic Advisor",
    organization: "Checkmywarranty",
    duration: "Month Year – Present",
    description: "Served as founding, technical advisor to Checkmywarranty, an end to end warranty management solution that enables us to keep track of product and service warranties, give timely reminders and help users avail the benefits that they carelessly lost. I helped oversee the feasibility of the idea, validated on public platforms, and ensured that all the technical requirements are met",
  },
  {
    role: "AI Intern",
    organization: "Tridya Tech Limited ",
    duration: "August 2023 – Present",
    description: "I completed an internship at Tridhya Tech, a publicly listed company in India where we worked to identify and understand AI Startups, different factors like Funding, Team Size, Years in Operation, Customer Satisfaction, Churn, AI Models, Industry Segregation amongst others to help the management identify the right kind of companies to invest in, and what is needed to be done to build a successful AI Company  ",
  },
    {
    role: "Software Test Engineer",
    organization: "Techno Infonet Gujarat Private Limited ",
    duration: "August 2023 – Present",
    description: "At the age of 10-11, I worked to rigorously test and break software, find bugs and shortcomings, compare with competitors and present reports to the development teams about the results. It really helped to understand in depth about all the stages of building successful software. ",
  },
]

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Work Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

const terminalLines = [
  { prompt: "whoami", output: "neel maniar" },
  {
    prompt: "status",
    output: "building backlog killer, applying to a16z academy",
  },
  { prompt: "next", output: "_" },
]

function ImageSlot({
  src,
  alt,
  className = "",
}: {
  src?: string
  alt: string
  className?: string
}) {
  if (!src) {
    return (
      <div
        className={`flex items-center justify-center rounded-lg border border-dashed border-[var(--line)] bg-white/[0.015] text-xs font-mono text-[var(--muted)] ${className}`}
      >
        add image
      </div>
    )
  }
  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  )
}

function Nav() {
  const handleClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <nav className="sticky top-0 z-20 border-b border-[var(--line)] bg-[var(--bg)]/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
        <a
          href="#top"
          onClick={(e) => handleClick(e, "#top")}
          className="font-mono text-sm font-bold"
        >
          neel maniar
        </a>
        <div className="flex gap-5 font-mono text-xs sm:text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.transform = `translate(${e.clientX - 150}px, ${
          e.clientY - 150
        }px)`
      }
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])
  return (
    <div
      ref={ref}
      className="pointer-events-none fixed top-0 left-0 z-0 h-[300px] w-[300px] rounded-full opacity-20 blur-3xl mix-blend-screen hidden sm:block"
      style={{ background: "var(--accent)" }}
    />
  )
}

function Terminal() {
  const [visibleLines, setVisibleLines] = useState(0)
  const [charCount, setCharCount] = useState(0)

  useEffect(() => {
    if (visibleLines >= terminalLines.length) return
    const line = terminalLines[visibleLines]
    const full = `${line.prompt}`
    if (charCount < full.length) {
      const t = setTimeout(() => setCharCount((c) => c + 1), 40)
      return () => clearTimeout(t)
    } else {
      const t = setTimeout(() => {
        setVisibleLines((v) => v + 1)
        setCharCount(0)
      }, 500)
      return () => clearTimeout(t)
    }
  }, [charCount, visibleLines])

  return (
    <div className="font-mono text-sm sm:text-base rounded-xl border border-[var(--line)] bg-black/40 p-5 sm:p-6 max-w-lg">
      <div className="flex gap-1.5 mb-4">
        <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
      </div>
      {terminalLines.slice(0, visibleLines).map((line, i) => (
        <div key={i} className="mb-2">
          <span style={{ color: "var(--accent)" }}>❯ </span>
          {line.prompt}
          <div className="text-[var(--muted)] pl-2">{line.output}</div>
        </div>
      ))}
      {visibleLines < terminalLines.length && (
        <div>
          <span style={{ color: "var(--accent)" }}>❯ </span>
          {terminalLines[visibleLines].prompt.slice(0, charCount)}
          <span className="animate-pulse">▍</span>
        </div>
      )}
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: py * -6, y: px * 6 })
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.15s ease-out",
      }}
      className="rounded-xl border border-[var(--line)] bg-white/[0.02] p-6"
    >
      <div className="flex gap-5">
        <ImageSlot
          src={project.image}
          alt={project.title}
          className="hidden sm:block h-20 w-20 shrink-0"
        />
        <div className="flex-1">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p className="mt-2 text-[var(--muted)] leading-relaxed">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2.5 font-mono text-xs">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[var(--line)] px-2.5 py-1 text-[var(--muted)]"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href={project.link}
            target="_blank"
            className="mt-4 inline-block font-mono text-sm"
            style={{ color: "var(--accent2)" }}
          >
            Check the project out↗
          </a>
        </div>
      </div>
    </div>
  )
}

function AchievementCard({ achievement }: { achievement: Achievement }) {
  return (
    <div className="rounded-xl border border-[var(--line)] bg-white/[0.02] p-6">
      <ImageSlot
        src={achievement.image}
        alt={achievement.title}
        className="h-36 w-full mb-4"
      />
      <h3 className="text-lg font-bold">{achievement.title}</h3>
      <p className="mt-2 text-[var(--muted)] leading-relaxed">
        {achievement.description}
      </p>
    </div>
  )
}

function ExperienceRow({ item }: { item: WorkExperience }) {
  return (
    <div className="flex gap-5 rounded-xl border border-[var(--line)] bg-white/[0.02] p-6">
      <ImageSlot
        src={item.image}
        alt={item.organization}
        className="hidden sm:block h-16 w-16 shrink-0"
      />
      <div>
        <h3 className="text-lg font-bold">{item.role}</h3>
        <p className="font-mono text-sm" style={{ color: "var(--accent2)" }}>
          {item.organization} · {item.duration}
        </p>
        <p className="mt-2 text-[var(--muted)] leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main id="top" className="relative min-h-screen overflow-hidden">
      <CursorGlow />
      <Nav />
      <div className="relative z-10 mx-auto max-w-5xl px-5 py-16 sm:py-20">
        {/* Hero */}
        <section className="flex flex-col lg:flex-row lg:items-center gap-10">
          <div className="flex-1">
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05]"
            >
              I build things
              <br />
              before I&apos;m told to.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-4 text-[var(--muted)] max-w-sm"
            >
              A Curious Teen from Ahmedabad,India. Self-taught builder. Projects that make an impact. For Humanity! 😎
            </motion.p>
          </div>
          <Terminal />
        </section>

        {/* Projects */}
        <section id="projects" className="mt-24 scroll-mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Things I&apos;ve Built
          </h2>
          <div className="mt-6 space-y-5">
            {projects.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section id="achievements" className="mt-24 scroll-mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold">Achievements</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement, i) => (
              <AchievementCard key={i} achievement={achievement} />
            ))}
          </div>
        </section>

        {/* Work Experience */}
        <section id="experience" className="mt-24 scroll-mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold">Work Experience</h2>
          <div className="mt-6 space-y-5">
            {experience.map((item, i) => (
              <ExperienceRow key={i} item={item} />
            ))}
          </div>
        </section>

        {/* How I work */}
        <section className="mt-24">
          <h2 className="text-2xl sm:text-3xl font-bold">How and Why do I work the way I do</h2>
          <p className="mt-4 text-[var(--muted)] leading-relaxed max-w-lg">
            I started programming (formally) at the age of 11. Ever since, I have become incredibly curious, trying to figure out an intersection between the ability to write code, and solve real world problems. I, from a very young age, have been addicted to computers and books. I read about some of the most successful Entrepreneurs, who differentiated themselves from others by thinking from the First Principles. I am learning to implement the same. 
            
           This thought pushes me forward everyday to contribute to this society and build. 
            
            I started ventures, failed, learnt and came back again. To make humanity sustain the deep, uncertain tomorrow, giving up is never an option. For me, it has never ever been.
          </p>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-24 scroll-mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold">Get in touch</h2>
          <p className="mt-3 text-[var(--muted)] max-w-md">
            Open to conversations about building, studying, or anything in
            between. I usually reply within a day.
          </p>
          <div className="mt-6 rounded-xl border border-[var(--line)] bg-white/[0.02] p-6 transition-all duration-300 hover:border-[var(--accent-border)] hover:shadow-[0_0_24px_0_var(--accent-glow)] max-w-md">
            <div className="flex items-center justify-between border-b border-[var(--line)] pb-4">
              <span className="font-mono text-xs text-[var(--muted)]">Email</span>
              <a
                href="mailto:your-email@example.com"
                className="font-mono text-sm hover:underline"
                style={{ color: "var(--accent)" }}
              >
                your-email@example.com
              </a>
            </div>
            <div className="flex items-center justify-between pt-4">
              <span className="font-mono text-xs text-[var(--muted)]">GitHub</span>
              <a
                href="https://github.com/NeelManiar"
                target="_blank"
                className="font-mono text-sm hover:underline"
                style={{ color: "var(--accent2)" }}
              >
                github.com/NeelManiar
              </a>
            </div>
          </div>
        </section>

        <footer className="mt-20 text-xs font-mono text-[var(--muted)]">
          © 2026 Neel Maniar — built solo.
        </footer>
      </div>
    </main>
  )
}