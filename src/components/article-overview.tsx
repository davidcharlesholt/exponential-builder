import { Clock } from "lucide-react";
import { articles } from "@/lib/articles";

interface ArticleOverviewProps {
  onSelectArticle: (articleId: string) => void;
}

export function ArticleOverview({ onSelectArticle }: ArticleOverviewProps) {
  return (
    <div className="mx-auto max-w-2xl space-y-8">
      {articles.map((article) => (
        <button
          key={article.id}
          onClick={() => onSelectArticle(article.id)}
          className="group block w-full text-left transition-colors"
        >
          <div className="space-y-2">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="font-heading text-2xl font-semibold tracking-tight transition-colors group-hover:text-foreground/80">
                {article.title}
              </h2>
              <div className="flex shrink-0 items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                <Clock className="size-3" />
                <span>{article.readTime} min</span>
              </div>
            </div>
            <p className="font-body text-[17px] italic leading-relaxed text-muted-foreground">
              {article.subtitle}
            </p>
          </div>
        </button>
      ))}
    </div>
  );
}
