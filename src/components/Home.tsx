import { PaperPlaneTilt, ReadCvLogo } from "@phosphor-icons/react";
import Marquee from "react-fast-marquee";
import cv from "../assets/cv.pdf";
import icon from "../assets/Code typing-bro.png";

export default function Home() {
  return (
    <>
      <div id="home" className="flex items-center mt-60">
        <div className="flex flex-col ml-80">
          <h1 className=" text-6xl font-bold">
            👾 Olá!! Sou <span className=" text-purple-800"> Levid </span>
          </h1>
          <div className=" flex flex-row items-center gap-4 mt-6">
            <p className=" border-b-2 w-64"></p>
            <p className=" flex text-center text-4xl gap-2 font-bold">
              Desenvolvedor<span className=" text-purple-800">Frontend </span>
            </p>
          </div>
          <div className=" w-2/4 mt-4 font-medium text-wrap text-xl leading-8">
            <p>
              <span className="text-purple-300">Desenvolvedor Frontend</span>{" "}
              apaixonado por tecnologia e por transformar ideias em realidade
              através dela! Aqui você encontra alguns dos meus trabalhos. Se
              você deseja transformar sua ideia em um produto original e de
              qualidade,
              <span className="text-purple-300">
                {" "}
                entre em contato comigo!{" "}
              </span>
            </p>
          </div>
          <div className="flex flex-row gap-6 mt-6 items-center">
            <a href="#contact">
              <button className=" flex items-center justify-center w-60 p-4 gap-4 font-light rounded-md text-center bg-purple-950 hover:bg-purple-800 transition-colors delay">
                Entre em contato <PaperPlaneTilt size={32} />
              </button>
            </a>
            <a href={cv} download="Levid Lima cv">
              <button className=" flex items-center justify-center w-60 p-4 gap-4 font-light rounded-md text-center bg-gray-900 hover:bg-gray-800 transition-colors delay">
                Curriculo <ReadCvLogo size={32} />
              </button>
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center rounded-lg object-cover overflow-hidden absolute right-80 w-80">
          <img src={icon} alt="" className="object-cover" />
        </div>
      </div>

      <Marquee
        direction="left"
        speed={80}
        autoFill
        className="flex bg-black h-20 mt-12 w-11/12 rounded-md items-center flex-row gap-6 transform rotate-2"
        style={{ transformOrigin: "center" }}
      >
        <img
          src="https://img.icons8.com/?size=100&id=bzf0DqjXFHIW&format=png&color=000000"
          alt="ReactJs"
          className="size-8 mr-6"
        />
        <img
          src="https://img.icons8.com/?size=100&id=54087&format=png&color=000000"
          alt="Node"
          className="size-8 mr-6"
        />
        <img
          src="https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000"
          alt="Typescript"
          className="size-8 mr-6"
        />
        <img
          src="https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000"
          alt="Tailwind css"
          className="size-8 mr-6"
        />
        <img
          src="https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000"
          alt="NextJs"
          className="size-8 mr-6"
        />
        <img
          src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000"
          alt="HTML5"
          className="size-8 mr-6"
        />
        <img
          src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000"
          alt="css3"
          className="size-8 mr-6"
        />
        <img
          src="https://img.icons8.com/?size=100&id=QBqFNfPPB2Kx&format=png&color=000000"
          alt="sass | scss"
          className="size-8"
        />
        <img
          src="https://img.icons8.com/?size=100&id=21894&format=png&color=000000"
          alt="api"
          className="size-8 mr-6"
        />
        <img
          src="https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000"
          alt="Javascript"
          className="size-8 mr-8"
        />
        <img
          src="https://img.icons8.com/?size=100&id=bp24DwGXJDyT&format=png&color=000000"
          alt="Jest"
          className="size-8"
        />
        <img
          src="https://img.icons8.com/?size=100&id=40253&format=png&color=000000"
          alt="Jquery"
          className="size-8"
        />
        <img
          src="https://img.icons8.com/?size=100&id=20906&format=png&color=000000"
          alt="Git"
          className="size-8 mr-6"
        />
      </Marquee>
    </>
  );
}
