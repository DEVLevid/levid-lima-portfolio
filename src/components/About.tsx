import profile from "../assets/Levid.jpg";
import about from "../assets/About.jpeg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function About() {
  return (
    <div className=" flex mt-40 ml-80">
      <div className="">
        <h1 className="text-6xl font-bold font-mono">SOBRE MIM</h1>
        <p className="w-2/4 mt-4 font-medium text-wrap text-xl leading-8">
          Prazer, meu nome é Levid e sou natural de Alagoas. Desde muito jovem,
          despertei interesse pela área de tecnologia, iniciando meus
          <span className="text-purple-300"> primeiros passos</span> no
          desenvolvimento aos 14 anos de idade.
        </p>
        <p className="w-2/4 mt-4 font-medium text-wrap text-xl leading-8">
          Atualmente, estudo{" "}
          <span className="text-purple-300">sistemas de informação</span> pelo
          Intituto Federal de Alagoas - IFAL. Estou sempre me atualizando com as
          novas tecnologias do mercado. Sou apixonado pelo desenvolvimento,
          principalmente pela capacidade de transformação de ideias em coisas
          reais através dele.
        </p>
      </div>
      <Carousel
        autoPlay={true}
        interval={5000}
        showThumbs={false}
        swipeable={true}
        showArrows={false}
        showStatus={false}
        infiniteLoop={true}
        verticalSwipe="natural"
        className="flex items-center justify-center w-72 h-80 rounded-lg object-cover overflow-hidden absolute right-80"
      >
        <img src={about} alt="" className="object-cover grayscale" />
        <img src={profile} alt="" className="object-cover grayscale" />
      </Carousel>
    </div>
  );
}