"use client";

import { useState } from "react";
import Image from "next/image";
import { Twitter, Github, Linkedin, Rocket } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Sidebar() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email);
    setEmail("");
  };

  return (
    <aside className="flex flex-col gap-8 p-8 lg:p-10">
      {/* Profile Section */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-5">
          {/* Headshot */}
          <div className="relative h-24 w-24 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
            <Image
              src="/headshot.jpg"
              alt="David Holt"
              fill
              className="object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
          {/* EB Logo (inline SVG for crisp rendering) */}
<svg
  viewBox="0 0 172.35 145.67"
  className="h-7 w-auto text-zinc-900 dark:text-zinc-100"
  aria-label="Exponential Builder"
>
  <path
    fill="currentColor"
    d="M84.8,129.85l2.54,11.19c.6,2.63,3.04,4.04,5.87,3.39l41.08-9.48c21.02-4.85,38.06-25.83,38.06-46.84h0c0-9.84-3.73-17.94-9.86-23.29,6.13-8.17,9.86-18,9.86-27.84h0c0-21.02-17.04-34.12-38.06-29.27l-42.09,9.72c-2.24.52-4.18-.6-4.65-2.68l-2.54-11.19c-.6-2.63-3.04-4.04-5.87-3.39L0,18.43v127.24l80.14-18.5c2.24-.52,4.18.6,4.65,2.68ZM24.99,114.91v-26.13l55.15-12.73c2.24-.52,4.18.6,4.65,2.68l2.54,11.19c.6,2.63,3.04,4.04,5.87,3.39l40.71-9.4c7.04-1.62,13.09,2.38,13.42,9.34.35,7.42-5.63,15-13.05,16.71l-42.09,9.72c-2.24.52-4.18-.6-4.65-2.68l-2.54-11.19c-.6-2.63-3.04-4.04-5.87-3.39l-54.14,12.5ZM79.14,51.28l-54.14,12.5v-26.13l55.15-12.73c2.24-.52,4.18.6,4.65,2.68l2.54,11.19c.6,2.63,3.04,4.04,5.87,3.39l40.71-9.4c7.04-1.62,13.09,2.38,13.42,9.34.35,7.42-5.63,15-13.05,16.71l-42.09,9.72c-2.24.52-4.18-.6-4.65-2.68l-2.54-11.19c-.6-2.63-3.04-4.04-5.87-3.39Z"
  />
</svg>
        </div>
        <div>
          <h2 className="text-lg font-semibold tracking-tight">David Holt</h2>
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Rocket className="size-3.5" />
            <span className="italic">ExponentialBuilder.com</span>
          </p>
        </div>
      </div>

      {/* Headline & Subhead */}
      <div className="flex flex-col gap-4">
      <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
          Built to Compound.
        </h1>
        <p className="text-[15px] leading-relaxed text-muted-foreground">
        What happens when you stop grinding for output and start designing for leverage? What actually compounds when you're one person building real things? I write about systems that keep working after you've stopped touching them, mental models for solo builders, and the math that makes small + compound beat big + linear. 
        </p>
      </div>

      {/* Email Signup */}
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1"
        />
        <Button type="submit">Subscribe</Button>
      </form>

      {/* Social Links */}
      <div className="flex items-center gap-4">
        <a
          href="https://x.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow on X (Twitter)"
          className="rounded-md p-1.5 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <Twitter className="size-5" />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View GitHub profile"
          className="rounded-md p-1.5 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <Github className="size-5" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Connect on LinkedIn"
          className="rounded-md p-1.5 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <Linkedin className="size-5" />
        </a>
      </div>
    </aside>
  );
}
