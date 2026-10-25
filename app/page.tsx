"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { createPortal } from "react-dom"
import { projects, achievements, experience, contact, story } from "@/data"
import type { Project } from "@/data"

const links = [
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "experience", label: "Work Experience" },
  { id: "contact", label: "Contact" },
]

const terminalLines = [
  { prompt: "whoami", output: "neel maniar" },
  { prompt: "status", output: "building backlog killer, applying to a16z academy" },
  { prompt: "next", output: "_" },
]

const stats = [
  { label: "Projects built", value: projects.length, href: "#projects" },
  { label: "Achievements", value: achievements.length, href: "#achievements" },
  { label: "Ventures & roles", value: experience.length, href: "#experience" },
  { label: "Age I started coding", value: 11, href: "#story" },
]

const filters = ["All", ...Array.from(new Set(projects.flatMap((p) => p.tags)))]

// Turns true once the element has scrolled into view
function useInView() {
  const ref = useRef<HTMLDivElement>(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setSeen(true)
      },
      { threshold: 0.15 }
    )
    observer.observe(ref.current!)
    return () => observer.disconnect()
  }, [])
  return { ref, seen }
}

function Reveal({ children }: { children: React.ReactNode }) {
  const { ref, seen } = useInView()
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        seen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {children}
    </div>
  )
}

function Counter({ to }: { to: number }) {
  const { ref, seen } = useInView()
  const [n, setN] = useState(0)
  useEffect(() => {
    if (seen && n < to) {
      const timer = setTimeout(() => setN(n + 1), 80)
      return () => clearTimeout(timer)
    }
  }, [seen, n, to])
  return (
    <div ref={ref} className="inline">
      {n}
    </div>
  )
}

// Soft orange glow that follows the mouse
function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const move = (e: MouseEvent) => {
      ref.current!.style.transform = `translate(${e.clientX - 150}px, ${e.clientY - 150}px)`
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])
  return (
    <div
      ref={ref}
      className="pointer-events-none fixed left-0 top-0 -z-10 hidden h-[300px] w-[300px] rounded-full bg-[var(--accent)] opacity-20 blur-3xl sm:block"
    />
  )
}

