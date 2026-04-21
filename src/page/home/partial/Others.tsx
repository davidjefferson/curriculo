import { Box, Text } from "native-base";
import { Title } from "../../../component/Title";

const Others = () => {
  return (
    <Box>
      <Title label="Informações Adicionais" />
      <ul>
        <li>
          <ul>
            <li>
              <Text>
                Experiência com metodologias ágeis (Scrum, Kanban, Lean)
              </Text>
            </li>
            <li>
              <Text>
                Atuação com arquitetura de software e documentação (C4 Model,
                Swagger/OpenAPI)
              </Text>
            </li>
            <li>
              <Text>Experiência com pipelines CI/CD e ambientes cloud</Text>
            </li>
            <li>
              <Text>
                Conhecimento em integração com APIs de Inteligência Artificial
              </Text>
            </li>
          </ul>
        </li>
      </ul>
    </Box>
  );
};

export default Others;
