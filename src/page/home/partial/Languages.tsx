import {
    Box,
    Text,
} from "native-base";
import { Title } from "../../../component/Title";

const Languages = () => {
    return (
        <Box>
            <Title label="LÍNGUAS ESTRANGEIRAS" />

            <ul>
                <li><Text>Inglês - Técnico</Text></li>
            </ul>
        </Box>
    )
}

export default Languages;