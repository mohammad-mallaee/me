import Link from "next/link";

export default function Header() {
    return <div className="flex items-center justify-between">
        <Link
            href={"/"}
            className="text-2xl text-gray-300 hover:text-white transition-colors">
            Aristeia
        </Link>
    </div>
}