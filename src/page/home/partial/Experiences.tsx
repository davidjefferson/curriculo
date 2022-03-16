import {
    Box,
    Text,
} from "native-base";
import { Title } from "../../../component/Title";

const Experiences = () => {
    return (
        <Box>
            <Title label="ÚLTIMAS EXPERIÊNCIAS PROFISSIONAIS" />

            <ul>
                <li>
                    <Text>FUNCEF - Desenvolvimento Web .Net - 5 Anos (Atual)</Text>
                    <ul>
                        <li>
                            <Text>Angular, AngularJs, React Js, React Native, Redux</Text>
                        </li>
                        <li>
                            <Text>Npm, Bower, Yarn, Grunt</Text>
                        </li>
                    </ul>
                </li>
                <li>
                    <Text>CTIS - Desenvolvimento Web PHP - 2 anos</Text>
                    <ul>
                        <li>
                            <Text>AngularJs, CSS3, Bootstrap, jQuery, JSON, REST, Gulp e BDD</Text>
                        </li>
                        <li>
                            <Text>Yii Framework I e II</Text>
                        </li>
                    </ul>
                </li>
                <li>
                    <Text>Fermento Promo - Desenvolvimento Web PHP 1 Ano</Text>
                    <ul>
                        <li>
                            <Text>HTML5, CSS3, Bootstrap, jQuery, JSON, REST e npm</Text>
                        </li>
                        <li>
                            <Text>Silex</Text>
                        </li>
                    </ul>
                </li>
                <li><Text>CDS - Desenvolvimento Web Java - 1 Ano</Text></li>
                <li><Text>Banco do Brasil - Desenvolvimento Web Java - 1 Ano</Text></li>
            </ul>
        </Box>
    )
}

export default Experiences;