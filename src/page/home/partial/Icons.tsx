import {
    View,
    VStack,
    Flex,
    Text
} from "native-base";
import { Icon } from "../../../component/Icon";
import { Title } from "../../../component/Title";

const Icons = () => {
    return (
        <View>
            <VStack>
                <Title label="TECNOLOGIAS" />

                <Flex direction="row" wrap="wrap" >
                    <Icon icon="BsCodeSlash" label="Lógica de programação" />
                    <Icon icon="FaHtml5" label="HTML5" />
                    <Icon icon="FaBootstrap" label="Bootstrap" />
                    <Icon icon="DiJavascript1" label="JavaScript" />
                    <Icon icon="SiTypescript" label="TypeScript" />
                    <Icon icon="FaReact" label="ReactReact" />
                    <Icon icon="SiRedux" label="Redux" />
                    <Icon icon="DiJqueryLogo" label="Jquery" />
                    <Icon icon="DiJqueryUiLogo" label="Jquery Ui" />
                    <Icon icon="DiCss3" label="CSS3" />
                    <Icon icon="CgDisplayFlex" label="Display Flex" />
                    <Icon icon="DiSass" label="Sass" />
                    <Icon icon="FaAngular" label="Angular" />
                    <Icon icon="SiJson" label="JSON" />
                    <Icon icon="RiNpmjsFill" label="NPM" />
                    <Icon icon="IoLogoNodejs" label="Node JS" />
                    <Icon icon="DiBower" label="Bower" />
                    <Icon icon="FaYarn" label="Yarn" />
                    <Icon icon="DiGrunt" label="Grunt" />
                    <Icon icon="DiGulp" label="Gulp" />
                    <Icon icon="DiYeoman" label="Yeoman" />
                    <Icon icon="FaPhp" label="PHP" />
                    <Icon icon="DiDotnet" label=".Net" />
                    <Icon icon="DiMysql" label="MySql" />
                    <Icon icon="DiPostgresql" label="Postgres" />
                    <Icon icon="SiOracle" label="Oracle" />
                    <Icon icon="DiMsqlServer" label="MsqlServer" />
                    <Icon icon="DiMongodb" label="Mongodb" />
                    <Icon icon="DiRedis" label="Redis" />
                    <Icon icon="FaAws" label="AWS" />
                    <Icon icon="AiFillGithub" label="Github" />
                    <Icon icon="AiFillGitlab" label="Gitlab" />
                    <Icon icon="BiGitBranch" label="Branchs" />
                    <Icon icon="BiGitPullRequest" label="Pull Request" />
                    <Icon icon="DiPhotoshop" label="Photoshop" />
                    <Icon icon="DiLinux" label="Linux" />
                    <Icon icon="DiWindows" label="Windows" />
                    <Icon icon="DiApple" label="Apple" />
                    <Icon icon="DiMagento" label="Magento" />
                    <Icon icon="DiWordpress" label="Wordpress" />
                    <Icon icon="DiMailchimp" label="MailChimp" />
                    <Icon icon="DiGoogleAnalytics" label="Google Analytics" />
                </Flex>
            </VStack>
        </View>
    )
}

export default Icons;