import {
  useColorMode,
  View,
  Container,
  Divider,
  Button,
  Link,
  HStack,
  Text,
} from "native-base";
import { BsDownload } from "react-icons/bs";
import { ToggleDarkMode } from "../../component/ToggleDarkMode";
import Activities from "./partial/Activities";
import Cms from "./partial/Cms";
import Experiences from "./partial/Experiences";
import Footer from "./partial/Footer";
import Graduation from "./partial/Graduation";
import Header from "./partial/Header";
import Icons from "./partial/Icons";
import Languages from "./partial/Languages";
import Others from "./partial/Others";
import School from "./partial/School";
import Resume from "./partial/Resume";
import Certifications from "./partial/Certifications";

const Home = () => {
  const { colorMode } = useColorMode();
  const divider = [4, 4];

  return (
    <div className={colorMode === "light" ? "modo-light" : "modo-dark"}>
      <Container
        bg={colorMode === "light" ? "coolGray.200" : "darkBlue.900"}
        minHeight="100vh"
        alignItems="center"
        p={4}
        minWidth="100%"
      >
        <View
          bg={colorMode === "light" ? "coolGray.50" : "darkBlue.800"}
          rounded={10}
          width="900"
          maxWidth="90vw"
          shadow={5}
          p={[4, 8, 12]}
          pt={[2, 4, 8]}
          justifyContent="center"
        >
          <HStack flex={1} justifyContent="space-between" p={5}>
            <ToggleDarkMode />

            <Link
              href="https://drive.google.com/file/d/1YzhZ-qOO_ZgVWAa13yZLi7QKVJLB9WII/view"
              isExternal
            >
              <Button
                colorScheme="trueGray"
                leftIcon={
                  <BsDownload
                    color={colorMode === "light" ? "black" : "white"}
                  />
                }
                variant="outline"
              >
                <Text>Baixar Currículo</Text>
              </Button>
            </Link>
          </HStack>
          <View>
            <Header />
            <Divider my={divider} />

            <Resume />
            <Divider my={divider} />

            <Activities />
            <Divider my={divider} />

            <Experiences />
            <Divider my={divider} />

            <Graduation />
            <Divider my={divider} />

            <Certifications />
            <Divider my={divider} />

            <Others />
            <Divider my={divider} />

            {/* <Cms />
            <Divider my={divider} /> */}

            <Languages />
            <Divider my={divider} />

            {/* <Icons />
            <Divider my={divider} /> */}

            {/* <Projects />
                        <Divider my={divider} /> */}

            <School />
          </View>
        </View>

        <View p={5}>
          <Footer />
        </View>
      </Container>
    </div>
  );
};

export default Home;
