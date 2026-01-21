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
          {/* EB Logo */}
          <img
            src="/icons/exponential-builder.png"
            alt="Exponential Builder"
            className="h-7 w-auto"
          />
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
      <div className="flex flex-col gap-5">
        <h1 className="font-heading text-3xl font-semibold tracking-tight leading-[1.05] sm:text-4xl lg:text-5xl">
          Built to Compound.
        </h1>
        <p className="text-[17px] italic leading-relaxed text-muted-foreground">
          What happens when you stop grinding for output and start designing for leverage?
        </p>
        <p className="text-[15px] leading-relaxed text-muted-foreground">
          What actually compounds when you&apos;re one person building real things? I write about systems that keep working after you&apos;ve stopped touching them, mental models for solo builders, and the math that makes small + compound beat big + linear.
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
