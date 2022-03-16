import {
    Box,
    Text,
} from "native-base";
import { Title } from "../../../component/Title";

const Others = () => {
    return (
        <Box>
            <Title label="OUTRAS QUALIFICAÇÕES" />
            <ul>
                <li><Text>SEO, Google Ads, Facebook Ads, E-commerces</Text></li>
                <li><Text>Linguagem de programação COBOL com DB2 e CICS</Text></li>
                <li><Text>Linguagem de programação C e C++</Text></li>
                <li><Text>Ionic, Cordova, PouchDB</Text></li>
                <li><Text>Photoshop (Intermediário)</Text></li>
                <li><Text>IDEs: PhpStorm, NetBeans, Eclipse, Visual Studio</Text></li>
                <li><Text>Sistemas operacionais: Windows, Linux, IOS</Text></li>
            </ul>
        </Box>
    )
}

export default Others;