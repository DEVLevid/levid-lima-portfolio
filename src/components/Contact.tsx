import { useRef, FormEvent } from "react";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
import {
  CaretCircleDoubleRight,
  EnvelopeOpen,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const toastify = () => {
    toast.success("Mensagem enviada com sucesso!", {
      theme: "dark",
    });
  };

  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (form.current) {
      const formData = new FormData(form.current);
      const emailData: Record<string, string> = {};
      formData.forEach((value, key) => {
        emailData[key] = value as string;
      });

      emailjs
        .send("service_j2am4vb", "template_osu7n0c", emailData, "LGR-PTheaEtY-g2KA")
        .then(
          (result) => {
            console.log(result.text);
            toastify();
          },
          (error) => {
            console.log(error.text);
          }
        );

      form.current.reset();
    }
  };

  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center mb-40"
    >
      <h1 className="text-6xl mb-12">Entre em contato</h1>
      <div className="bg-gray-900 w-2/3 m-auto rounded-lg p-16 flex justify-between">
        <div className="flex flex-col w-2/4">
          <h1 className="text-4xl font-mono  flex flex-row items-center gap-4 mb-4">
            Mande uma mensagem
            <EnvelopeOpen size={30} />
          </h1>
          <p className="w-4/5">
            Entre em contato comigo para discutir uma possível colaboração,
            contratar meus serviços para um trabalho específico, contratação,
            fazer uma pergunta, ou simplesmente dar um oi.
          </p>

          <h1 className="text-3xl font-mono mt-8">Social</h1>
          <div className="flex flex-row mt-4 gap-4">
            <a
              href="https://www.instagram.com/levidlima/"
              className="hover:text-purple-900 transition-all"
            >
              <InstagramLogo size={32} />
            </a>
            <a
              href="https://github.com/DEVLevid"
              className="hover:text-purple-900 transition-all"
            >
              <GithubLogo size={32} />
            </a>
            <a
              href="www.linkedin.com/in/levid-lima-326311260"
              className="hover:text-purple-900 transition-all"
            >
              <LinkedinLogo size={32} />
            </a>
          </div>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col w-3/5 gap-4"
        >
          <div className="flex flex-col relative">
            <label
              className="absolute bg-gray-900 pl-2 pr-2 pt-0 pb-0 left-3 bottom-10"
              htmlFor="email"
            >
              Email
            </label>
            <input
              required
              type="email"
              name="email"
              id="email"
              placeholder="Digite seu email"
              className="bg-transparent border-2 p-3 rounded-lg"
            />
          </div>
          <div className="flex flex-col relative">
            <label
              className="absolute bg-gray-900 pl-2 pr-2 pt-0 pb-0 left-3 bottom-10"
              htmlFor="name"
            >
              Nome
            </label>
            <input
              required
              type="text"
              name="name"
              id="name"
              placeholder="Digite seu nome"
              className="bg-transparent border-2 p-3 rounded-lg"
            />
          </div>
          <div className="flex flex-col relative">
            <label htmlFor="message" className="absolute bg-gray-900 pl-2 pr-2 pt-0 pb-0 left-3 bottom-16">Mensagem</label>
            <textarea
              required
              
              name="message"
              id="message"
              placeholder="Digite sua mensagem aqui..."
              className="bg-transparent h-20 border-2 p-4 rounded-lg overflow-auto resize-none"
            />
          </div>

          <button
            type="submit"
            className="bg-purple-900 rounded-lg flex flex-row items-center justify-center gap-4 p-3 hover:bg-purple-700 transition-all text-2xl font-mono "
          >
            Enviar <CaretCircleDoubleRight size={25} />
          </button>
        </form>
        <ToastContainer autoClose={8000} />
      </div>
    </div>
  );
}