function Nav() {
  const [active, setActive] = useState("")
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const page = document.documentElement
      setProgress((page.scrollTop / (page.scrollHeight - page.clientHeight)) * 100)
      let current = ""
      links.forEach((l) => {
        if (document.getElementById(l.id)!.getBoundingClientRect().top < 140) current = l.id
      })
      setActive(current)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav className="sticky top-0 z-20 border-b border-[var(--line)] bg-[var(--bg)]/80 backdrop-blur">
      <div className="h-0.5 bg-[var(--accent)]" style={{ width: `${progress}%` }} />
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
        <a href="#top" className="hidden font-mono text-sm font-bold sm:block">
          neel maniar
        </a>
        <div className="flex gap-5 font-mono text-xs sm:text-sm">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={active === l.id ? "text-[var(--accent)]" : "text-[var(--muted)] hover:text-[var(--fg)]"}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

function Terminal() {
  const [visibleLines, setVisibleLines] = useState(0)
  const [charCount, setCharCount] = useState(0)

  useEffect(() => {
    if (visibleLines >= terminalLines.length) return
    if (charCount < terminalLines[visibleLines].prompt.length) {
      const t = setTimeout(() => setCharCount((c) => c + 1), 40)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => {
      setVisibleLines((v) => v + 1)
      setCharCount(0)
    }, 500)
    return () => clearTimeout(t)
  }, [charCount, visibleLines])

  return (
    <div className="rounded-xl border border-[var(--line)] bg-black/40 p-5 font-mono text-sm sm:text-base">
      <div className="mb-4 flex gap-1.5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
      </div>
      {terminalLines.slice(0, visibleLines).map((line, i) => (
        <div key={i} className="mb-2">
          <span className="text-[var(--accent)]">❯ </span>
          {line.prompt}
          <div className="pl-2 text-[var(--muted)]">{line.output}</div>
        </div>
      ))}
      {visibleLines < terminalLines.length && (
        <div>
          <span className="text-[var(--accent)]">❯ </span>
          {terminalLines[visibleLines].prompt.slice(0, charCount)}
          <span className="animate-pulse">▍</span>
        </div>
      )}
    </div>
  )
}

// Photo slideshow: arrows, swipe, keyboard, "1 / N" counter, click to enlarge.
// If a picture file is missing, a coloured placeholder is shown instead.
function Gallery({ images, title }: { images: string[]; title: string }) {
  const [i, setI] = useState(0)
  const [zoom, setZoom] = useState(false)
  const [missing, setMissing] = useState<string[]>([])
  const touchStart = useRef(0)
  const many = images.length > 1
  const isMissing = missing.includes(images[i])
  const go = (d: number) => setI((x) => (x + d + images.length) % images.length)

  useEffect(() => {
    if (!zoom) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoom(false)
      if (e.key === "ArrowLeft") go(-1)
      if (e.key === "ArrowRight") go(1)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [zoom])

  const arrow =
    "absolute top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 font-mono backdrop-blur transition hover:bg-[var(--accent)]"

  return (
    <div
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") go(-1)
        if (e.key === "ArrowRight") go(1)
      }}
      onTouchStart={(e) => (touchStart.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        const dx = e.changedTouches[0].clientX - touchStart.current
        if (dx > 50) go(-1)
        if (dx < -50) go(1)
      }}
      className="relative aspect-video overflow-hidden bg-black/40 outline-none"
    >
      {isMissing ? (
        <div className="media-fallback absolute inset-0 flex items-center justify-center text-5xl font-bold">
          {title[0]}
        </div>
      ) : (
        <Image
          key={images[i]}
          src={images[i]}
          alt={title}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          onClick={() => setZoom(true)}
          onError={() => setMissing([...missing, images[i]])}
          className="animate-fade cursor-zoom-in object-cover"
        />
      )}

      {many && (
        <>
          <button onClick={() => go(-1)} aria-label="Previous" className={`${arrow} left-3`}>
            ←
          </button>
          <button onClick={() => go(1)} aria-label="Next" className={`${arrow} right-3`}>
            →
          </button>
          <span className="absolute bottom-3 left-3 rounded-full bg-black/60 px-3 py-1 font-mono text-xs">
            {i + 1} / {images.length}
          </span>
        </>
      )}

      {zoom &&
        !isMissing &&
        createPortal(
          <div
            onClick={() => setZoom(false)}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 p-6"
          >
            <div className="relative h-[75vh] w-full max-w-5xl">
              <Image src={images[i]} alt={title} fill sizes="100vw" className="object-contain" />
            </div>
            <p className="mt-4 font-mono text-sm text-[var(--muted)]">
              {title} {many && `(${i + 1} / ${images.length})`}
            </p>
            {many && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    go(-1)
                  }}
                  className={`${arrow} left-4`}
                >
                  ←
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    go(1)
                  }}
                  className={`${arrow} right-4`}
                >
                  →
                </button>
              </>
            )}
            <button className="absolute right-5 top-4 font-mono text-2xl">✕</button>
          </div>,
          document.body
        )}
    </div>
  )
}

function ProjectCard({ p }: { p: Project }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="card h-full overflow-hidden">
      <Gallery images={p.images} title={p.title} />
      <div className="p-6">
        <h3 className="text-xl font-bold">{p.title}</h3>
        <p className={`mt-2 text-[var(--muted)] ${open ? "" : "line-clamp-3"}`}>{p.description}</p>
        <button onClick={() => setOpen(!open)} className="mt-1 font-mono text-xs text-[var(--accent)]">
          {open ? "Show less" : "Read more"}
        </button>
        <div className="mt-4 flex flex-wrap gap-2 font-mono text-xs text-[var(--muted)]">
          {p.tags.map((t) => (
            <span key={t} className="rounded-full border border-[var(--line)] px-2.5 py-1">
              {t}
            </span>
          ))}
        </div>
        <a href={p.link} target="_blank" className="mt-4 inline-block font-mono text-sm text-[var(--accent2)]">
          Check the project out↗
        </a>
        {p.demo && (
          <a href={p.demo} target="_blank" className="ml-5 mt-4 inline-block font-mono text-sm text-[var(--accent)]">
            Watch demo ↗
          </a>
        )}
      </div>
    </div>
  )
}

