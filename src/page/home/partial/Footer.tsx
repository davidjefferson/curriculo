import {
    Text,
    VStack,
} from "native-base";

const Footer = () => {
    return (
        <VStack mt={5} alignItems="center">
            <Text>Currículo desenvolvido em ReactJs / TypeScript utilizando boas práticas de mercado.</Text>
            <Text>©Copyright 2022. Todos os direitos reservados.</Text>
        </VStack>
    )
}

export default Footer;