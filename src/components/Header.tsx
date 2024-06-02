import { Code, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

export default function Header() {
    return (
        <header className="w-full h-14 bg-black flex items-center justify-between pl-72 pr-72 shadow-md fixed top-0 z-10">
            <a href="/" className="text-2xl flex flex-row items-center gap-2"><Code size={28} />Lima</a>
            <ul className="text-center flex flex-row gap-20 text-xl">
                <li><a href="" className=" border-b-2 border-transparent hover:border-purple-600 transition-colors delay">Início</a></li>
                <li><a href="" className=" border-b-2 border-transparent hover:border-purple-600 transition-colors delay">Sobre mim</a></li>
                <li><a href="" className=" border-b-2 border-transparent hover:border-purple-600 transition-colors delay">Projetos</a></li>
                <li><a href="" className=" border-b-2 border-transparent hover:border-purple-600 transition-colors delay">Contato</a></li>
            </ul>
            <div className="flex flex-row gap-2">
                <a href="https://github.com/DEVLevid"><GithubLogo size={32} className="hover:text-purple-600 cursor-pointer transition-colors delay" /></a>
                <a href="https://www.linkedin.com/in/levid-lima-326311260"><LinkedinLogo size={32} className="hover:text-purple-600 cursor-pointer transition-colors delay" /></a>
            </div>
        </header>
    )
}
