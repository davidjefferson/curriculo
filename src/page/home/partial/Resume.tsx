import { Box, Text } from "native-base";
import { Title } from "../../../component/Title";

const Resume = () => {
  return (
    <Box>
      <Title label="Resumo Profissional" />

      <ul className="list-none">
        <li>
          <Text>
            Desenvolvedor Frontend Sênior com mais de 15 anos de experiência no
            desenvolvimento de aplicações web escaláveis utilizando React.js,
            Angular e TypeScript. Atuação como Tech Lead e Arquiteto Frontend,
            com foco em micro frontends, performance, componentização e design
            systems.
          </Text>
        </li>
        <li>
          <Text>
            Experiência em projetos corporativos de grande porte, com integração
            a APIs REST, definição de arquitetura frontend e liderança técnica
            de times. Forte atuação com boas práticas de engenharia de software
            (SOLID, Clean Code, DDD) e ambientes ágeis (Scrum, Kanban).
          </Text>
        </li>
      </ul>
    </Box>
  );
};

export default Resume;
