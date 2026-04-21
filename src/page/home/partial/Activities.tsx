import { Box, Flex, Text } from "native-base";
import { Title } from "../../../component/Title";

const Activities = () => {
  return (
    <Box>
      <Title label="Competências Técnicas" />
      <ul className="list-none">
        <li>
          <Text fontWeight="bold">Frontend</Text>
          <ul>
            <li>
              <Text>React.js, Next.js, Angular 2+, AngularJS, Vue.js</Text>
            </li>
            <li>
              <Text>JavaScript (ES6+), TypeScript</Text>
            </li>
            <li>
              <Text>
                HTML5, CSS3, SCSS, Flex, Tailwind CSS, Bootstrap, Material UI
              </Text>
            </li>
          </ul>
        </li>
        <li>
          <Text fontWeight="bold">Backend</Text>
          <ul>
            <li>
              <Text>Node.js, NestJS, Express</Text>
            </li>
            <li>
              <Text>PHP (Yii, Symfony, Laravel), .NET, Java</Text>
            </li>
            <li>
              <Text>
                Integração com APIs REST, autenticação JWT e arquitetura baseada
                em microservices e mensageria
              </Text>
            </li>
          </ul>
        </li>
        <li>
          <Text fontWeight="bold">Arquitetura & Engenharia</Text>
          <ul>
            <li>
              <Text>Micro Frontends (Componentes, Single SPA, Iframes)</Text>
            </li>
            <li>
              <Text>Componentização, Design Systems</Text>
            </li>
            <li>
              <Text>SOLID, Clean Code, DDD</Text>
            </li>
          </ul>
        </li>
        <li>
          <Text fontWeight="bold">DevOps & Cloud</Text>
          <ul>
            <li>
              <Text>AWS, Azure | Docker, Kubernetes, CI/CD, OpenShift</Text>
            </li>
          </ul>
        </li>
        <li>
          <Text fontWeight="bold">Banco de Dados</Text>
          <ul>
            <li>
              <Text>
                PostgreSQL, Oracle, MySQL, SQL Server | MongoDB, Redis
              </Text>
            </li>
          </ul>
        </li>
        <li>
          <Text fontWeight="bold">Versionamento</Text>
          <ul>
            <li>
              <Text>Git, SVN e TFS | GitFlow, Code review</Text>
            </li>
          </ul>
        </li>
        <li>
          <Text fontWeight="bold">Testes</Text>
          <ul>
            <li>
              <Text>Jest, Cypress, PHPUnit, JUnit, Cucumber</Text>
            </li>
          </ul>
        </li>
        <li>
          <Text fontWeight="bold">IA - Inteligência Artificial</Text>
          <ul>
            <li>
              <Text>Integração com APIs de IA (OpenAI, Gemini, Claude),</Text>
            </li>
            <li>
              <Text>Criação de prompts estruturados</Text>
            </li>
            <li>
              <Text>Automações com agentes para otimização de fluxos</Text>
            </li>
          </ul>
        </li>
        <li>
          <Text fontWeight="bold">Geoprocessamento</Text>
          <ul>
            <li>
              <Text>Openlayers, Postgis, Oracle e GeoServer</Text>
            </li>
          </ul>
        </li>
      </ul>
    </Box>
  );
};

export default Activities;
