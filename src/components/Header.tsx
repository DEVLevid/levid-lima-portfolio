import { Code, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { MouseEvent } from "react";

export default function Header() {
    const handleScroll = (event: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        event.preventDefault();
        const section = document.querySelector(sectionId);
        const offset = 80; 
        if (section) {
            const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: sectionTop, behavior: "smooth" });
        }
    };

    return (
        <header className="w-full h-14 bg-black flex items-center justify-between pl-72 pr-72 shadow-md fixed top-0 z-10">
            <a href="/" className="text-2xl flex flex-row items-center gap-2"><Code size={28} />Lima</a>
            <ul className="text-center flex flex-row gap-20 text-xl">
                <li><a href="#home" onClick={(e) => handleScroll(e, '#home')} className="border-b-2 border-transparent hover:border-purple-600 transition-colors delay">Início</a></li>
                <li><a href="#about" onClick={(e) => handleScroll(e, '#about')} className="border-b-2 border-transparent hover:border-purple-600 transition-colors delay">Sobre mim</a></li>
                <li><a href="#services" onClick={(e) => handleScroll(e, '#services')} className="border-b-2 border-transparent hover:border-purple-600 transition-colors delay">Serviços</a></li>
                <li><a href="#portfolio" onClick={(e) => handleScroll(e, '#portfolio')} className="border-b-2 border-transparent hover:border-purple-600 transition-colors delay">Projetos</a></li>
                <li><a href="#contact" onClick={(e) => handleScroll(e, '#contact')} className="border-b-2 border-transparent hover:border-purple-600 transition-colors delay">Contato</a></li>
            </ul>
            <div className="flex flex-row gap-2">
                <a href="https://github.com/DEVLevid"><GithubLogo size={32} className="hover:text-purple-600 cursor-pointer transition-colors delay" /></a>
                <a href="https://www.linkedin.com/in/levid-lima-326311260"><LinkedinLogo size={32} className="hover:text-purple-600 cursor-pointer transition-colors delay" /></a>
            </div>
        </header>
    );
}
