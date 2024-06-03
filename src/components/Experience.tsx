import Collapsible from "./Collapsible";

interface ExperienceProps {
  className?: string;
}

export default function Experience({ className }: ExperienceProps) {
  return (
    <div className={className}>
      <Collapsible title="Experiência">
        <table className="min-w-full bg-gray-300 border border-gray-300">
          <thead>
            <tr>
              <th className="border px-4 py-2 text-gray-700">
                Área
              </th>
              <th className="border px-4 py-2 text-gray-700">Empresa</th>
              <th className="border px-4 py-2 text-gray-700">Atribuições</th>
              <th className="border px-4 py-2 text-gray-700">Período</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Desenvolvedor Frontend</td>
              <td className="border px-4 py-2">
                DIT - Núcleo de desenvolvimento e inovação tecnológica
              </td>
              <td className="border px-4 py-2">
                Colaborei com a equipe de desenvolvimento criando e aprimorando
                as interfaces de usuário, garantindo que a experiência seja
                intuitiva e atraente. Participei ativamente das reuniões da
                equipe contribuindo com ideias e soluções para eventuais
                desafios técnicos e trabalhei de forma colaborativa para alcançar
                os objetivos do projeto dentro dos padrões e prazos
                estabelecidos.
              </td>
              <td className="border px-4 py-2">1 ano e 4 meses</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Assistente HelpDesk- TI</td>
              <td className="border px-4 py-2">Engenharia de Materiais LTDA</td>
              <td className="border px-4 py-2">
                fui responsável por fornecer suporte técnico aos funcionários da
                empresa, tanto presencialmente quanto remotamente. Isso incluiu
                a resolução de problemas de hardware e software, configuração de
                dispositivos e assistência na solução de erros. Além disso,
                desempenhei um papel crucial na administração de sistemas de TI,
                auxiliando na manutenção de servidores, redes e bancos de dados.
                Mantive registros precisos de todos os incidentes de suporte
                técnico e auxiliei em projetos de TI, fornecendo suporte
                administrativo e realizando pesquisas.
              </td>
              <td className="border px-4 py-2">2 anos e 2 meses</td>
            </tr>
          </tbody>
        </table>
      </Collapsible>
    </div>
  );
}
