import Image from "next/image"
import { Globe } from "@/components/ui/globe"
import { Mail, MapPin } from "lucide-react"
import Link from "next/link"
import { Link as LinkIcon } from "lucide-react"
import { MarqueeDemo } from "@/components/stack"
import ASCIIAnimation from "@/components/ascii-animation"
import { Safari } from "@/components/ui/safari"

export default async function Page() {
    return <main className="mt-16">
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
        <p className="mt-8 text-lg text-gray-400">
            Did you just say &quot;What does Aristeia mean&quot; ? &nbsp;
            <Link className="text-slate-400 underline"
                href={"https://en.wikipedia.org/wiki/Aristeia"}>
                There you go
            </Link>
        </p>
        <div className="flex flex-col md:flex-row mt-8 gap-2">
            <div className="relative flex size-full md:max-w-lg items-center justify-center overflow-hidden text-gray-300 rounded-lg border-2 border-[#212127] pb-40 pt-8 md:pb-52">
                <div className="absolute top-2 left-4 items-center flex gap-1">
                    <MapPin width={16} height={16} />
                    <span className="font-light mt-1">
                        Iran
                    </span>
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
                        <Link href={"mailto:mohammad.mallaee@gmail.com"}>mohammad.mallaee@gmail.com</Link>
                    </div>
                    <div className="flex items-center gap-2">
                        <Image src="/icons/linkedin.svg" width={18} height={18} alt="LinkedIn" />
                        <Link href={"https://www.linkedin.com/in/mohammad-mallaee"} className="mt-1">LinkedIn</Link>
                    </div>
                    <div className="flex items-center gap-2">
                        <Image src="/icons/github.svg" width={20} height={18} alt="GitHub" />
                        <Link href={"https://github.com/mohammad-mallaee"} className="mt-1">GitHub</Link>
                    </div>
                </div>
            </div>
        </div>
        <MarqueeDemo />
        <hr className="mt-12 mb-4 border-slate-800" />
        <div className="relative flex w-full flex-col overflow-hidden mt-8 text-lg text-justify">
            <h2 className="text-2xl font-bold mb-2 text-center">Experience & Projects</h2>
            <div className="mt-4">
                <h3 className="text-xl font-bold">Tutor of Intorduction to Frontend Bootcamp</h3>
                <p className="text-gray-300">
                    I was tutor of a 6 weeks bootcamp on frontend development in my university that was held by association of math & computer science.
                    We covered topics such as HTML, CSS, JavaScript, and responsive web design.
                    <br />
                    Here you can find the bootcamp materials:
                    <Link className="text-slate-400 underline ml-2 inline-block" href={"https://frontend.amcsui.ir"}>frontend.amcsui.ir</Link>
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 md:px-16 mt-4 gap-3 *:rounded-sm">
                    <img src="/bootcamp-1.jpeg" alt="" />
                    <img src="/bootcamp-2.jpeg" alt="" />
                    <img className="hidden md:block" src="/bootcamp-3.jpeg" alt="" />
                </div>
            </div>
            <div className="mt-16">
                <h3 className="text-xl font-bold">Fusion - Keep your files in sync</h3>
                <p className="text-gray-300">
                    Fusion is a command-line tool designed to streamline the process of keeping your computer and Android device in sync.
                    It offers a user-friendly interface and efficient functionality to make file transfers and synchronization a breeze.
                    <Link className="text-slate-400 underline ml-2 inline-block" href={"https://github.com/mohammad-mallaee/fusion"}>Github Page</Link>
                </p>
                <div className="w-full mt-4">
                    <img src={"/fusion.gif"} className="rounded-md max-h-[380px] mx-auto" alt="" />
                </div>
            </div>
            <div className="mt-16">
                <h3 className="text-xl font-bold">Blogger</h3>
                <p className="text-gray-300">
                    Imagine having a space where your thoughts, stories, and ideas flow effortlessly into the world where you can share what matters to you.
                    <Link className="text-slate-400 underline ml-2 inline-block" href={"https://blogger-preview.vercel.app"}>Live Preview</Link>
                </p>
                <Safari className="mt-4 md:-mt-2 md:scale-[88%]" url="frontend.amcsui.ir" imageSrc="/blogger.jpeg" />
            </div>
            <div className="mt-16">
                <h3 className="text-xl font-bold">Flow - Tab Manager</h3>
                <p className="text-gray-300">
                    Flow is a powerful tab manger extension for Google Chrome and Firefox that helps you organize and manage your browser tabs more efficiently.
                    I was the UI/UX designer of this project.
                    <Link className="text-slate-400 underline ml-2 inline-block"
                        href={"https://chromewebstore.google.com/detail/flow-tab-manager/ddmmamibgihlgejeklfopeebcnobmfeb"}>
                        WebStore Page
                    </Link>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 *:rounded-md mt-4">
                    <img src="/main_page.jpeg" alt="" />
                    <img className="hidden md:block" src="/main_page-1.jpeg" alt="" />
                </div>
            </div>
            <div className="mt-16">
                <h3 className="text-xl font-bold">PsyCity</h3>
                <p className="text-gray-300">
                    A programming competition with a great story and atmoshere that I created a discord bot for it and am currently tech lead of the whole project.
                </p>
            </div>
        </div>
        <hr className="mt-16 mb-4 border-slate-800" />
        <div className="relative flex w-full flex-col overflow-hidden mt-4 mb-40 text-lg">
            <h2 className="text-2xl font-bold mb-2 text-center">Past & Archived Projects</h2>
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-blue-300">
                <Link href={"https://dobra-clone.vercel.app/"}>Dobra - Cofee Store Clone</Link>
                <Link href={"https://behinab.vercel.app/"}>Behinab - Management Dashboard</Link>
                <Link href={"https://hubro.vercel.app/"}>Hubro - Factory Simulator</Link>
                <Link href={"https://amcsui.ir/"}>AMCSUI Landing Page</Link>
                <Link href={"https://chew.liara.run/"}>Chew - Chatroom Webiste</Link>
            </div>
        </div>
    </main>
}