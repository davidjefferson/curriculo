import { Box, Text } from "native-base";
import { Title } from "../../../component/Title";

const Resume = () => {
  return (
    <Box>
      <Title label="Resumo Profissional" />

      <ul className="list-none">
        <li>
          <Text>
            Desenvolvedor Frontend Sênior com mais de 15 anos de experiência em
            aplicações web escaláveis e de alta performance utilizando React,
            Angular e TypeScript. Atua como Tech Lead e Arquiteto Frontend,
            liderando decisões técnicas e definindo arquiteturas com micro
            frontends, design systems e componentização. Experiência em projetos
            corporativos de grande porte, integração com APIs REST, otimização
            de performance e liderança de times, com forte domínio de SOLID,
            Clean Code, DDD e metodologias ágeis.
          </Text>
        </li>
      </ul>
    </Box>
  );
};

export default Resume;
