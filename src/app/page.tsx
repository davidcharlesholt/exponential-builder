"use client";

import { Container } from "@/components/container";
import { ProjectCard } from "@/components/project-card";
import { Prose } from "@/components/prose";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <Container className="py-10 lg:py-14">
      <Tabs defaultValue="projects" className="w-full">
        <div className="flex justify-center lg:justify-end">
          <TabsList className="h-auto gap-6 p-2 font-heading">
          <TabsTrigger value="projects" className="px-4 py-2">
            Projects
          </TabsTrigger>
          <TabsTrigger value="manifesto" className="px-4 py-2">
            Manifesto
          </TabsTrigger>
          <TabsTrigger value="articles" className="px-4 py-2">
            Articles
          </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="projects" className="mt-10">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="manifesto" className="mt-10">
          <Prose>
            <h1>Built to Compound</h1>
            <p>
              <em>Designing exponential systems for the solo builder.</em>
            </p>

            <p>
              There&apos;s a moment—usually around 11 PM, staring at a Notion board that&apos;s become a graveyard of good intentions—when you realize the math doesn&apos;t work.
            </p>

            <p>One person. Twenty-three tasks. Twelve hours of focused work, if you&apos;re generous with the definition of &ldquo;focused.&rdquo;</p>

            <p>The traditional answer: hire someone. Build a team. Become a manager.</p>

            <p>But here&apos;s the thing. I didn&apos;t start building to manage people. I started building to make things.</p>

            <p>And I suspect you did too.</p>

            <hr />

            <p>So I started asking: what if the math could work differently?</p>

            <p>Not by doing more. Not by working longer. But by changing what kind of work I do.</p>

            <p>System + Time = Compound. Task + Time = Linear.</p>

            <p>
              Most work is the second equation. You do it, it&apos;s done, you do more tomorrow. But some work—the right work—changes the rules. One decision that eliminates hundreds of future ones. A workflow that improves each time it runs. A system that keeps working after you&apos;ve stopped touching it.
            </p>

            <p>That&apos;s the math I&apos;m interested in.</p>

            <hr />

            <p>Here&apos;s what happened: AI made this suddenly, absurdly accessible.</p>

            <p>We now have:</p>

            <ul>
              <li>Agents that execute while you sleep.</li>
              <li>Tools that reason through problems you&apos;d need a cofounder to debate.</li>
              <li>Systems that learn from their own outputs.</li>
              <li>Workflows that compound instead of deplete.</li>
            </ul>

            <p>The bottleneck used to be code. Capital. Credentials. Headcount.</p>

            <p>Now it&apos;s something simpler and harder.</p>

            <p><strong>How you think about building.</strong></p>

            <hr />

            <p>I call this being an <em>exponential builder</em>. Which sounds grandiose until you realize what it actually means:</p>

            <ul>
              <li>Designing systems instead of completing tasks</li>
              <li>Treating ideas as experiments, not identities</li>
              <li>Building small things that keep paying you back</li>
              <li>Letting tools do the boring work so judgment stays human</li>
            </ul>

            <p>Not louder. Not faster. Just operating on different math.</p>

            <p>Structurally unfair.</p>

            <hr />

            <p>
              I&apos;m not interested in hustle culture. The 4 AM mornings, the &ldquo;rise and grind,&rdquo; the performing of busyness. I&apos;ve done it. It doesn&apos;t scale—it breaks you.
            </p>

            <p>
              I&apos;m not interested in AI hype either. The breathless demos. The &ldquo;this changes everything&rdquo; takes that change nothing about what gets shipped.
            </p>

            <p>
              <strong>What I&apos;m interested in is quieter.</strong> What actually compounds when you&apos;re one person building real things?
            </p>

            <hr />

            <p>What you&apos;ll find here:</p>

            <ul>
              <li>
                <strong>Real projects.</strong> What worked. What broke. What I&apos;d never do again.
              </li>
              <li>
                <strong>Mental models.</strong> How I think about decisions, systems, and compounding when there&apos;s no team to absorb my mistakes.
              </li>
              <li>
                <strong>AI as infrastructure.</strong> Not predictions about the future—how I actually use it today to ship like a small team without becoming one.
              </li>
            </ul>

            <hr />

            <p>
              This is for the ones who want to stay small and still win. The builders who know that solo doesn&apos;t mean limited—it means choosing a different game.
            </p>

            <p>Small + Compound beats Big + Linear.</p>

            <p>
              I choose this game. I choose work <strong>built to compound.</strong>
            </p>
          </Prose>
        </TabsContent>

        <TabsContent value="articles" className="mt-10">
          <div className="text-muted-foreground">
            <p>Articles coming soon...</p>
          </div>
        </TabsContent>
      </Tabs>
    </Container>
  );
}
