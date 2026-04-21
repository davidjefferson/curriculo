import { Box, Text } from "native-base";
import { Title } from "../../../component/Title";

const Languages = () => {
  return (
    <Box>
      <Title label="Idiomas" />

      <ul>
        <li>
          <Text>Inglês: Básico (leitura técnica)</Text>
        </li>
      </ul>
    </Box>
  );
};

export default Languages;
