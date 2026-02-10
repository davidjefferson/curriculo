import { Box, Flex, Text } from "native-base";
import { Title } from "../../../component/Title";

const Activities = () => {
  return (
    <Box>
      <Title label="QUALIFICAÇÕES E ATIVIDADES PROFISSIONAIS" />
      <ul>
        <li>
          <Text fontWeight="bold">Princípios POO</Text>
          <ul>
            <li>
              <Text>
                Classes, Herança, Objetos, Encapsulamento, Polimorfismo,
                Abstratas, Interfaces e Injeção de dependência.
              </Text>
            </li>
            <li>
              <Text>S.O.L.I.D, D.D.D e Componentização</Text>
            </li>
          </ul>
        </li>
        <li>
          <Text fontWeight="bold">Front-End</Text>
          <ul>
            <li>
              <Text>
                HTML5, CSS3, SCSS, Display Flex, Sass, SCSS, Bootstrap, Prime
                (react, ng), json, Tailwind, Material Design, Native Base,
                jQuery, ES6+, Babel, NodeJS, Storybook, Webpack, Vite
              </Text>
            </li>
            <li>
              <Flex>
                <Text>Linguagem de programação JavaScript/TypeScript</Text>
                <Text>
                  - Angular 2+, AngularJs, React Js, React Native, Vue.js,
                </Text>
                <Text>- Next.js / Nuxt.js (SSR e SSG)</Text>
                <Text>- Redux, Context Api, Eslint/Prettier</Text>
                <Text>- Jest, Async Storage</Text>
                <Text>
                  Npm, Npx, Bower, Yarn, Grunt, Gulp, BDD (Cucumber, Protractor)
                </Text>
              </Flex>
            </li>
            <li>
              <Flex>
                <Text>Micro Frontends</Text>
                <Text>- Componentes (React, Angular)</Text>
                <Text>- Single SPA</Text>
                <Text>- Shadow DOM</Text>
                <Text>- Iframes, WebViews</Text>
              </Flex>
            </li>
          </ul>
        </li>
        <li>
          <Text fontWeight="bold">Backend-End</Text>
          <ul>
            <li>
              <Text>
                Micro Serviços, Designer System, Components, Clean Code, API
                REST
              </Text>
            </li>
            <li>
              <Text>Cloud: AWS S3, Digital Ocean</Text>
            </li>
            <li>
              <Flex>
                <Text>Linguagem de programação NodeJs - 1 Ano</Text>
                <Text>
                  - TypeScript, Express, TypeORM, Router, Celebrate (Joi),
                  Migration, NestJs, JWT, Redis, Docker, Babel
                </Text>
              </Flex>
            </li>
            <li>
              <Flex>
                <Text>Linguagem de programação Dot Net - 4 Anos</Text>
                <Text>- Entity Framework, NHibernate, WPF, WCF</Text>
              </Flex>
            </li>
            <li>
              <Flex>
                <Text>Linguagem de programação PHP - 11 anos</Text>
                <Text>- Yii Framework I e II, Silex, Symfony2</Text>
              </Flex>
            </li>
            <li>
              <Flex>
                <Text>Linguagem de programação Java EE - 2 anos</Text>
                <Text>- Hibernate, JSF, JSP</Text>
              </Flex>
            </li>
          </ul>
        </li>
        <li>
          <Text fontWeight="bold">Cloud - Computação em nuvem</Text>
          <ul>
            <li>
              <Text>AWS, Azure</Text>
            </li>
            <li>
              <Text>Serverless: AWS Lambda, Azure Functions</Text>
            </li>
            <li>
              <Text>CI/CD: Dockers, Kubernetes, DevOps, OpenShift</Text>
            </li>
            <li>
              <Text>Files: S3</Text>
            </li>
            <li>
              <Text>Servers: S2</Text>
            </li>
          </ul>
        </li>
        <li>
          <Text fontWeight="bold">Filas</Text>
          <ul>
            <li>
              <Text>Kafka</Text>
            </li>
          </ul>
        </li>
        <li>
          <Text fontWeight="bold">Metodologia</Text>
          <ul>
            <li>
              <Text>Agile: Scrum, Kanban e Lean (Jira, Azure DevOps)</Text>
            </li>
          </ul>
        </li>
        <li>
          <Text fontWeight="bold">Banco de dados</Text>
          <ul>
            <li>
              <Text>
                Oracle, Postgres, MySql, SQL Server, Tibero, Mongo e Redis
              </Text>
            </li>
          </ul>
        </li>
        <li>
          <Text fontWeight="bold">Versionamento</Text>
          <ul>
            <li>
              <Text>Git (GitFlow), SVN e TFS</Text>
            </li>
            <li>
              <Text>GitFlow, Code review</Text>
            </li>
          </ul>
        </li>
        <li>
          <Text fontWeight="bold">Testes Automatizados</Text>
          <ul>
            <li>
              <Text>PHPUnit, JUnit, Jest, Jasmine, Cucumber, Cypress </Text>
            </li>
          </ul>
        </li>
        <li>
          <Text fontWeight="bold">Inteligência Artificial</Text>
          <ul>
            <li>
              <Text>Apis (Openai)</Text>
            </li>
            <li>
              <Text>Plataforma de geração de sites com IA.</Text>
            </li>
          </ul>
        </li>
        <li>
          <Text fontWeight="bold">Documentações</Text>
          <ul>
            <li>
              <Text>Coding Standards: ESLint </Text>
            </li>
            <li>
              <Text>Code Style Guide: EditorConfig</Text>
            </li>
            <li>
              <Text>Architecture Documentation: Modelo C4 do Simon Brown</Text>
            </li>
            <li>
              <Text>API Documentation: Swagger/OpenAPI, Postman/Insomnia</Text>
            </li>
            <li>
              <Text>Code Comments: Javadoc, PHPDoc</Text>
            </li>
            <li>
              <Text>
                Version Control Documentation: Git, SVN. TFS, GitHub, GitLab,
                Wikis
              </Text>
            </li>
            <li>
              <Text>
                Code Review Documentation: GitLab Merge Requests / Pull Requests
              </Text>
            </li>
            <li>
              <Text>Unit Testing Plan: JUnit, PHPUnit, Jest</Text>
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
