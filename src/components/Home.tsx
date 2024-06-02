import { PaperPlaneTilt, ReadCvLogo } from "@phosphor-icons/react";
import Marquee from "react-fast-marquee";
import cv from '../assets/cv.pdf'

export default function Home() {
  return (
    <>
      <div className="flex items-center mt-40">
        <div className="flex flex-col ml-60">
          <h1 className=" text-6xl font-bold">
            👾 <span className=" text-purple-800">Olá!!</span> Sou Levid
          </h1>
          <div className=" flex flex-row items-center gap-4 mt-6">
            <p className=" border-b-2 w-64"></p>
            <p className=" flex text-center text-4xl gap-2 font-bold">
              Desenvolvedor<span className=" text-purple-800">Frontend</span>
            </p>
          </div>
          <div className=" w-3/4 mt-4 font-medium text-wrap text-xl leading-8">
            <p>
              Desenvolvedor Frontend apaixonado por tecnologia e por transformar
              ideias em realidade através dela! Aqui você encontra alguns dos
              meus trabalhos. Se você deseja transformar sua ideia em um produto
              original e de qualidade,
              <span className="text-purple-300"> entre em contato</span> comigo!
            </p>
          </div>
          <div className="flex flex-row gap-6 mt-6 items-center">
            <button className=" flex items-center justify-center w-60 p-4 gap-4 font-light rounded-md text-center bg-purple-950 hover:bg-purple-800 transition-colors delay">
              Entre em contato <PaperPlaneTilt size={32} />
            </button>
            <a href={cv} download='Levid Lima cv'><button className=" flex items-center justify-center w-60 p-4 gap-4 font-light rounded-md text-center bg-gray-900 hover:bg-gray-800 transition-colors delay">
              Curriculo <ReadCvLogo size={32} />
            </button></a>
          </div>
        </div>
        <div className="flex items-center justify-center mr-60 rounded-lg object-cover overflow-hidden">
          <img
            src="https://github.com/DEVLevid.png"
            alt=""
            className="object-cover grayscale"
          />
        </div>
      </div>

      <Marquee
        direction="left"
        speed={100}
        autoFill
        className="flex bg-gray-900 h-16 mt-40 w-10/12 rounded-md m-auto"
      >
        <div className="flex flex-row gap-4 ">
          <span>Reactjs</span>
          <span>/</span>
          <span>NodeJs</span>
          <span>✧</span>
          <span>Typescript</span>
          <span>✧</span>
          <span>Tailwind Css</span>
          <span>✧</span>
          <span>NextJs</span>
          <span>✧</span>
          <span>HTML5</span>
          <span>✧</span>
          <span>SASS | SCSS</span>
          <span>✧</span>
          <span>Rest API</span>
          <span>✧</span>
          <span>CSS3</span>
          <span>✧</span>
          <span>Javasript</span>
          <span>✧</span>
          <span>Jest</span>
          <span>✧</span>
          <span>Jquery</span>
          <span>✧</span>
          <span>React Query</span>
          <span>✧</span>
          <span>Axios</span>
          <span>✧</span>
          <span>Git</span>
          <span>✧</span>
        </div>
      </Marquee>
    </>
  );
}
