import photo from './../../../assets/photo-profile.jpeg';
import {
    Box,
    Image,
    Text,
    Link,
    Heading,
    VStack,
    HStack,
    useColorMode,
} from "native-base";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from 'react-icons/io';

const Header = () => {
    const { colorMode } = useColorMode();
    const color = colorMode === "light" ? "black" : "white";

    return (
        <Heading size="lg" mb={1}>
            <HStack>
                <Image source={{ uri: photo }} alt="Foto David" size={['md', 'lg']} borderRadius={100} />
                <Box pl={[4, 4]} py={[0, 0]} flexBasis={0} flexGrow={1}>
                    <VStack w="100%">
                        <Text fontSize={['xl', '2xl']} lineHeight="md" flexWrap="wrap">David Jefferson</Text>
                        <Text fontSize={['sm', 'lg']} fontWeight="normal" lineHeight="md" flexWrap="wrap">Desenvolvedor Full Stack Web e Mobile Sênior.</Text>
                    </VStack>
                    <HStack flex={1}>
                        <Link mt={2} mr={2} href="https://www.linkedin.com/in/davidjeffersonbx/" isExternal>
                            <FaLinkedin color={color} size={30} />
                        </Link>
                        <Link mt={2} mr={2} href="https://github.com/davidjefferson" isExternal>
                            <FaGithub color={color} size={30} />
                        </Link>
                        <Link mt={2} href="https://api.whatsapp.com/send?1=pt_br&phone=5561982968140" isExternal>
                            <IoLogoWhatsapp color={color} size={30} />
                        </Link>
                    </HStack>
                </Box>
            </HStack>
        </Heading>
    )
}

export default Header;