import { Box, Text } from "native-base";
import { Title } from "../../../component/Title";

const School = () => {
  return (
    <Box>
      <Title label="Cursos Relevantes" />
      <ul>
        <li>
          <ul>
            <li>
              <Text>Desenvolvimento Frontend com React e TypeScript</Text>
            </li>
            <li>
              <Text>Desenvolvimento Frontend com Angular e TypeScript</Text>
            </li>
            <li>
              <Text>Desenvolvimento Backend com Node.js</Text>
            </li>
            <li>
              <Text>Desenvolvimento Backend com Java (Spring Boot)</Text>
            </li>
            <li>
              <Text>Desenvolvimento de Arquitetura de Software</Text>
            </li>
            <li>
              <Text>Metodologias Ágeis (Scrum)</Text>
            </li>
          </ul>
        </li>
      </ul>
    </Box>
  );
};

export default School;
