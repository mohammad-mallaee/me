import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

const stack = [
    "JS",
    "TS",
    "MDX",
    "Python",
    "CSS",
    "React",
    "HTML",
    "NextJs",
    "RQuery",
    "Github",
    "Redux",
    "PostgreSQL",
    "Git",
    "Gitlab",
    "Postman",
    "Strapi",
    "Radix",
]

const ReviewCard = ({ name }: { name: string }) => {
    return (
        <figure
            className={cn(
                "relative h-full w-20 cursor-pointer overflow-hidden rounded-xl border p-2",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <img className="grayscale-75 hover:grayscale-25 hover:scale-110 transition-all" width="52" height="52" alt="" src={`/techs/${name}.png`} />
            </div>
        </figure>
    );
};

export function MarqueeDemo() {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mt-16">
            <h2 className="text-2xl font-bold mb-2">My Tech Stack</h2>
            <Marquee className="[--duration:50s]">
                {stack.sort(() => Math.random() - 0.5).map((review) => (
                    <ReviewCard key={review} name={review} />
                ))}
            </Marquee>
            <Marquee reverse className="[--duration:50s]">
                {stack.sort(() => Math.random() - 0.5).map((review) => (
                    <ReviewCard key={review} name={review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
    );
}
