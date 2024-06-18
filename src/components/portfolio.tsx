import { Swiper, SwiperSlide } from "swiper/react";
import { FlowArrow } from "@phosphor-icons/react";
import { Projects } from "../data/projects";
import "swiper/css/bundle";

export default function Portfolio() {
  return (
    <div className="mb-40" id="portfolio">
      <h1 className="text-5xl flex mb-20 justify-center">Projetos</h1>
      <Swiper
        slidesPerView={3.2}
        grabCursor
        className="flex h-96 mb-12"
        direction="horizontal"
        loop={true}
      >
        {Projects.map((data, index) => (
          <div key={`${data.id} - ${index}`} className="flex flex-row">
            <SwiperSlide className="flex">
              <div
                className="relative flex flex-col w-3/4 h-96 bg-cover bg-center p-8 rounded-lg"
                style={{
                  backgroundImage: data.pictureUrl
                    ? `url(${data.pictureUrl})`
                    : "none",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90"></div>

                <a href={data.link} className="absolute right-12 z-10">
                  <FlowArrow
                    size={32}
                    className="text-gray-950 hover:text-purple-400 transition-all"
                  />
                </a>
                <div className="z-10 absolute bottom-6">
                  <h1 className="text-2xl font-mono mb-4 text-white">
                    {data.name}
                  </h1>
                  <p className="font-light w-60 text-white">
                    {data.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
}
