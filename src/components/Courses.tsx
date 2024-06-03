import { HourglassSimple, Checks } from "@phosphor-icons/react";
import Collapsible from "./Collapsible";

interface CoursesProps {
  className?: string;
}

export default function Courses({ className }: CoursesProps) {
  return (
    <div className={className}>
      <Collapsible title="Minhas Formações">
        <table className="min-w-full bg-gray-300 border border-gray-300">
          <thead>
            <tr>
              <th className="border px-4 py-2 text-gray-700">Nome</th>
              <th className="border px-4 py-2 text-gray-700">Instituição</th>
              <th className="border px-4 py-2 text-gray-700">Tipo</th>
              <th className="border px-4 py-2 text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Sistemas de informação</td>
              <td className="border px-4 py-2">
                Instituto Federal de Alagoas - IFAL
              </td>
              <td className="border px-4 py-2">Bacharelado</td>
              <td className="border px-4 py-2">
                <HourglassSimple size={20} color="#8f7000" className="m-auto"/>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Fundamentos do React</td>
              <td className="border px-4 py-2">Rocketseat</td>
              <td className="border px-4 py-2">Certificado</td>
              <td className="border px-4 py-2">
                <Checks size={20} color="#008f02" className="m-auto"/>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Bootcamp Web Development</td>
              <td className="border px-4 py-2">Udemy</td>
              <td className="border px-4 py-2">Certificado</td>
              <td className="border px-4 py-2">
                <Checks size={20} color="#008f02" className="m-auto"/>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Flutter</td>
              <td className="border px-4 py-2">
                Instituto Federal de Alagoas - IFAL
              </td>
              <td className="border px-4 py-2">Certificado</td>
              <td className="border px-4 py-2">
                <Checks size={20} color="#008f02" className="m-auto"/>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">QA - garantia de qualidade</td>
              <td className="border px-4 py-2">Ditconf</td>
              <td className="border px-4 py-2">Certificado</td>
              <td className="border px-4 py-2">
                <Checks size={20} color="#008f02" className="m-auto"/>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">UI|UX Designer</td>
              <td className="border px-4 py-2">Ditconf</td>
              <td className="border px-4 py-2">Certificado</td>
              <td className="border px-4 py-2">
                <Checks size={20} color="#008f02" className="m-auto"/>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">
                Fundamentos de desenvolvimento Frontend
              </td>
              <td className="border px-4 py-2">Nubank</td>
              <td className="border px-4 py-2">Certificado</td>
              <td className="border px-4 py-2">
                <Checks size={20} color="#008f02" className="m-auto"/>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">
                Testes em aplicações Frontend
              </td>
              <td className="border px-4 py-2">
                DIT - Núcleo de Desenvolvimento e Inovação Tecnológica
              </td>
              <td className="border px-4 py-2">Certificado</td>
              <td className="border px-4 py-2">
                <Checks size={20} color="#008f02" className="m-auto"/>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">React Native</td>
              <td className="border px-4 py-2">
                Instituto Federal de Alagoas - IFAL
              </td>
              <td className="border px-4 py-2">Certificado</td>
              <td className="border px-4 py-2">
                <Checks size={20} color="#008f02" className="m-auto"/>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">
                Reactjs - Desenvolvimento Frontend
              </td>
              <td className="border px-4 py-2">
              DIT - Núcleo de Desenvolvimento e Inovação Tecnológica
              </td>
              <td className="border px-4 py-2">Certificado</td>
              <td className="border px-4 py-2">
              <Checks size={20} color="#008f02" className="m-auto"/>
              </td>
            </tr>
          </tbody>
        </table>
      </Collapsible>
    </div>
  );
}
