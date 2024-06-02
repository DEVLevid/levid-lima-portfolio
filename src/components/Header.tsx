import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

export default function Header() {
    return (
        <header className="w-full h-16 bg-black flex items-center justify-between pl-12 pr-12">
            <a href="/" className="text-2xl">Lima</a>
            <ul className="text-center flex flex-row gap-20 text-xl">
                <li><a href="" className=" border-b-2 border-transparent hover:border-purple-600 transition-colors delay">Home</a></li>
                <li><a href="" className=" border-b-2 border-transparent hover:border-purple-600 transition-colors delay">About</a></li>
                <li><a href="" className=" border-b-2 border-transparent hover:border-purple-600 transition-colors delay">Projects</a></li>
                <li><a href="" className=" border-b-2 border-transparent hover:border-purple-600 transition-colors delay">Contact</a></li>
            </ul>
            <div className="flex flex-row gap-2">
                <a href="https://github.com/DEVLevid"><GithubLogo size={32} className="hover:text-purple-600 cursor-pointer transition-colors delay" /></a>
                <a href="https://www.linkedin.com/in/levid-lima-326311260"><LinkedinLogo size={32} className="hover:text-purple-600 cursor-pointer transition-colors delay" /></a>
            </div>
        </header>
    )
}
