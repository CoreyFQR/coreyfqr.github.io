import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-line py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-10 max-w-2xl">
          {eyebrow ? (
            <p className="mb-3 text-sm font-medium uppercase text-moss">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-3xl font-semibold text-ink sm:text-4xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
