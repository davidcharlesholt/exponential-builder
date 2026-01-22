/**
 * Articles data with automatic reading time calculation
 * 
 * To add a new article:
 * 1. Create a new file in /src/content/<article-slug>.ts with the full text content
 * 2. Export the text as a constant (e.g., export const myArticleText = `...`)
 * 3. Import the text constant here
 * 4. Add the article to the articles array below
 * 5. Set readTime: calculateReadingTime(myArticleText) - it will auto-calculate based on ~225 words per minute
 * 6. Add the full JSX content to articlesData array (for rendering)
 */

import { calculateReadingTime } from "./reading-time";
import { exponentialMindsetText } from "@/content/exponential-mindset";

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  readTime: number; // in minutes (auto-calculated)
  content: React.ReactNode;
  publishedAt: string;
}

export const articles: Omit<Article, 'content'>[] = [
  {
    id: "exponential-mindset",
    title: "The Exponential Mindset",
    subtitle: "Designing work that compounds when effort no longer does",
    readTime: calculateReadingTime(exponentialMindsetText), // Auto-calculated from content
    publishedAt: "2024-01-15",
  },
];
