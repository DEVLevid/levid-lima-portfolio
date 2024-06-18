import { Code, GithubLogo, LinkedinLogo, List, X } from "@phosphor-icons/react";
import { useState, MouseEvent } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleScroll = (event: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        event.preventDefault();
        const section = document.querySelector(sectionId);
        const offset = 80; 
        if (section) {
            const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: sectionTop, behavior: "smooth" });
        }
        setMenuOpen(false);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="w-full h-14 bg-black flex items-center justify-between pl-72 pr-72 shadow-md fixed top-0 z-10 2xl:pl-12 2xl:pr-12">
            <a href="/" className="text-2xl flex flex-row items-center gap-2"><Code size={28} />Lima</a>
            <ul className="text-center flex flex-row gap-20 text-xl 2xl:hidden">
                <li><a href="#home" onClick={(e) => handleScroll(e, '#home')} className="border-b-2 border-transparent hover:border-purple-600 transition-colors delay">Início</a></li>
                <li><a href="#about" onClick={(e) => handleScroll(e, '#about')} className="border-b-2 border-transparent hover:border-purple-600 transition-colors delay">Sobre mim</a></li>
                <li><a href="#services" onClick={(e) => handleScroll(e, '#services')} className="border-b-2 border-transparent hover:border-purple-600 transition-colors delay">Serviços</a></li>
                <li><a href="#portfolio" onClick={(e) => handleScroll(e, '#portfolio')} className="border-b-2 border-transparent hover:border-purple-600 transition-colors delay">Projetos</a></li>
                <li><a href="#contact" onClick={(e) => handleScroll(e, '#contact')} className="border-b-2 border-transparent hover:border-purple-600 transition-colors delay">Contato</a></li>
            </ul>
            <div className="flex flex-row gap-2 2xl:hidden">
                <a href="https://github.com/DEVLevid"><GithubLogo size={32} className="hover:text-purple-600 cursor-pointer transition-colors delay" /></a>
                <a href="https://www.linkedin.com/in/levid-lima-326311260"><LinkedinLogo size={32} className="hover:text-purple-600 cursor-pointer transition-colors delay" /></a>
            </div>
            <div className="hidden 2xl:flex">
                {menuOpen ? (
                    <X size={32} className="hover:text-purple-600 cursor-pointer transition-colors delay z-30" onClick={toggleMenu} />
                ) : (
                    <List size={32} className="hidden 2xl:flex hover:text-purple-600 cursor-pointer transition-colors delay" onClick={toggleMenu} />
                )}
            </div>
            <div className={`fixed top-0 right-0 w-64 h-full items-center justify-between pt-40 bg-black text-white transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-20`}>
                <ul className="flex flex-col items-center justify-center gap-10 text-xl">
                    <li><a href="#home" onClick={(e) => handleScroll(e, '#home')} className="hover:text-purple-600 transition-colors delay">Início</a></li>
                    <li><a href="#about" onClick={(e) => handleScroll(e, '#about')} className="hover:text-purple-600 transition-colors delay">Sobre mim</a></li>
                    <li><a href="#services" onClick={(e) => handleScroll(e, '#services')} className="hover:text-purple-600 transition-colors delay">Serviços</a></li>
                    <li><a href="#portfolio" onClick={(e) => handleScroll(e, '#portfolio')} className="hover:text-purple-600 transition-colors delay">Projetos</a></li>
                    <li><a href="#contact" onClick={(e) => handleScroll(e, '#contact')} className="hover:text-purple-600 transition-colors delay">Contato</a></li>
                </ul>
                <div className="flex flex-row gap-2 items-center justify-center mt-80">
                    <a href="https://github.com/DEVLevid"><GithubLogo size={40} className="hover:text-purple-600 cursor-pointer transition-colors delay" /></a>
                    <a href="https://www.linkedin.com/in/levid-lima-326311260"><LinkedinLogo size={40} className="hover:text-purple-600 cursor-pointer transition-colors delay" /></a>
                </div>
            </div>
        </header>
    );
}
