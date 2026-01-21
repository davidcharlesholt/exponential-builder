import { cn } from "@/lib/utils";

interface ProseProps {
  children: React.ReactNode;
  className?: string;
}

export function Prose({ children, className }: ProseProps) {
  return (
    <div
      className={cn(
        "prose prose-zinc dark:prose-invert",
        // Base typography - centered with readable line length
        "mx-auto max-w-[65ch]",
        // Headings use DM Sans
        "[&_h1]:font-heading [&_h1]:text-4xl [&_h1]:font-semibold [&_h1]:tracking-tight [&_h1]:leading-tight",
        "[&_h2]:font-heading [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:leading-tight [&_h2]:mt-12 [&_h2]:mb-4",
        "[&_h3]:font-heading [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_h3]:leading-tight [&_h3]:mt-8 [&_h3]:mb-3",
        // Body text uses Source Serif (default)
        "[&_p]:leading-[1.75] [&_p]:mb-6",
        // Italic subheads
        "[&_p>em]:text-lg [&_p>em]:not-italic [&_p>em]:italic [&_p>em]:text-muted-foreground",
        // Strong emphasis
        "[&_strong]:font-semibold [&_strong]:text-foreground",
        // Lists (bullets)
"[&_ul]:my-6 [&_ul]:space-y-2 [&_ul]:list-disc [&_ul]:pl-6",
"[&_li]:leading-[1.75] [&_li]:pl-1",
        "[&_ol]:my-6 [&_ol]:space-y-2",
        // Horizontal rules (section breaks)
        "[&_hr]:my-12 [&_hr]:border-t [&_hr]:border-border",
        className
      )}
    >
      {children}
    </div>
  );
}
