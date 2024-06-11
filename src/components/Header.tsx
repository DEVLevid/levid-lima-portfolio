import { Code, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { useState } from "react";

export default function Header() {
    const [route, setRoute] = useState('#')
    return (
        <header className="w-full h-14 bg-black flex items-center justify-between pl-72 pr-72 shadow-md fixed top-0 z-10">
            <a href="/" onClick={()=> setRoute(route)} className="text-2xl flex flex-row items-center gap-2"><Code size={28} />Lima</a>
            <ul className="text-center flex flex-row gap-20 text-xl">
                <li><a href="#home" onClick={()=> setRoute('#home')} className=" border-b-2 border-transparent hover:border-purple-600 transition-colors delay">Início</a></li>
                <li><a href="#about" onClick={()=> setRoute('#about')} className=" border-b-2 border-transparent hover:border-purple-600 transition-colors delay">Sobre mim</a></li>
                <li><a href="#services" onClick={()=> setRoute('#services')}className=" border-b-2 border-transparent hover:border-purple-600 transition-colors delay">Serviços</a></li>
                <li><a href="#portfolio" onClick={()=> setRoute('#portfolio')} className=" border-b-2 border-transparent hover:border-purple-600 transition-colors delay">Projetos</a></li>
                <li><a href="#contact" onClick={()=> setRoute('#contact')} className=" border-b-2 border-transparent hover:border-purple-600 transition-colors delay">Contato</a></li>
            </ul>
            <div className="flex flex-row gap-2">
                <a href="https://github.com/DEVLevid"><GithubLogo size={32} className="hover:text-purple-600 cursor-pointer transition-colors delay" /></a>
                <a href="https://www.linkedin.com/in/levid-lima-326311260"><LinkedinLogo size={32} className="hover:text-purple-600 cursor-pointer transition-colors delay" /></a>
            </div>
        </header>
    )
}
