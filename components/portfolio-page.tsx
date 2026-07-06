"use client";

import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import {
  locales,
  portfolioContent,
  profile,
  type Locale,
} from "@/lib/portfolio-data";
import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { Tag } from "@/components/tag";

export function PortfolioPage() {
  const [locale, setLocale] = useState<Locale>("zh");
  const content = portfolioContent[locale];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const photoSrc = `${basePath}${profile.photo}`;

  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
  }, [locale]);

  return (
    <main>
      <header className="sticky top-0 z-20 border-b border-line/80 bg-paper/90 backdrop-blur">
        <nav
          aria-label={content.navAriaLabel}
          className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4"
        >
          <a href="#" className="truncate text-sm font-semibold text-ink">
            {profile.name}
          </a>
          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-7 text-sm text-muted md:flex">
              {content.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="transition hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div
              aria-label={content.languageToggleLabel}
              className="flex rounded-full border border-line bg-white p-1 text-xs font-medium text-muted"
            >
              {locales.map((item) => (
                <button
                  key={item}
                  type="button"
                  aria-pressed={locale === item}
                  onClick={() => setLocale(item)}
                  className={`rounded-full px-3 py-1.5 transition ${
                    locale === item
                      ? "bg-ink text-white"
                      : "hover:bg-paper hover:text-ink"
                  }`}
                >
                  {item === "zh" ? "中文" : "EN"}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <section className="mx-auto grid min-h-[calc(100vh-5rem)] w-full max-w-6xl items-center gap-12 px-6 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div>
          <p className="mb-5 text-sm font-medium uppercase text-moss">
            {content.eyebrow}
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] text-ink sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-2xl text-2xl leading-9 text-ink sm:text-3xl">
            {content.slogan}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            {content.intro}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-moss focus:outline-none focus:ring-2 focus:ring-moss focus:ring-offset-2 focus:ring-offset-paper"
            >
              {content.primaryCta}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white px-6 py-3 text-sm font-medium text-ink transition hover:-translate-y-0.5 hover:border-moss/50 hover:text-moss focus:outline-none focus:ring-2 focus:ring-moss focus:ring-offset-2 focus:ring-offset-paper"
            >
              {content.secondaryCta}
              <Mail aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-lg border border-line bg-white shadow-soft">
          <Image
            src={photoSrc}
            alt={profile.photoAlt}
            fill
            priority
            sizes="(min-width: 1024px) 420px, 90vw"
            className="object-cover"
          />
        </div>
      </section>

      <Section id="about" eyebrow="01" title={content.about.heading}>
        <p className="max-w-3xl text-xl leading-9 text-muted">
          {content.about.body}
        </p>
      </Section>

      <Section id="projects" eyebrow="02" title={content.navLinks[1].label}>
        <div className="grid gap-5 md:grid-cols-3">
          {content.projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              label={content.selectedWorkLabel}
            />
          ))}
        </div>
      </Section>

      <Section id="skills" eyebrow="03" title={content.navLinks[2].label}>
        <div className="flex max-w-3xl flex-wrap gap-3">
          {content.skills.map((skill) => (
            <Tag key={skill}>{skill}</Tag>
          ))}
        </div>
      </Section>

      <Section id="contact" eyebrow="04" title={content.navLinks[3].label}>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {content.contactLinks.map((link) => {
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
          <p>{content.footerNote}</p>
        </div>
      </footer>
    </main>
  );
}
