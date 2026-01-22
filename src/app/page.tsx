"use client";

import { useState } from "react";
import { Container } from "@/components/container";
import { ProjectCard } from "@/components/project-card";
import { Prose } from "@/components/prose";
import { ArticleOverview } from "@/components/article-overview";
import { ArticleContent } from "@/components/article-content";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projects } from "@/lib/projects";
import { articles } from "@/lib/articles";

export default function Home() {
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);

  // Get article data for displaying read time
  const exponentialMindsetArticle = articles.find(a => a.id === "exponential-mindset");

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
          <TabsTrigger 
            value="articles" 
            className="px-4 py-2"
            onClick={() => setSelectedArticle(null)}
          >
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
              There&apos;s a moment (usually around 11 PM, staring at a Notion board that&apos;s become a graveyard of good intentions) when you realize the math doesn&apos;t work.
            </p>

            <p>One person. Twenty-three tasks. Twelve hours of focused work, if you&apos;re generous with the definition of &ldquo;focused.&rdquo;</p>

            <p>The traditional answer: hire someone. Build a team. Become, god help you, a manager.</p>

            <p>But here&apos;s the thing. I didn&apos;t start building to manage people. I started building to make things.</p>

            <p>And I suspect you did too.</p>

            <p>So the question becomes: what if the math could work differently?</p>

            <hr />

            <h2>The Two Equations</h2>

            <p>
              There&apos;s a principle buried in operations research that nobody talks about because it sounds boring until you realize it explains basically everything about who wins and who burns out.
            </p>

            <p>
              Some work is linear. You do it, it&apos;s done, you do more tomorrow. Task + Time = Output. The hours you put in correspond roughly to what you get out. This is fine. This is most work. This is also a trap.
            </p>

            <p>
              Other work is exponential. One decision that eliminates three hundred future decisions. A workflow that gets <em>better</em> each time it runs. A system that keeps producing after you&apos;ve stopped touching it. System + Time = Compound.
            </p>

            <p>The difference isn&apos;t effort. It&apos;s <em>type</em>.</p>

            <p>That&apos;s the math I&apos;m interested in.</p>

            <p>
              Warren Buffett once said that the difference between successful people and <em>really</em> successful people is that really successful people say no to almost everything. But this isn&apos;t actually advice about saying no. It&apos;s advice about <em>leverage</em>. It&apos;s about recognizing that some actions reverberate over time and most don&apos;t.
            </p>

            <p>Which is to say: the question isn&apos;t whether to work hard. The question is whether your work compounds.</p>

            <hr />

            <h2>And Then AI Made Everything Weird</h2>

            <p>Here&apos;s where it gets interesting.</p>

            <p>
              The constraint on exponential building used to be real and formidable. To build systems instead of completing tasks, you needed code. Capital. Credentials. Headcount. The ability to ship 1.0 of something that could then iterate required resources most individual builders simply didn&apos;t have.
            </p>

            <p>AI collapsed this stack.</p>

            <p>We now have:</p>

            <ul>
              <li>Agents that execute multi-step workflows while you sleep</li>
              <li>Tools that can reason through technical problems you&apos;d previously need a cofounder to debate</li>
              <li>Systems that learn from their own outputs and improve without you touching them</li>
              <li>Workflows that generate energy instead of depleting it</li>
            </ul>

            <p>The bottleneck moved. It used to be resources. Now it&apos;s something simpler and, honestly, harder.</p>

            <p><strong>How you think about building.</strong></p>

            <hr />

            <h2>The Complication (Because There&apos;s Always One)</h2>

            <p>
              I should be clear: I&apos;m not interested in the 4 AM morning routine. The &ldquo;rise and grind&rdquo; aesthetic. The performance of busyness that masquerades as productivity. I&apos;ve done it. It doesn&apos;t scale. It breaks you. And it operates on the wrong math entirely.
            </p>

            <p>
              I&apos;m also not interested in the AI hype industrial complex. The demos that show impressive capabilities but never explain what actually ships. The &ldquo;this changes everything&rdquo; takes that change nothing about what gets built.
            </p>

            <p>What I&apos;m interested in is quieter. What <em>actually</em> compounds when you&apos;re one person building real things?</p>

            <p>
              The answer seems to be this: you become an exponential builder not by doing more, but by changing the <em>kind</em> of work you do. Designing systems instead of completing tasks. Treating ideas as experiments, not identities. Building small things that keep paying you back long after you&apos;ve moved on.
            </p>

            <p>The math doesn&apos;t require you to become superhuman. It requires you to operate on different variables.</p>

            <hr />

            <h2>The Invitation</h2>

            <p>
              So here&apos;s what I&apos;m going to do. I&apos;m going to write about this. Real projects, what worked, what broke, what I&apos;d never do again. Mental models for decisions and systems and compounding when there&apos;s no team to absorb my mistakes. AI as infrastructure, not as prophecy. How I actually use these tools today to ship like a small team without becoming one.
            </p>

            <p>
              This is for the builders who want to stay small and still win. The ones who know that solo doesn&apos;t mean limited. It means choosing a different game.
            </p>

            <p>Small + Compound beats Big + Linear.</p>

            <p>
              I don&apos;t know if this is right. But I know the old math doesn&apos;t work. And I&apos;d rather bet on different math than keep trying to force the equations that were never designed for one person with twenty-three tasks and twelve hours.
            </p>

            <p>The question, as always: <em>What&apos;s the math?</em></p>

            <p>Choose work <strong>built to compound</strong>. The rest is noise.</p>
          </Prose>
        </TabsContent>

        <TabsContent value="articles" className="mt-10">
          {!selectedArticle ? (
            <ArticleOverview onSelectArticle={setSelectedArticle} />
          ) : selectedArticle === "exponential-mindset" ? (
            <ArticleContent
              title="The Exponential Mindset"
              readTime={exponentialMindsetArticle?.readTime || 11}
              onBack={() => setSelectedArticle(null)}
            >
              <p>
                <em>Designing work that compounds when effort no longer does</em>
              </p>

              <p>
                In 1862, a surgeon named John Eric Erichsen examined a patient who had been in a minor railway accident. No broken bones. No visible wounds. The train had merely stopped suddenly. A jolt. Nothing dramatic.
              </p>

              <p>And yet the patient couldn&apos;t walk properly. Couldn&apos;t think straight. Complained of fatigue that wouldn&apos;t lift and anxiety that seemed to come from nowhere.</p>

              <p>Erichsen, one of the most respected surgeons in Victorian England, had no idea what he was looking at.</p>

              <p>
                He called it &ldquo;railway spine.&rdquo; Over the next few decades, doctors would see thousands of similar cases. Passengers involved in trivial collisions, a coupling jerk, a brake misfire, reporting symptoms that made zero medical sense. Chronic pain. Paralysis. Cognitive fog that lasted years.
              </p>

              <p>
                Some doctors called it hysteria. Others figured people were faking it to sue the railway companies. The symptoms didn&apos;t fit any known category. How could someone be injured without being <em>injured</em>?
              </p>

              <p>Here&apos;s the thing: the bodies were right and the doctors were wrong.</p>

              <p>
                The human nervous system hadn&apos;t evolved for velocity, vibration, and industrial-scale shock. What was new wasn&apos;t the injury itself. It was the speed. The sustained sensory overload. The mismatch between what the body expected and what the environment delivered.
              </p>

              <p>Railway spine was the nervous system&apos;s way of saying: <em>This is not what I was built for.</em></p>

              <p>I think we&apos;re all living through a version of railway spine right now. Only instead of our spinal cords, it&apos;s our prefrontal cortices getting jolted.</p>

              <p>The terrain has changed. And most of our mental models haven&apos;t caught up.</p>

              <hr />

              <h2>The Mismatch</h2>

              <p>The brain you&apos;re using to read this essay is roughly 300,000 years old.</p>

              <p>
                Same prefrontal cortex that planned hunts on the African savanna. Same working memory that tracked which berries would kill you. Same pattern-recognition systems that noticed the rustle in the grass might be a leopard, and you should probably run now and philosophize later.
              </p>

              <p>
                Evolutionary biologists have a name for this gap between the environments we evolved <em>for</em> and the environments we now <em>inhabit</em>: mismatch theory. The gap is not small. The savanna moved at the speed of seasons. Your phone moves at the speed of light.
              </p>

              <p>Same hardware. Wildly different demands.</p>

              <p>
                Cognitive scientists have tried to quantify part of this mismatch. Human working memory (the mental scratch pad where you hold information while thinking) can handle about four items simultaneously.
              </p>

              <p>Not forty. Not four hundred.</p>

              <p>Four.</p>

              <p>
                When the environment was sparse, four was plenty. You tracked the weather, the herd&apos;s location, your tribe&apos;s mood, maybe a predator lurking somewhere. Four handled it.
              </p>

              <p>
                Now? Four is a rounding error. The average knowledge worker touches hundreds of information streams daily. Each email, notification, Slack ping, and browser tab competes for one of those four slots.
              </p>

              <hr />

              <h2>The Analogy Problem</h2>

              <p>Our brains have a coping strategy for complexity, and it&apos;s a pretty good one: analogy.</p>

              <p>
                Dedre Gentner, a cognitive scientist who formalized something called structure-mapping theory, showed that humans understand new things by layering them onto familiar patterns. We don&apos;t process novelty from zero. We ask <em>What is this like?</em> and borrow scaffolding from something we already grasp.
              </p>

              <p>
                This is remarkably efficient. A child who learns &ldquo;the heart is a pump&rdquo; can suddenly reason about circulation without a medical degree. The analogy provides structure. Understanding follows.
              </p>

              <p>For most of human history, analogies worked beautifully:</p>

              <p><em>This tool is like the last one, refined.</em></p>

              <p><em>This problem resembles something we&apos;ve solved.</em></p>

              <p><em>This situation fits a pattern.</em></p>

              <p>The world cooperated. Change arrived slowly enough that yesterday&apos;s patterns remained useful today. The map and the territory matched.</p>

              <p>Then they stopped matching.</p>

              <hr />

              <h2>When Analogies Break</h2>

              <p>
                Sometime in the late twentieth century the rate of change crossed a threshold. Not one technology, but the <em>combination</em> of technologies. Networks linking to networks. Feedback loops accelerating feedback loops. Changes arriving in cliffs instead of slopes.
              </p>

              <p>In this environment, our instinctive question (<em>What is this like?</em>) started producing dangerous answers.</p>

              <p>
                Artificial intelligence is not &ldquo;better software.&rdquo; That analogy flattens something categorically different into something comfortable. AI doesn&apos;t just execute faster. It generates, learns, adapts. It changes what &ldquo;expertise&rdquo; and &ldquo;creativity&rdquo; even mean. Treating AI as &ldquo;better software&rdquo; is like treating electricity as improved candlelight.
              </p>

              <p>
                The internet was not &ldquo;faster mail.&rdquo; It collapsed geography and gatekeeping simultaneously, redefining what it meant to have a voice, an audience, a business. It was (and is) something genuinely new under the sun.
              </p>

              <p>These analogies don&apos;t illuminate. They anesthetize. They provide the <em>feeling</em> of comprehension while blocking the real thing.</p>

              <p>And when comprehension fails, anxiety rises to fill the vacuum.</p>

              <p>Reality has moved on. Our mental maps haven&apos;t.</p>

              <hr />

              <h2>Vertigo</h2>

              <p>Pilots have a term for when the inner ear disagrees with the instruments: <em>spatial disorientation</em>. Or more simply: vertigo.</p>

              <p>
                Your body is certain you&apos;re level. The altimeter says you&apos;re banking toward a mountain. Every instinct screams to trust the body. But the body is wrong... and trusting it will kill you.
              </p>

              <p>The only survival strategy is counterintuitive: ignore the sensations. Trust the gauges.</p>

              <p>
                I think something parallel is happening cognitively. Our mental instruments, calibrated across deep evolutionary time for linear, local, gradual change, are producing unreliable readings in an exponential environment. Cause and effect blur. Expertise decays faster than it forms. The future refuses to resemble the past.
              </p>

              <p>The result isn&apos;t ordinary overwhelm. Overwhelm implies too much of something manageable. This is stranger:</p>

              <p><em>Nothing feels stable enough to ignore.</em></p>

              <p>
                It&apos;s not a willpower problem. It&apos;s not that you&apos;re bad at focusing or insufficiently disciplined. It&apos;s mismatch. We&apos;re processing exponential signals with linear hardware.
              </p>

              <p>The hardware upgrade cycle runs on evolutionary time. Tens of thousands of years.</p>

              <p>We don&apos;t have tens of thousands of years.</p>

              <hr />

              <h2>The Clockmaker&apos;s Lesson</h2>

              <p>History has seen this pattern before: environments changing faster than the models used to understand them.</p>

              <p>
                In the 1700s, sailors were dying because no one could reliably calculate longitude at sea. The experts assumed the solution would come from better astronomy. More precise star charts, more careful observation.
              </p>

              <p>They were wrong.</p>

              <p>
                The breakthrough came from a clock. John Harrison, a self-taught carpenter from Yorkshire, realized that if you could keep accurate time on a moving ship, longitude became trivial. The solution didn&apos;t come from refining the existing approach. It came from changing the instrument. Harrison spent forty years perfecting his marine chronometer, facing skepticism and resistance from the scientific establishment before being proven right.
              </p>

              <p>The astronomers weren&apos;t stupid. They were experts in a paradigm that had stopped matching reality.</p>

              <p>
                The established approaches to our current overwhelm (work harder, learn faster, optimize better, download another productivity app) aren&apos;t stupid either. They&apos;re just out of sync with the problem we&apos;re actually facing.
              </p>

              <p>We don&apos;t need more effort.</p>

              <p>We need different instruments.</p>

              <hr />

              <h2>Linear Versus Exponential</h2>

              <p>Linear thinking makes certain assumptions:</p>

              <ul>
                <li>Effort scales proportionally to results</li>
                <li>Progress accumulates additively</li>
                <li>Stability rewards optimization</li>
              </ul>

              <p>These assumptions served beautifully in slow, predictable systems. Work hard, get ahead. Master your craft, earn returns. Your parents&apos; career advice was calibrated to this world, and it was good advice... for that world.</p>

              <p>Exponential systems break every assumption:</p>

              <ul>
                <li>Small inputs can cascade into massive outputs</li>
                <li>Feedback loops dominate individual effort</li>
                <li>Design matters more than execution volume</li>
              </ul>

              <p>The math is clarifying:</p>

              <p><strong>Linear</strong>: 1 + 1 + 1 + 1 + 1 = 5</p>

              <p><strong>Exponential</strong>: 1 → 2 → 4 → 8 → 16</p>

              <p>Five steps of linear progress gives you 5. Five steps of exponential progress gives you 16.</p>

              <p>
                But here&apos;s the trap: early exponential growth <em>looks</em> linear. The curve is flat until suddenly it isn&apos;t. Our brains, wired for linear extrapolation, consistently underestimate where the curve goes.
              </p>

              <p>After twenty steps, linear gives you 20. Exponential gives you over a million.</p>

              <p>We cannot feel this. We can only know it... and design for it anyway.</p>

              <hr />

              <h2>Cool, Now What?</h2>

              <p>If analogy fails in exponential terrain, what replaces it?</p>

              <p>Not prediction. Volatile systems mock forecasts. (If you&apos;ve ever tried to guess where AI will be in two years, you know this viscerally.)</p>

              <p>Not speed. You can&apos;t outrun compound curves.</p>

              <p>
                Not continuous learning, at least not in the way we usually mean it. Knowledge half-life now decays faster than acquisition. By the time you&apos;ve mastered the current paradigm, the paradigm has moved.
              </p>

              <p>
                What replaces analogy is a shift in orientation: from executing to designing. From effort as input to leverage as strategy. From optimizing outcomes to building systems.
              </p>

              <p>
                I call this an Exponential Mindset, and I don&apos;t love the name (it sounds like something you&apos;d find in a LinkedIn influencer&apos;s bio) but I haven&apos;t found a better one. The core idea: don&apos;t try to predict where the terrain will shift. Build structures that remain useful <em>regardless</em> of where it shifts.
              </p>

              <p>A few principles:</p>

              <p><strong>Systems over tasks.</strong> Work that continues without you.</p>

              <p><strong>Leverage over effort.</strong> Small inputs, disproportionate outputs.</p>

              <p><strong>Optionality over optimization.</strong> Keeping doors open instead of perfecting one path.</p>

              <p><strong>Compounding over accumulation.</strong> Effects that multiply, not just add.</p>

              <p>This isn&apos;t about moving faster. It&apos;s about building things that keep working even when you stop.</p>

              <hr />

              <h2>Why Now</h2>

              <p>For most of history, this kind of leverage required scale. You needed institutions, capital, teams. Individuals couldn&apos;t build systems that ran autonomously. The infrastructure didn&apos;t exist.</p>

              <p>That constraint is dissolving.</p>

              <p>
                Tools now allow individuals to automate execution, accelerate feedback loops, and compound effects. The infrastructure of leverage, once locked behind corporate walls and enterprise contracts, is increasingly available to anyone willing to learn it. A solo operator in 2026 can build things that would have required entire departments a decade ago. This is new. This is genuinely new.
              </p>

              <p>But the bottleneck hasn&apos;t moved.</p>

              <p>Machines execute. They scale. They don&apos;t tire. They don&apos;t complain about working weekends.</p>

              <p>Humans judge. They sense when systems have outlived usefulness. They decide what <em>not</em> to build.</p>

              <p>Judgment remains scarce. And judgment is the rate limiter.</p>

              <p>
                The problem isn&apos;t tool access. It&apos;s the ability to think structurally in a world that rewards reaction. It&apos;s the discipline to step back when everything is screaming at you to step forward.
              </p>

              <hr />

              <h2>Practicing the Exponential Mindset</h2>

              <p>An Exponential Mindset is practiced, not installed. You don&apos;t read about it once and suddenly transform. You work at it. Here&apos;s where I&apos;d start:</p>

              <h3>1. Ask Structure Questions, Not Effort Questions</h3>

              <p><strong>Linear thinking:</strong> <em>How much work will this take?</em></p>

              <p><strong>Exponential thinking:</strong> <em>What happens when this runs without me?</em></p>

              <p>Effort questions assume you are the engine. Structure questions assume you are the architect.</p>

              <p>When you catch yourself planning how hard you&apos;ll work, stop. That&apos;s the wrong question. Redesign for persistence.</p>

              <h3>2. Treat Repetition as a Bug</h3>

              <p>Any task done more than twice is a design flaw.</p>

              <p>In linear systems, repetition is normal. Even virtuous. &ldquo;Putting in the reps.&rdquo; In exponential systems, repetition is a signal screaming for attention. Something is wrong with the design.</p>

              <p><strong>Not:</strong> <em>How do I do this faster?</em></p>

              <p><strong>But:</strong> <em>What would eliminate this category entirely?</em></p>

              <h3>3. Compound Clarity, Not Just Capital</h3>

              <p>Some projects compound <em>understanding</em>. This is underrated.</p>

              <p>Writing sharpens thinking. Systems expose hidden assumptions. Small experiments surface effects that planning cannot predict.</p>

              <p>Ship early. Treat projects as probes. Optimize for learning loops.</p>

              <p>You&apos;re not just building outputs. You&apos;re building maps.</p>

              <h3>4. Design for Optionality</h3>

              <p>Linear minds obsess over prediction: <em>Will this work?</em></p>

              <p>Exponential minds accept that prediction degrades rapidly. They design instead for:</p>

              <ul>
                <li>Reversibility (can I undo this if I&apos;m wrong?)</li>
                <li>Low downside (what&apos;s the worst case?)</li>
                <li>Multiple futures (does this open doors or close them?)</li>
              </ul>

              <p>
                The question isn&apos;t <em>Will this work?</em> The question is: <em>If this works, what opens? If it fails, what did I learn that compounds?</em>
              </p>

              <p>Certainty isn&apos;t available. Asymmetric upside is.</p>

              <h3>5. Automate Volume, Preserve Judgment</h3>

              <p><strong>Linear world:</strong> humans execute, tools assist.</p>

              <p><strong>Exponential world:</strong> the relationship inverts.</p>

              <p>Machines handle volume, repetition, pattern-matching. Everything they&apos;re good at.</p>

              <p>Humans handle framing, tradeoffs, knowing when to quit. Everything that requires taste.</p>

              <p>Automate everything except the decisions that require judgment. Guard judgment jealously.</p>

              <h3>6. Measure What Compounds</h3>

              <p>Motion isn&apos;t progress. Busyness isn&apos;t building. Activity isn&apos;t leverage.</p>

              <p>Better questions:</p>

              <ul>
                <li>Does this reduce future decisions?</li>
                <li>Does this make the next iteration cheaper?</li>
                <li>Does this create leverage I lacked yesterday?</li>
              </ul>

              <p>If the answer is no, you&apos;re moving but not compounding. You&apos;re running to stay in place.</p>

              <p>Which brings me to—</p>

              <hr />

              <h2>The Red Queen&apos;s Lesson</h2>

              <p>In <em>Through the Looking-Glass</em>, the Red Queen tells Alice: &ldquo;It takes all the running you can do, to keep in the same place.&rdquo;</p>

              <p>
                Evolutionary biologists borrowed this for the &ldquo;Red Queen hypothesis.&rdquo; The observation that organisms must constantly adapt just to maintain their relative position, because competitors are adapting too.
              </p>

              <p>
                This feels like modern life. Running to stay still. Refreshing feeds, clearing inboxes, attending meetings about meetings, responding to the constant demand for reaction. Running and running and never getting anywhere.
              </p>

              <p>But here&apos;s what the metaphor misses: the Red Queen is running on linear terrain. She&apos;s doing more of the same thing, faster.</p>

              <p>The Exponential Mindset isn&apos;t about running faster.</p>

              <p>It&apos;s about finding a bicycle.</p>

              <hr />

              <h2>Living Without the Map</h2>

              <p>
                I want to be honest about something: the Exponential Mindset won&apos;t restore the comfort of familiar patterns. It won&apos;t make the world stop feeling strange. Change will keep arriving in bursts. The ground will keep shifting beneath whatever you build.
              </p>

              <p>I don&apos;t have a map for where this is all going. Nobody does. I&apos;m not sure, and anyone who claims certainty is selling something.</p>

              <p>But you don&apos;t need the ground to be stable.</p>

              <p>
                You&apos;re not navigating by memory anymore. You&apos;re not extrapolating from a past that no longer predicts. You&apos;re building systems that stay useful precisely because they don&apos;t require the map to be complete.
              </p>

              <p>
                Those Victorian railway passengers? The ones with the mysterious spine condition that doctors couldn&apos;t explain? Their diagnosis didn&apos;t survive. Medicine eventually figured out what was happening: the nervous system could be overwhelmed without visible damage. Speed itself was a kind of injury. The alarm they felt wasn&apos;t imagined. It was accurate.
              </p>

              <p>The pace wasn&apos;t sustainable. Not in the way they were experiencing it. But a different way of moving through it was possible. Not slower. <em>Different.</em></p>

              <p>Listen... the future doesn&apos;t need people who move faster. We have machines for that.</p>

              <p>
                It needs people who think in systems. Who build for compounding. Who recognize that the fatigue, the anxiety, the sense that nothing feels stable enough to ignore—that&apos;s signal, not weakness. Your nervous system is telling you something true.
              </p>

              <p>The terrain has changed.</p>

              <p>The hardware is what it is.</p>

              <p>But how you work? The instruments you use? The structures you build?</p>

              <p>That&apos;s still a choice.</p>

              <p>Make it deliberately.</p>
            </ArticleContent>
          ) : null}
        </TabsContent>
      </Tabs>
    </Container>
  );
}
