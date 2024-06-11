import { CompassTool, Desktop, FileTsx } from "@phosphor-icons/react";

export default function Services() {
  return (
    <div id="services" className="bg-purple-950 w-100 h-fit flex flex-col items-center justify-between pl-96 pr-96 place-items-center p-16 mb-40">
      <h1 className="font-normal text-6xl mb-12">Serviços que eu ofereço </h1>
      <div className="flex items-center gap-12">
        <div className="bg-purple-900 w-96 h-96 rounded-lg p-8 hover:bg-purple-800 transition-colors">
          <CompassTool size={40} />
          <h3 className="text-2xl font-mono mt-4">
            User Experience
          </h3>
          <p className="mt-6 ">
            Crio experiências de usuário envolventes e intuitivas para sites e
            aplicativos. Utilizo o Figma para criar wireframes, protótipos e
            designs finais. Minha abordagem é centrada no usuário, com foco em
            proporcionar uma experiência agradável e fácil de usar.
          </p>
        </div>
        <div className="bg-purple-900 w-96 h-96 rounded-lg p-8 hover:bg-purple-800 transition-colors">
          <Desktop size={40} />
          <h3 className="text-2xl font-mono mt-4">Design Gráfico</h3>
          <p className="mt-6">
            Com experiência em design gráfico para mídias sociais, ofereço
            conteúdo visualmente cativante e alinhado com a identidade visual da
            marca. Além disso, padronizo as aplicações conforme necessário.
          </p>
        </div>
        <div className="bg-purple-900 w-96 h-96 rounded-lg p-8 hover:bg-purple-800 transition-colors">
          <FileTsx size={40} />
          <h3 className="text-2xl font-mono mt-4">Desenvolvimento Frontend</h3>
          <p className="mt-6 ">
            Tenho habilidades em HTML, CSS, JavaScript, SASS, Tailwind CSS,
            React, Nextjs dentre outros. Crio sites e aplicações web responsivos
            e otimizados para dispositivos móveis, além de sempre adaptar todos
            os conteúdos para a acessibilidade digital.
          </p>
        </div>
      </div>
    </div>
  );
}
