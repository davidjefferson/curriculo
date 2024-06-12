import {
    Box,
    Text,
} from "native-base";
import { Title } from "../../../component/Title";

const School = () => {
    return (
        <Box>
            <Title label="CURSOS" />
            <ul>
                <li>
                    <Text>Metodologia Agile (16 horas)</Text>
                </li>
                <li>
                    <Text>Desenvolvimento Backend com NodeJs (60 horas)</Text>
                </li>
                <li>
                    <Text>Desenvolvimento Backend com Java e Spring Boot (100 horas)</Text>
                </li>
                <li>
                    <Text>Desenvolvimento Mobile e Web com React + Redux (54 horas)</Text>
                </li>
                <li>
                    <Text>Desenvolvimento Web com PHP e MySql (80 horas)</Text>
                </li>
                <li>
                    <Text>Desenvolvimento com COBOL, DB2 e CICS (60 horas)</Text>
                </li>
                <li>
                    <Text>Montagem e configuração de Micro (80 horas)</Text>
                </li>
                <li>
                    <Text>Operador de Micro (60 horas)</Text>
                </li>
                <li>
                    <Text>Excel Avançado (40 horas)</Text>
                </li>
            </ul>
        </Box>
    )
}

export default School;