import { Box, Text } from "native-base";
import { Title } from "../../../component/Title";

const Certifications = () => {
  return (
    <Box>
      <Title label="Certificações" />

      <ul>
        <li>
          <ul>
            <li>
              <Text>
                Exame 70-480: Programação em HTML5 com JavaScript e CSS3 -
                Microsoft (2015)
              </Text>
            </li>
            <li>
              <Text>IT Specialist: HTML & CSS - ETC Brasil (2017)</Text>
            </li>
          </ul>
        </li>
      </ul>
    </Box>
  );
};

export default Certifications;