function Projects() {
  const [filter, setFilter] = useState("All")
  const shown = projects.filter((p) => filter === "All" || p.tags.includes(filter))
  return (
    <section id="projects" className="mt-28 scroll-mt-20">
      <h2 className="text-3xl font-bold sm:text-5xl">Things I&apos;ve Built</h2>
      <div className="mt-6 flex flex-wrap gap-2 font-mono text-xs">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full border px-4 py-1.5 transition-colors ${
              filter === f
                ? "border-[var(--accent)] text-[var(--accent)]"
                : "border-[var(--line)] text-[var(--muted)] hover:text-[var(--fg)]"
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {shown.map((p) => (
          <div key={p.title} className={p.featured ? "md:col-span-2" : ""}>
            <Reveal>
              <ProjectCard p={p} />
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  )
}

function Achievements() {
  const row = useRef<HTMLDivElement>(null)
  const scroll = (dx: number) => row.current!.scrollBy({ left: dx, behavior: "smooth" })
  return (
    <section id="achievements" className="mt-28 scroll-mt-20">
      <div className="flex items-end justify-between">
        <h2 className="text-3xl font-bold sm:text-5xl">Achievements</h2>
        <div className="flex gap-2 font-mono">
          <button onClick={() => scroll(-340)} className="card h-10 w-10">
            ←
          </button>
          <button onClick={() => scroll(340)} className="card h-10 w-10">
            →
          </button>
        </div>
      </div>
      <div ref={row} className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4">
        {achievements.map((a, i) => (
          <div key={i} className="card w-80 shrink-0 snap-start p-6">
            <div className="text-5xl font-bold text-[var(--accent)]">
              {a.badge ?? String(i + 1).padStart(2, "0")}
            </div>
            <div className="mt-4 overflow-hidden rounded-lg">
              <Gallery images={a.images} title={a.title} />
            </div>
            <h3 className="mt-4 text-lg font-bold">{a.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{a.description}</p>
            {a.link && (
              <a href={a.link} target="_blank" className="mt-3 inline-block font-mono text-sm text-[var(--accent2)]">
                See it ↗
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="mt-28 scroll-mt-20">
      <h2 className="text-3xl font-bold sm:text-5xl">Work Experience</h2>
      <div className="mt-10 space-y-10 border-l border-[var(--line)] pl-8">
        {experience.map((e, i) => (
          <Reveal key={i}>
            <div className="relative">
              <span className="absolute -left-[38px] top-2 h-3 w-3 rounded-full bg-[var(--accent)]" />
              <h3 className="text-xl font-bold">{e.role}</h3>
              <p className="mt-1 font-mono text-sm text-[var(--accent2)]">
                {e.organization} · {e.duration}
              </p>
              <p className="mt-3 max-w-2xl text-[var(--muted)]">{e.description}</p>
              <div className="mt-4 max-w-md overflow-hidden rounded-lg">
                <Gallery images={e.images} title={e.organization} />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <main id="top" className="overflow-hidden">
      <CursorGlow />
      <Nav />

      <div className="mx-auto max-w-5xl px-5">
        <section className="grid items-center gap-10 pt-20 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              Curiosity to Impact,
              <br />
              <span className="text-[var(--accent)]">Data Driven, Code Powered</span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-[var(--muted)]">
              A Curious Teen from Ahmedabad,India. Self-taught builder. Projects that make an impact. For Humanity! 😎
            </p>
          </div>
          <Terminal />
        </section>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((s) => (
            <a key={s.label} href={s.href} className="card block p-5">
              <div className="text-4xl font-bold">
                <Counter to={s.value} />
              </div>
              <p className="mt-1 font-mono text-xs text-[var(--muted)]">{s.label}</p>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-14 overflow-hidden border-y border-[var(--line)] py-3">
        <div className="marquee flex w-max gap-10 font-mono text-sm text-[var(--muted)]">
          {[...achievements, ...achievements].map((a, i) => (
            <span key={i}>✦ {a.title}</span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-5 pb-24">
        <Projects />
        <Achievements />
        <Experience />

        <section id="story" className="mt-28 scroll-mt-20">
          <h2 className="text-3xl font-bold sm:text-5xl">How and Why do I work the way I do</h2>
          <div className="mt-6 max-w-2xl space-y-5 leading-relaxed text-[var(--muted)]">
            {story.map((paragraph, i) => (
              <Reveal key={i}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-28 scroll-mt-20 text-center">
          <h2 className="text-4xl font-bold sm:text-6xl">Get in touch</h2>
          <p className="mx-auto mt-4 max-w-md text-[var(--muted)]">
            Open to conversations about building, studying, or anything in between. I usually reply within a day.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 font-mono text-sm">
            <a href={`mailto:${contact.email}`} className="card px-6 py-3 text-[var(--accent)]">
              Email me ↗
            </a>
            <a href={contact.github} target="_blank" className="card px-6 py-3 text-[var(--accent2)]">
              GitHub ↗
            </a>
            <a href={contact.linkedin} target="_blank" className="card px-6 py-3">
              LinkedIn ↗
            </a>
          </div>
        </section>

        <footer className="mt-20 text-center font-mono text-xs text-[var(--muted)]">
          © 2026 Neel Maniar — built solo.
          <br />
          <a href="#top" className="hover:text-[var(--accent)]">
            Back to top ↑
          </a>
        </footer>
      </div>
    </main>
  )
}