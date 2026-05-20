import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";
import workCampaign from "@/assets/work-campaign.png";
import workReels from "@/assets/work-reels.jpg";
import reelVideo from "@/assets/reel.mp4";
import gridBranding from "@/assets/Grid.png";
import carousel1 from "@/assets/1.jpeg";
import carousel2 from "@/assets/2.jpeg";
import carousel3 from "@/assets/3.jpeg";
import carousel4 from "@/assets/4.jpeg";
import carousel5 from "@/assets/5.jpeg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ayra Alamdar — Content Creator & Brand Strategist" },
      {
        name: "description",
        content:
          "Portfolio of Ayra Alamdar — content creator and digital marketer building brand-led visuals, social strategy, and storytelling across Instagram, Facebook and LinkedIn.",
      },
      { property: "og:title", content: "Ayra Alamdar — Content Creator & Brand Strategist" },
      {
        property: "og:description",
        content:
          "Brand-focused content, social media strategy and visual storytelling.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const skills = [
  {
    label: "Content & Branding",
    items: [
      "Content Strategy",
      "Brand Identity & Visual Consistency",
      "Storytelling & Copywriting",
      "Instagram · Facebook · LinkedIn",
      "Content Planning & Posting Schedules",
      "Content Creation Automation",
    ],
  },
  {
    label: "Design & Media",
    items: [
      "Canva (primary design tool)",
      "CapCut & VN — video editing",
      "Social Media UI/UX Optimization",
      "Feed Aesthetics & Layout Design",
    ],
  },
  {
    label: "Marketing & Strategy",
    items: [
      "Campaign Planning & Execution",
      "Audience Targeting & Engagement",
      "Lead Generation Content",
      "SEO & AEO Integration",
    ],
  },
  {
    label: "Research & Tools",
    items: [
      "Pinterest · Pexels",
      "Google Workspace · Microsoft 365",
      "SEMrush · Ubersuggest · GSC",
    ],
  },
];

const carouselImages = [carousel1, carousel2, carousel3, carousel4, carousel5];

type Project = {
  no: string;
  cat: string;
  title: string;
  desc: string;
  role: string;
  tools: string[];
  img: string;
  carousel?: string[];
  fit?: "cover" | "contain";
  link?: { label: string; href: string };
  video?: string;
};

const projects: Project[] = [
  {
    no: "01",
    cat: "Instagram Carousels",
    title: "Educational carousels that compound reach",
    desc: "Editorial carousel series designed to teach, save and reshare — built around a fixed type system and a 6-slide story arc.",
    role: "Content Creator · Designer",
    tools: ["Canva", "Figma", "ChatGPT"],
    img: carousel1,
    carousel: carouselImages,
    link: {
      label: "View on Instagram",
      href: "https://www.instagram.com/p/DQ32_06DH6M/?igsh=MTNqanhteW5ubnAxNQ==",
    },
  },
  {
    no: "02",
    cat: "Social Branding",
    title: "A cohesive feed for a lifestyle brand",
    desc: "Built a 9-grid visual identity — palette, type pairings and post templates — so every asset reads as one voice across the feed.",
    role: "Brand Designer · Strategist",
    tools: ["Canva", "Pinterest", "Pexels"],
    img: gridBranding,
    fit: "contain",
    link: {
      label: "View on Instagram",
      href: "https://www.instagram.com/fortrayglobalservices?igsh=MXVpN2d1d2ZndGUxcw==",
    },
  },
  {
    no: "03",
    cat: "Content Campaigns",
    title: "End-to-end launch campaign",
    desc: "Concept, calendar and creative for a multi-platform launch — paired with copy hooks and engagement prompts tied to brand tone.",
    role: "Content Strategist",
    tools: ["Pinterest", "Canva", "SEMrush"],
    img: workCampaign,
  },
  {
    no: "04",
    cat: "Reels & Shorts",
    title: "Short-form video that holds attention",
    desc: "Reels and shorts edited around hook–payoff structure with on-brand motion, captions and pacing tuned for retention.",
    role: "Editor · Creator",
    tools: ["CapCut", "VN", "CapCut Pro"],
    img: workReels,
    video: reelVideo,
  },
];

