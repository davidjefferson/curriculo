import {
    Box,
    Divider,
    Link,
    Text,
    View,
} from "native-base";
import { Title } from "../../../component/Title";

const Projects = () => {
    return (
        <View>
            <Box>
                <Title label="PROJETOS MOBILE" />
                <ul>
                    <li><Text>FUNCEF - React Native</Text></li>
                    <li><Text>Core Case - Ionic e Cordova</Text></li>
                    <li><Text>BFEventos - Ionic e Cordova</Text></li>
                </ul>
            </Box>

            <Divider my="6" />

            <Box>
                <Title label="PROJETO PESSOAL" />
                <ul>
                    <li>
                        <Link href="https://www.uishop.com.br" isExternal>
                            <Text underline>
                                www.uishop.com.br
                            </Text>
                        </Link>
                    </li>
                </ul>
            </Box>
        </View>
    )
}

export default Projects;