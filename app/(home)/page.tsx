import Image from "next/image";
import { Globe } from "@/components/ui/globe";
import { Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { Link as LinkIcon } from "lucide-react";
import { MarqueeDemo } from "@/components/stack";
import ASCIIAnimation from "@/components/ascii-animation";

export default async function Page() {
  return (
    <main className="mt-16 text-lg cursor-default">
      <div className="flex flex-col md:flex-row justify-between gap-6 md:items-center">
        <div className="flex flex-col gap-1">
          <span className="text-4xl">Hey, I&apos;m</span>
          <span className="text-6xl">Mohammad</span>
          <span className="text-gray-400 text-xl">
            I develop websites, learn new things and study computer science
          </span>
        </div>
        <div className="min-w-full md:min-w-[480px] min-h-[240px] rounded-lg">
          <ASCIIAnimation
            fps={30}
            colorOverlay={true}
            frameCount={240}
            frameFolder="frames"
          />
        </div>
      </div>
      <p className="mt-8 text-gray-400">
        &quot;What does Aristeia mean?&quot; I hear you ask. &nbsp;
        <Link
          className="text-slate-400 underline"
          href={"https://en.wikipedia.org/wiki/Aristeia"}
        >
          There you go
        </Link>
      </p>
      <div className="flex flex-col md:flex-row mt-8 gap-2">
        <div className="relative flex size-full md:max-w-lg items-center justify-center overflow-hidden text-gray-300 rounded-lg border-2 border-[#212127] pb-40 pt-8 md:pb-52">
          <div className="absolute top-2 left-4 items-center flex gap-1">
            <MapPin width={16} height={16} />
            <span className="font-light mt-1">Iran</span>
          </div>
          <Globe className="top-4" />
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
        </div>
        <div className="border-2 border-[#212127] grow rounded-lg py-3 px-4">
          <div className="flex items-center gap-2">
            <LinkIcon width={18} height={18} />
            <span className="font-light mt-1">Connect</span>
          </div>
          <div className="mt-6 flex flex-col gap-2 text-gray-300 *:hover:text-[aqua] *:transition-colors">
            <div className="flex items-center gap-2">
              <Mail width={20} height={20} />
              <Link href={"mailto:mohammad.mallaee@gmail.com"}>
                mohammad.mallaee@gmail.com
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/icons/linkedin.svg"
                width={18}
                height={18}
                alt="LinkedIn"
              />
              <Link
                href={"https://www.linkedin.com/in/mohammad-mallaee"}
                className="mt-1"
              >
                LinkedIn
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/icons/github.svg"
                width={20}
                height={18}
                alt="GitHub"
              />
              <Link
                href={"https://github.com/mohammad-mallaee"}
                className="mt-1"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
      <MarqueeDemo />
      <hr className="mt-12 mb-4 border-slate-800" />
      <div className="relative flex w-full flex-col overflow-hidden mt-8">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>

        <div className="relative rounded-xl p-6 bg-[#070e0e] border border-cyan-800/50 overflow-hidden cursor-default">
          <h3 className="text-xl font-bold mb-2">
            <Link
              className="text-[aqua] hover:opacity-80 transition-opacity"
              href="https://dunijet.ir"
            >
              Dunijet.ir
            </Link>
          </h3>
          <p className="text-gray-300 mb-4">
            An online programming education platform built around project-based,
            market-ready learning. It offers in-depth courses in Flutter,
            Android (Kotlin), and N8N workflow automation and an active Telegram
            community.
          </p>
          <div className="flex flex-wrap gap-2 text-sm">
            {[
              "Next.js",
              "Strapi CMS",
              "TypeScript",
              "TailwindCSS",
              "Shadcn UI",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 pt-1 pb-0.5 rounded bg-cyan-950/60 border border-cyan-800/50 text-cyan-200/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-xl p-6 bg-[#0e0e12] border border-[#212127]">
          <h3 className="text-xl font-bold mb-2">Fusion</h3>
          <p className="text-gray-300 mb-5">
            A command-line tool designed to streamline the process of keeping
            your computer and Android device in sync. It offers a user-friendly
            interface and efficient functionality to make file transfers and
            synchronization a breeze.
            <Link
              className=" text-slate-400 underline underline-offset-2 mx-2"
              href="https://github.com/mohammad-mallaee/fusion"
            >
              github page
            </Link>
          </p>
          <img
            src="/fusion.gif"
            className="rounded-md max-h-[360px] mx-auto mb-5"
            alt="Fusion CLI demo"
          />
          <div className="flex flex-wrap gap-2 text-sm">
            {["Python", "ADB", "CLI", "Android"].map((tag) => (
              <span
                key={tag}
                className="px-3 pt-1 pb-0.5 rounded bg-[#1a1a24] border border-[#2a2a34] text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-xl p-6 bg-[#0e0e12] border border-[#212127]">
          <h3 className="text-xl font-bold mb-2">Flow — Tab Manager</h3>
          <p className="text-gray-300 mb-5">
            A powerful tab manger extension for Google Chrome and Firefox that
            helps you organize and manage your browser tabs more efficiently. I
            was the UI/UX designer of this project.
            <Link
              className=" text-slate-400 underline underline-offset-2 mx-2"
              href="https://chromewebstore.google.com/detail/flow-tab-manager/ddmmamibgihlgejeklfopeebcnobmfeb"
            >
              WebStore
            </Link>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 *:rounded-md mb-5">
            <img src="/main_page.jpeg" alt="Flow main page" />
            <img
              className="hidden md:block"
              src="/main_page-1.jpeg"
              alt="Flow secondary"
            />
          </div>
          <div className="flex flex-wrap gap-2 text-sm">
            {["UI/UX Design", "Figma", "Chrome Extension"].map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded bg-[#1a1a24] border border-[#2a2a34] text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <hr className="mt-12 mb-4 border-slate-800" />

        <h2 className="text-2xl font-bold mt-4">Experience</h2>
        <div className="mt-6">
          <h3 className="text-xl font-bold">
            Dunijet{" "}
            <span className="text-gray-400 font-normal">· Web Developer</span>
          </h3>
          <p className="text-gray-400">
            Building and maintaining the company website with Next.js and Strapi
            CMS — designing responsive UIs, building RESTful API endpoints,
            managing content schemas, and shipping new features in collaboration
            with the team.
          </p>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-bold">
            Frontend Bootcamp{" "}
            <span className="text-gray-400 font-normal">· Tutor</span>
          </h3>
          <p className="text-gray-400">
            Tutored a 6-week bootcamp (AMCSUI) covering HTML, CSS, JavaScript,
            and React. Designed capstone projects and provided code reviews and
            one-on-one mentoring.{" "}
            {/*<Link
              className="text-gray-500 hover:text-gray-300 transition-colors underline underline-offset-2"
              href="https://frontend.amcsui.ir"
            >
              frontend.amcsui.ir
            </Link>*/}
          </p>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-bold">
            AMCSUI{" "}
            <span className="text-gray-400 font-normal">· Technical Lead </span>
          </h3>
          <p className="text-gray-400">
            Led the technical team of the Math & CS Association. Managed the
            GitHub org, organized technical part of on-campus events, mentored
            members, and delivered projects including a reservation system for
            the Economics Faculty.
          </p>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-bold">
            PsyCity{" "}
            <span className="text-gray-400 font-normal">
              · Software Engineer
            </span>
          </h3>
          <p className="text-gray-400">
            Co-developed a Discord bot in Python for a large story-driven
            programming competition held on campus. Implemented game commands,
            state management, and moderation tools using discord.py, and
            provided live on-site support during events — deploying, debugging,
            and assisting players in real time.
          </p>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-bold">
            Snowatec Innovation Factory{" "}
            <span className="text-gray-400 font-normal">
              · Frontend Intern{" "}
            </span>
          </h3>
          <p className="text-gray-400">
            Built a React.js analytics dashboard visualizing sales and
            social-media sentiment data through charts, word clouds, and
            configurable filters. Integrated backend APIs and iterated on UX
            with cross-functional teams.
          </p>
        </div>

        <hr className="mt-12 mb-4 border-slate-800" />
      </div>
    </main>
  );
}
