import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  ChevronDown,
  ExternalLink,
  Mail,
  MapPin,
} from "lucide-react";
import {
  about,
  contactLinks,
  education,
  experiences,
  navLinks,
  profile,
} from "@/lib/portfolio-data";
import { IntroOverlay } from "@/components/intro-overlay";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { TypewriterText } from "@/components/typewriter-text";

export function PortfolioPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const photoSrc = `${basePath}${profile.photo}`;

  return (
    <main className="relative isolate overflow-hidden">
      <IntroOverlay />

      <div className="intro-page">
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        >
          <div className="signal-field absolute inset-0 opacity-80" />
        </div>

        <header className="sticky top-0 z-20 border-b border-line/80 bg-paper/75 backdrop-blur-xl">
          <nav
            aria-label="Main navigation"
            className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4"
          >
            <a href="#home" className="truncate text-sm font-semibold text-ink">
              {profile.name}
            </a>
            <div className="hidden items-center gap-6 text-sm text-muted lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="transition hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        </header>

      <section
        id="home"
        className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-6xl flex-col items-center justify-center px-6 py-16 text-center sm:py-20"
      >
        <div className="flex w-full max-w-4xl flex-col items-center">
          <div className="relative h-32 w-32 overflow-hidden rounded-full border border-line bg-white shadow-soft ring-8 ring-white/50 sm:h-40 sm:w-40">
            <Image
              src={photoSrc}
              alt={profile.photoAlt}
              fill
              priority
              sizes="160px"
              className="object-cover"
            />
          </div>

          <div className="mt-10">
            <h1
              id="hero-name"
              className="max-w-4xl text-5xl font-semibold leading-[1.05] text-ink sm:text-6xl"
            >
              {profile.name}
            </h1>
            <TypewriterText
              text={profile.slogan}
              startDelay={3600}
              className="mx-auto mt-6 block min-h-9 max-w-3xl text-2xl leading-9 text-ink sm:text-3xl"
            />
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#project-experience"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-moss focus:outline-none focus:ring-2 focus:ring-moss focus:ring-offset-2 focus:ring-offset-paper"
              >
                View Experience
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white px-6 py-3 text-sm font-medium text-ink transition hover:-translate-y-0.5 hover:border-moss/50 hover:text-moss focus:outline-none focus:ring-2 focus:ring-moss focus:ring-offset-2 focus:ring-offset-paper"
              >
                Contact
                <Mail aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

        <Section id="about" title="01. About">
        <Reveal>
          <p className="max-w-none text-xl leading-9 text-muted">{about}</p>
        </Reveal>
        </Section>

        <Section id="project-experience" title="02. Project Experience">
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <Reveal key={experience.title} delay={index * 90}>
              <details className="group relative rounded-lg border border-line bg-white/80 p-6 pl-8 shadow-sm backdrop-blur transition duration-200 open:bg-white/95 hover:-translate-y-1 hover:border-moss/40 hover:bg-white/95 hover:shadow-soft sm:p-8 sm:pl-10">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 [&::-webkit-details-marker]:hidden">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-8 left-4 top-8 w-px bg-line transition group-hover:bg-moss/35 sm:left-5"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute left-4 top-8 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-moss bg-paper shadow-sm sm:left-5"
                  />
                  <div>
                    <h3 className="text-2xl font-semibold leading-tight text-ink">
                      {experience.title}
                    </h3>
                    <div className="mt-3 space-y-2">
                      {experience.organization ? (
                        <p className="flex w-fit items-center gap-2 text-sm font-medium text-moss">
                          {experience.organization}
                        </p>
                      ) : null}
                      <p className="flex items-center gap-2 text-sm font-medium text-muted">
                        <CalendarDays aria-hidden="true" className="h-4 w-4" />
                        {experience.period}
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 shrink-0 text-muted transition group-open:rotate-180 group-hover:text-moss"
                  />
                </summary>

                <ul className="mt-6 space-y-4">
                  {experience.bullets.map((item) => (
                    <li key={item} className="flex gap-3 leading-7 text-muted">
                      <span
                        aria-hidden="true"
                        className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-moss"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {experience.organization ? (
                  <a
                    href={experience.organizationUrl}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-moss transition hover:text-ink"
                  >
                    Visit {experience.organization}
                    <ExternalLink aria-hidden="true" className="h-4 w-4" />
                  </a>
                ) : null}
              </details>
            </Reveal>
          ))}
        </div>
        </Section>

        <Section id="education" title="03. Education Background">
        <div className="space-y-4">
          {education.map((item, index) => (
            <Reveal key={`${item.school}-${item.degree}`} delay={index * 90}>
              <article className="group relative rounded-lg border border-line bg-white/80 p-6 pl-8 shadow-sm backdrop-blur transition duration-200 hover:-translate-y-1 hover:border-moss/40 hover:bg-white/95 hover:shadow-soft sm:p-8 sm:pl-10">
                <span
                  aria-hidden="true"
                  className="absolute bottom-8 left-4 top-8 w-px bg-line transition group-hover:bg-moss/35 sm:left-5"
                />
                <span
                  aria-hidden="true"
                  className="absolute left-4 top-8 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-moss bg-paper shadow-sm sm:left-5"
                />
                {item.schoolUrl ? (
                  <a
                    href={item.schoolUrl}
                    className="inline-flex items-start gap-2 text-2xl font-semibold leading-tight text-ink transition hover:text-moss"
                  >
                    {item.school}
                    <ExternalLink aria-hidden="true" className="mt-1 h-4 w-4" />
                  </a>
                ) : (
                  <h3 className="text-2xl font-semibold leading-tight text-ink">
                    {item.school}
                  </h3>
                )}
                <p className="mt-4 text-lg leading-7 text-muted">
                  {item.degree}
                </p>
                <div className="mt-5 flex flex-col gap-3 text-sm font-medium text-muted sm:flex-row sm:flex-wrap sm:gap-6">
                  <p className="inline-flex items-center gap-2">
                    <CalendarDays aria-hidden="true" className="h-4 w-4" />
                    {item.period}
                  </p>
                  <p className="inline-flex items-center gap-2">
                    <MapPin aria-hidden="true" className="h-4 w-4" />
                    {item.location}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        </Section>

        <Section id="contact" title="04. Contact">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;

            return (
              <Reveal key={link.label} delay={index * 70}>
                <a
                  href={link.href}
                  className="group flex items-center justify-between rounded-lg border border-line bg-white/80 p-5 text-ink shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-moss/40 hover:bg-white/95 hover:shadow-soft"
                >
                  <span className="font-medium">{link.label}</span>
                  <Icon
                    aria-hidden="true"
                    className="h-5 w-5 text-muted transition group-hover:text-moss"
                  />
                </a>
              </Reveal>
            );
          })}
        </div>
        </Section>

        <footer className="border-t border-line py-8">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
            <p>{profile.name}</p>
            <p>{profile.slogan}</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
