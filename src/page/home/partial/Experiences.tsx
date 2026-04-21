import { Box, Text } from "native-base";
import { Title } from "../../../component/Title";

const Experiences = () => {
  return (
    <Box>
      <Title label="ÚLTIMAS EXPERIÊNCIAS PROFISSIONAIS" />

      <ul>
        <li>
          <Text fontWeight="bold">Montreal</Text>
          <Text> - Tech Lead / Arquiteto Frontend (2025-2026)</Text>
          <ul>
            <li>
              <Text>
                Atuação como líder técnico em projetos de grande escala
              </Text>
            </li>
            <li>
              <Text>
                Definição de arquitetura frontend utilizando Angular 2+ e
                monorepo
              </Text>
            </li>
            <li>
              <Text>
                Implementação de padrões de componentização e reutilização de
                código
              </Text>
            </li>
            <li>
              <Text>
                Code review e definição de boas práticas de desenvolvimento
              </Text>
            </li>
            <li>
              <Text>Integração com APIs REST e otimização de performance</Text>
            </li>
          </ul>
        </li>

        <li className="mt-5">
          <Text fontWeight="bold">Extreme Digital Solutions (EDS)</Text>
          <Text> - Arquiteto Frontend / Desenvolvedor Sênior (2023-2025)</Text>

          <ul>
            <li>
              <Text>
                Desenvolvimento de aplicações web com React.js, Angular e
                TypeScript
              </Text>
            </li>
            <li>
              <Text>
                Definição de arquitetura frontend e padrões de projeto
              </Text>
            </li>
            <li>
              <Text>Integração com APIs REST utilizando Node.js</Text>
            </li>
            <li>
              <Text>Implementação de CI/CD e containerização com Docker</Text>
            </li>
            <li>
              <Text>
                Desenvolvimento de interfaces escaláveis e responsivas
              </Text>
            </li>
          </ul>
        </li>

        <li>
          <Text fontWeight="bold">FUNCEF</Text>
          <Text> - Desenvolvedor Sênior / Tech Lead (2017-2023)</Text>
          <ul>
            <li>
              <Text>
                Atuação como especialista frontend em sistemas corporativos
              </Text>
            </li>
            <li>
              <Text>Desenvolvimento com Angular, React e Node.js</Text>
            </li>
            <li>
              <Text>Liderança técnica e definição de arquitetura frontend</Text>
            </li>
            <li>
              <Text>Mentoria de desenvolvedores juniores e plenos</Text>
            </li>
            <li>
              <Text>Implementação de componentização e design systems</Text>
            </li>
            <li>
              <Text>Desenvolvimento mobile com React Native</Text>
            </li>
          </ul>
        </li>

        <li>
          <Text fontWeight="bold">CTIS</Text>
          <Text> - Desenvolvedor Full Stack PHP (2015-2017)</Text>
          <ul>
            <li>
              <Text>Desenvolvimento de sistema ERP com PHP e PostgreSQL</Text>
            </li>
            <li>
              <Text>
                Atuação como líder frontend utilizando HTML, CSS e Bootstrap
              </Text>
            </li>
            <li>
              <Text>Integração com APIs REST e automação com Gulp</Text>
            </li>
          </ul>
        </li>

        <li>
          <Text fontWeight="bold">Fermento Promo</Text>
          <Text> - Desenvolvedor Web PHP (2014-2015)</Text>
          <ul>
            <li>
              <Text>Desenvolvimento de hotsites, CMS e e-commerces</Text>
            </li>
            <li>
              <Text>Utilização de HTML, CSS, Bootstrap e jQuery</Text>
            </li>
          </ul>
        </li>
        <li>
          <Text fontWeight="bold">CDS</Text>
          <Text> - Desenvolvedor Web Java (2013-2014)</Text>
          <ul>
            <li>
              <Text>Desenvolvimento de sistema de BI com geoprocessamento</Text>
            </li>
            <li>
              <Text>
                Uso de tecnologias web e integração com dados geoespaciais
              </Text>
            </li>
          </ul>
        </li>
        <li>
          <Text fontWeight="bold">Vidraçaria Tocantins</Text>
          <Text> - Desenvolvedor Web PHP (2012-2013)</Text>
          <ul>
            <li>
              <Text>Desenvolvimento de ERP próprio utilizando PHP</Text>
            </li>
            <li>
              <Text>
                Criação de interfaces web e integração com banco de dados
              </Text>
            </li>
          </ul>
        </li>
        <li>
          <Text fontWeight="bold">Banco do Brasil</Text>
          <Text> - Estagiário Desenvolvimento Java (2011-2012)</Text>
          <ul>
            <li>
              <Text>Desenvolvimento de sistemas internos de intranet</Text>
            </li>
            <li>
              <Text>Utilização de Java e tecnologias web</Text>
            </li>
          </ul>
        </li>
      </ul>
    </Box>
  );
};

export default Experiences;
