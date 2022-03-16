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
                    <li><Text>FUNCEF - React Native - (Versão 2 - Ainda não publicada)</Text></li>
                    <li><Text>BFEventos - Ionic e Cordova</Text></li>
                </ul>
            </Box>

            <Divider my="6" />

            <Box>
                <Title label="ALGUNS PROJETOS PESSOAIS" />
                <ul>
                    <li>
                        <Link href="https://intranet.vidracariatocantins.com.br" isExternal>
                            <Text underline>
                                intranet.vidracariatocantins.com.br
                            </Text>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.ogestao.com.br" isExternal>
                            <Text underline>
                                www.ogestao.com.br
                            </Text>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.onnoy.com.br" isExternal>
                            <Text underline>
                                www.onnoy.com.br
                            </Text>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.taianearaujostore.com.br" isExternal>
                            <Text underline>
                                www.taianearaujostore.com.br
                            </Text>
                        </Link>
                    </li>
                </ul>
            </Box>
        </View>
    )
}

export default Projects;