const workflow = [
  {
    n: "01",
    t: "Understand the brand",
    d: "Audit colors, tone, audience and competitors. Map what the brand sounds and looks like before a single post is drafted.",
  },
  {
    n: "02",
    t: "Build the strategy",
    d: "Define pillars, post formats and the rhythm — what we say, where we say it, and what each piece is meant to do.",
  },
  {
    n: "03",
    t: "Plan the calendar",
    d: "Monthly calendars with hooks, captions and dependencies — designed to ship consistently without burning out.",
  },
  {
    n: "04",
    t: "Design the visuals",
    d: "Templates, carousels and reels built in Canva and CapCut — anchored to the brand's palette, type and logo system.",
  },
  {
    n: "05",
    t: "Stay consistent",
    d: "One voice across Instagram, Facebook and LinkedIn — adapted per platform, never copy-pasted.",
  },
  {
    n: "06",
    t: "Grow visibility",
    d: "Layer SEO, AEO and AI workflows so content compounds long after it ships.",
  },
];

const experience = [
  {
    role: "Content Creator & Digital Marketing Associate Trainee",
    detail:
      "Shipped social calendars and brand-aligned visuals end-to-end. Canva design, CapCut edits and platform-native copy.",
  },
  {
    role: "Freelance Content Creator & Brand Growth Specialist",
    detail:
      "Partnered with brands to build content systems — identity, templates, posting rhythm and SEO-aware research workflows.",
  },
  {
    role: "Content Strategist Intern",
    detail:
      "Researched audiences with SEMrush & Ubersuggest, drafted campaign strategies and integrated AI tools into the content pipeline.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Work />
      <Workflow />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-2xl tracking-tight">
          Ayra<span className="text-clay">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-10 text-sm text-muted-foreground">
          <a href="#work" className="hover:text-foreground transition">Work</a>
          <a href="#about" className="hover:text-foreground transition">About</a>
          <a href="#process" className="hover:text-foreground transition">Process</a>
          <a href="#experience" className="hover:text-foreground transition">Experience</a>
        </nav>
        <a
          href="#contact"
          className="text-sm border border-foreground px-4 py-2 rounded-full hover:bg-foreground hover:text-background transition"
        >
          Let's talk →
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-24 lg:pt-32 lg:pb-40">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground mb-10">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-clay opacity-60 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-clay" />
          </span>
          Available for projects
        </div>
        <h1 className="font-display text-[clamp(3.5rem,11vw,10rem)] leading-[0.92] tracking-tight text-balance">
          Content that <em className="text-clay not-italic">looks</em>
          <br className="hidden md:block" />
          like the brand{" "}
          <span className="italic text-muted-foreground">sounds</span>
          <br className="hidden md:block" />
          like the brand.
        </h1>
        <div className="mt-14 grid lg:grid-cols-12 gap-10 items-end">
          <p className="lg:col-span-6 text-lg lg:text-xl leading-relaxed text-muted-foreground max-w-xl">
            I&apos;m <span className="text-foreground">Ayra Alamdar</span>, a content
            creator and digital marketer building brand-led visuals, social strategy and
            storytelling for Instagram, Facebook and LinkedIn.
          </p>
          <div className="lg:col-span-6 flex flex-wrap items-center gap-4 lg:justify-end">
            <a
              href="#work"
              className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-sm hover:gap-3 transition-all"
            >
              View work <span>→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-foreground px-6 py-3 rounded-full text-sm hover:bg-foreground hover:text-background transition-all"
            >
              Get in touch
            </a>
          </div>
        </div>
        <dl className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-border pt-8">
          <div>
            <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
              Focus
            </dt>
            <dd className="text-foreground text-sm">Brand &amp; Social</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
              Based
            </dt>
            <dd className="text-foreground text-sm">Remote</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
              Tools
            </dt>
            <dd className="text-foreground text-sm">Canva · CapCut</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
              Platforms
            </dt>
            <dd className="text-foreground text-sm">IG · FB · LinkedIn</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Brand Identity",
    "Content Strategy",
    "Instagram",
    "Storytelling",
    "Canva",
    "CapCut",
    "Pinterest",
    "SEO + AEO",
    "AI Workflows",
    "Campaigns",
    "Visual Systems",
  ];
  const row = [...items, ...items];
  return (
    <div className="border-y border-border bg-sand/40 overflow-hidden py-6">
      <div className="flex gap-12 whitespace-nowrap animate-marquee font-display text-3xl md:text-4xl">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-12 text-foreground/80">
            {t}
            <span className="text-clay">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 lg:px-10 py-28 lg:py-40">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <div className="lg:col-span-5">
          <div className="aspect-[3/4] overflow-hidden rounded-sm bg-muted">
            <img
              src={portrait}
              alt="Ayra Alamdar at her workspace"
              width={960}
              height={1280}
              loading="lazy"
              className="h-full w-full object-cover grayscale-[15%]"
            />
          </div>
        </div>
        <div className="lg:col-span-7 lg:pt-10">
          <SectionLabel>About</SectionLabel>
          <h2 className="font-display text-5xl md:text-7xl leading-[1] mt-6 text-balance">
            A creator who thinks like a brand strategist.
          </h2>
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-muted-foreground max-w-2xl">
            <p>
              I specialize in brand-focused content strategy, storytelling and social media
              management — creating content that aligns with brand identity across tone,
              visuals and messaging to lift engagement and visibility.
            </p>
            <p>
              I build campaigns, calendars and posting strategies across Instagram, Facebook
              and LinkedIn — focused on visually consistent, audience-driven content.
            </p>
            <p>
              I also integrate <span className="text-foreground">SEO, AEO</span> and{" "}
              <span className="text-foreground">AI tools</span> into content workflows to
              maximize reach and efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="border-t border-border bg-sand/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-28">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <SectionLabel>Capabilities</SectionLabel>
            <h2 className="font-display text-5xl md:text-6xl mt-4">What I do.</h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            A toolkit built around creating, planning and shipping content that actually moves
            a brand forward.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {skills.map((s) => (
            <div key={s.label} className="bg-background p-8 lg:p-10 min-h-[280px]">
              <div className="text-xs uppercase tracking-[0.2em] text-clay mb-6">
                {s.label}
              </div>
              <ul className="space-y-3 text-[15px]">
                {s.items.map((i) => (
                  <li key={i} className="text-foreground/85 leading-snug">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-6 lg:px-10 py-28 lg:py-40">
      <div className="flex items-end justify-between flex-wrap gap-6 mb-20">
        <div>
          <SectionLabel>Selected Work</SectionLabel>
          <h2 className="font-display text-5xl md:text-7xl mt-4 leading-none">
            The portfolio.
          </h2>
        </div>
        <p className="max-w-md text-muted-foreground">
          Every piece is built on top of a brand system — logo usage, palettes and a
          consistent visual voice across the feed.
        </p>
      </div>

      <div className="space-y-28 lg:space-y-40">
        {projects.map((p, i) => (
          <article
            key={p.no}
            className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
              i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="lg:col-span-7">
              {p.carousel ? (
                <div className="rounded-sm bg-sand/40 border border-border p-6 lg:p-8">
                  <Carousel
                    opts={{ loop: true, align: "center" }}
                    className="w-full"
                  >
                    <CarouselContent className="-ml-4">
                      {p.carousel.map((src, idx) => (
                        <CarouselItem
                          key={idx}
                          className="pl-4 basis-full sm:basis-2/3 md:basis-1/2"
                        >
                          <div className="overflow-hidden rounded-sm bg-muted aspect-square">
                            <img
                              src={src}
                              alt={`${p.title} — slide ${idx + 1}`}
                              loading="lazy"
                              className="h-full w-full object-cover"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2 bg-background/80 border-border text-foreground hover:bg-background" />
                    <CarouselNext className="right-2 bg-background/80 border-border text-foreground hover:bg-background" />
                  </Carousel>
                </div>
              ) : p.video ? (
                <div className="rounded-sm bg-sand/40 border border-border p-8 lg:p-12 flex items-center justify-center">
                  <div className="relative w-full max-w-[280px] md:max-w-[320px] aspect-[9/16] overflow-hidden rounded-2xl border border-border bg-muted shadow-lg">
                    <video
                      src={p.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      poster={p.img}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              ) : (
                <div
                  className={`overflow-hidden rounded-sm aspect-[4/3] group ${
                    p.fit === "contain" ? "bg-sand/40 border border-border" : "bg-muted"
                  }`}
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    width={1280}
                    height={960}
                    loading="lazy"
                    className={`h-full w-full transition-transform duration-700 ${
                      p.fit === "contain"
                        ? "object-contain p-4"
                        : "object-cover group-hover:scale-105"
                    }`}
                  />
                </div>
              )}
            </div>
            <div className="lg:col-span-5">
              <div className="flex items-baseline gap-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                <span className="text-clay font-medium">{p.no}</span>
                <span>{p.cat}</span>
              </div>
              <h3 className="font-display text-4xl md:text-5xl leading-[1.05] mt-5 text-balance">
                {p.title}
              </h3>
              <p className="mt-6 text-muted-foreground leading-relaxed">{p.desc}</p>
              <dl className="mt-8 grid grid-cols-2 gap-y-4 gap-x-6 text-sm border-t border-border pt-6">
                <dt className="text-muted-foreground">Role</dt>
                <dd className="text-right">{p.role}</dd>
                <dt className="text-muted-foreground">Tools</dt>
                <dd className="text-right">{p.tools.join(" · ")}</dd>
                <dt className="text-muted-foreground">Focus</dt>
                <dd className="text-right">Brand identity & consistency</dd>
              </dl>
              {p.link && (
                <a
                  href={p.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-8 text-sm border-b border-foreground pb-1 hover:gap-3 transition-all"
                >
                  {p.link.label} <span>→</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Workflow() {
  return (
    <section id="process" className="border-y border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-28 lg:py-40">
        <div className="grid lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.25em] text-background/60">
              How I work
            </div>
            <h2 className="font-display text-5xl md:text-7xl mt-6 leading-[1]">
              From brand brief <em className="text-clay not-italic">to</em> a feed people
              recognize.
            </h2>
          </div>
          <p className="lg:col-span-6 lg:col-start-7 text-lg text-background/70 lg:pt-8">
            A repeatable process for turning a brand's identity into content that is
            consistent, on-message and built to grow visibility over time.
          </p>
        </div>
        <ol className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-background/10">
          {workflow.map((w) => (
            <li
              key={w.n}
              className="bg-foreground p-8 lg:p-10 min-h-[260px] flex flex-col justify-between"
            >
              <div className="font-display text-6xl text-clay">{w.n}</div>
              <div>
                <h3 className="font-display text-2xl mb-3">{w.t}</h3>
                <p className="text-background/65 text-sm leading-relaxed">{w.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 lg:px-10 py-28 lg:py-40">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <SectionLabel>Experience</SectionLabel>
          <h2 className="font-display text-5xl md:text-6xl mt-6 leading-none">
            Impact across roles.
          </h2>
        </div>
        <div className="lg:col-span-8 lg:pt-4">
          <div className="divide-y divide-border border-y border-border">
            {experience.map((e) => (
              <div
                key={e.role}
                className="py-8 grid md:grid-cols-12 gap-6 items-start group hover:bg-sand/40 transition px-2"
              >
                <h3 className="md:col-span-5 font-display text-2xl md:text-3xl leading-tight">
                  {e.role}
                </h3>
                <p className="md:col-span-7 text-muted-foreground leading-relaxed">
                  {e.detail}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <h4 className="text-xs uppercase tracking-[0.25em] text-clay mb-6">
              Across these roles
            </h4>
            <ul className="grid md:grid-cols-2 gap-x-10 gap-y-3 text-foreground/85">
              {[
                "Built content strategies for brands",
                "Created social content across IG, FB, LinkedIn",
                "Designed Canva visuals aligned with brand identity",
                "Planned content calendars and campaigns",
                "Managed social media layouts and UI/UX",
                "Edited video content using CapCut and VN",
                "Used SEMrush & Ubersuggest for research",
                "Integrated AI & automation into workflows",
              ].map((i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-clay mt-1.5">—</span>
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-32 lg:py-48 text-center">
        <SectionLabel center>Let's collaborate</SectionLabel>
        <h2 className="font-display text-[clamp(3rem,9vw,8rem)] leading-[0.95] mt-8 text-balance">
          Have a brand that <br />
          deserves <em className="text-clay not-italic">better content?</em>
        </h2>
        <a
          href="mailto:ayraalamdar309@gmail.com"
          className="inline-flex items-center gap-3 mt-12 text-lg border-b border-foreground pb-1 hover:gap-5 transition-all"
        >
          ayraalamdar309@gmail.com <span>→</span>
        </a>
        <div className="mt-16 flex items-center justify-center gap-8 text-sm text-muted-foreground">
          <a
            href="https://linkedin.com/in/ayra-alamdar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-8 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="font-display text-xl text-foreground">Ayra Alamdar</div>
        <div>© {new Date().getFullYear()} — Content & Brand Studio</div>
      </div>
    </footer>
  );
}

function SectionLabel({
  children,
  center,
}: {
  children: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground ${
        center ? "justify-center" : ""
      }`}
    >
      <span className="h-px w-8 bg-clay" />
      {children}
    </div>
  );
}
