import Image from "next/image"
import { Globe } from "@/components/ui/globe"
import { Mail, MapPin } from "lucide-react"
import Link from "next/link"
import { Link as LinkIcon } from "lucide-react"
import { MarqueeDemo } from "@/components/stack"
import ASCIIAnimation from "@/components/ascii-animation"

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
        <p className="mt-12 text-xl text-gray-300 text-justify">
            I am a passionate computer science student with a deep love for learning,
            an unending curiosity for new knowledge, and a constant drive to find innovative solutions
            while exploring the deeper aspects of technology and life.
        </p>
        <p className="mt-4 text-lg text-gray-400 text-justify">
            Did you just say &quot;What does Aristeia mean&quot; ? &nbsp;
            <Link className="text-slate-400 underline"
                href={"https://en.wikipedia.org/wiki/Aristeia"}>
                There you go
            </Link>
        </p>
        <div className="flex flex-col md:flex-row mt-12 gap-2">
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
                        <Image src="/icons/linkedin.svg" width={18} height={18} alt="GitHub" />
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
    </main>
}