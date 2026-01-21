export type ProjectStatus = "active" | "acquired" | "discontinued";

export interface Project {
  id: string;
  name: string;
  initials: string;
  color: string;
  description: string;
  status: ProjectStatus;
  /** Optional icon path. Place files in /public/icons/ and reference as "/icons/<filename>" */
  icon?: string;
  url?: string;
}

export const projects: Project[] = [
  {
    id: "nudge",
    name: "Nudge",
    initials: "NU",
    color: "bg-emerald-500",
    description: "A lightweight invoicing tool that helps freelancers get paid faster with automatic follow-ups.",
    status: "active",
    icon: "/icons/nudge.png",
    url: "https://nudgesend.com",
  },
  {
    id: "wordcasters-quest",
    name: "Wordcaster's Quest",
    initials: "WQ",
    color: "bg-amber-500",
    description: "Fantasy card-based reading adventure designed to build confidence and literacy skills for dyslexic learners.",
    status: "active",
    icon: "/icons/wordcasters-quest.png",
  },
  {
    id: "makermetrics",
    name: "MakerMetrics",
    initials: "MM",
    color: "bg-sky-500",
    description: "Tracks Etsy and Printify sales, costs, and profits in one clear dashboard for makers online.",
    status: "active",
    icon: "/icons/makermetrics.png",
    url: "https://makermetrics.io",
  },
  {
    id: "sayso-feedback",
    name: "SaySo Feedback",
    initials: "SF",
    color: "bg-violet-500",
    description: "Collects real customer feedback via QR codes, turning opinions into actionable business insights.",
    status: "active",
    icon: "/icons/sayso-feedback.png",
    url: "https://saysofeedback.com",
  },
  {
    id: "programmatic-seo-course",
    name: "Programmatic SEO Course",
    initials: "PS",
    color: "bg-rose-500",
    description: "Teaches automated creation of hundreds-plus optimized pages using tools, no coding required.",
    status: "acquired",
    icon: "/icons/programmatic-seo-course.png",
    url: "https://programmaticseocourse.com",
  },
  {
    id: "giant-leap",
    name: "Giant Leap",
    initials: "GL",
    color: "bg-zinc-800 dark:bg-zinc-200",
    description: "Docu-style videos spotlighting emerging startups, sharing optimistic stories about the future of technology.",
    status: "discontinued",
    icon: "/icons/giant-leap.png",
  },
  {
    id: "bizspark",
    name: "BizSpark",
    initials: "BS",
    color: "bg-zinc-800 dark:bg-zinc-200",
    description: "A curated Notion database of business models, organized by category, with niche-specific ideas to apply each.",
    status: "discontinued",
    icon: "/icons/bizspark.png",
  },
  {
    id: "paw-spa-hub",
    name: "Paw Spa Hub",
    initials: "PH",
    color: "bg-zinc-800 dark:bg-zinc-200",
    description: "SEO-driven directory aggregating local dog spa listings targeting Google Maps location searches.",
    status: "discontinued",
    icon: "/icons/paw-spa-hub.png",
  },
];
