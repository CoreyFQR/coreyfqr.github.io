import type { Project } from "@/lib/portfolio-data";
import { Tag } from "@/components/tag";

type ProjectCardProps = {
  project: Project;
  label: string;
};

export function ProjectCard({ project, label }: ProjectCardProps) {
  return (
    <article className="group flex min-h-64 flex-col justify-between rounded-lg border border-line bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-moss/40 hover:shadow-soft">
      <div>
        <p className="mb-5 text-sm font-medium text-moss">{label}</p>
        <h3 className="text-xl font-semibold text-ink">{project.title}</h3>
        <p className="mt-4 leading-7 text-muted">{project.description}</p>
      </div>
      <div className="mt-8 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </article>
  );
}
