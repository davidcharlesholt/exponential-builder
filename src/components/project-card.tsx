import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

const statusConfig = {
  active: {
    label: "Active",
    className: "bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-400 dark:border-emerald-800",
  },
  acquired: {
    label: "Acquired",
    className: "bg-sky-100 text-sky-700 border-sky-200 dark:bg-sky-950 dark:text-sky-400 dark:border-sky-800",
  },
  discontinued: {
    label: "Discontinued",
    className: "bg-zinc-100 text-zinc-500 border-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:border-zinc-700",
  },
};

/**
 * Project icon component
 * - If project.icon exists, renders an image
 * - Otherwise renders colored initials badge as fallback
 *
 * Icon files should be placed in /public/icons/ and referenced as "/icons/<filename>"
 */
function ProjectIcon({ project }: { project: Project }) {
  if (project.icon) {
    return (
      <div className="relative size-12 overflow-hidden rounded-lg">
        <Image
          src={project.icon}
          alt={`${project.name} icon`}
          fill
          className="object-cover"
          onError={(e) => {
            // Hide broken image, parent will show background
            e.currentTarget.style.display = "none";
          }}
        />
      </div>
    );
  }

  // Fallback: colored square with initials
  return (
    <div
      className={cn(
        "flex size-12 items-center justify-center rounded-lg text-sm font-semibold text-white dark:text-zinc-900",
        project.color
      )}
    >
      {project.initials}
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const status = statusConfig[project.status];

  return (
    <div className="group relative flex flex-col gap-4 rounded-xl bg-white p-5 shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-shadow hover:shadow-[0_6px_16px_rgba(0,0,0,0.1)] dark:bg-zinc-900 dark:shadow-[0_4px_12px_rgba(0,0,0,0.25)] dark:hover:shadow-[0_6px_16px_rgba(0,0,0,0.35)]">
      {/* Status pill - top right, aligned with icon top */}
      <Badge className={cn("absolute right-5 top-5", status.className)}>
        {status.label}
      </Badge>

      {/* Project icon (image or initials fallback) */}
      <ProjectIcon project={project} />

      {/* Content */}
      <div className="flex flex-col gap-1.5">
        <h3 className="font-heading text-base font-semibold tracking-tight">
          {project.name}
        </h3>
        <p className="text-[13px] leading-relaxed text-muted-foreground line-clamp-2">
          {project.description}
        </p>
      </div>
    </div>
  );
}
