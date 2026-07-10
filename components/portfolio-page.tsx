import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
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
import { Section } from "@/components/section";

export function PortfolioPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const photoSrc = `${basePath}${profile.photo}`;

  return (
    <main>
      <header className="sticky top-0 z-20 border-b border-line/80 bg-paper/90 backdrop-blur">
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
          <div className="relative h-32 w-32 overflow-hidden rounded-full border border-line bg-white shadow-soft sm:h-40 sm:w-40">
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
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] text-ink sm:text-6xl">
              {profile.name}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-2xl leading-9 text-ink sm:text-3xl">
              {profile.slogan}
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-6 inline-flex items-center justify-center gap-2 text-lg text-muted transition hover:text-moss"
            >
              <Mail aria-hidden="true" className="h-5 w-5" />
              {profile.email}
            </a>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#project-experience"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-moss focus:outline-none focus:ring-2 focus:ring-moss focus:ring-offset-2 focus:ring-offset-paper"
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

      <Section id="about" title="About">
        <p className="max-w-none text-xl leading-9 text-muted">{about}</p>
      </Section>

      <Section id="project-experience" title="Project Experience">
        <div className="space-y-6">
          {experiences.map((experience) => (
            <article
              key={experience.title}
              className="rounded-lg border border-line bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-moss/40 hover:shadow-soft sm:p-8"
            >
              <div>
                <h3 className="text-2xl font-semibold leading-tight text-ink">
                  {experience.title}
                </h3>
                {experience.organization ? (
                  <a
                    href={experience.organizationUrl}
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-moss transition hover:text-ink"
                  >
                    {experience.organization}
                    <ExternalLink aria-hidden="true" className="h-4 w-4" />
                  </a>
                ) : null}
                <p className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-muted">
                  <CalendarDays aria-hidden="true" className="h-4 w-4" />
                  {experience.period}
                </p>
              </div>

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
            </article>
          ))}
        </div>
      </Section>

      <Section id="education" title="Education Background">
        <div className="space-y-4">
          {education.map((item) => (
            <article
              key={`${item.school}-${item.degree}`}
              className="rounded-lg border border-line bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-moss/40 hover:shadow-soft sm:p-8"
            >
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
              <p className="mt-4 text-lg leading-7 text-muted">{item.degree}</p>
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
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {contactLinks.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.label}
                href={link.href}
                className="group flex items-center justify-between rounded-lg border border-line bg-white p-5 text-ink transition hover:-translate-y-1 hover:border-moss/40 hover:shadow-soft"
              >
                <span className="font-medium">{link.label}</span>
                <Icon
                  aria-hidden="true"
                  className="h-5 w-5 text-muted transition group-hover:text-moss"
                />
              </a>
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
    </main>
  );
}
