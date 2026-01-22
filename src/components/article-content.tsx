import { ArrowLeft, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Prose } from "@/components/prose";

interface ArticleContentProps {
  title: string;
  readTime: number;
  onBack: () => void;
  children: React.ReactNode;
}

export function ArticleContent({ title, readTime, onBack, children }: ArticleContentProps) {
  return (
    <article className="mx-auto max-w-[65ch]">
      {/* Back button and read time */}
      <div className="mb-8 flex items-center justify-between">
        <Button
          variant="ghost"
          onClick={onBack}
          className="font-heading -ml-3 gap-2 text-sm"
        >
          <ArrowLeft className="size-4" />
          All Articles
        </Button>
        <div className="flex items-center gap-1.5 rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground">
          <Clock className="size-3" />
          <span>{readTime} min</span>
        </div>
      </div>

      {/* Article content */}
      <Prose>
        <h1>{title}</h1>
        {children}
      </Prose>
    </article>
  );
}
