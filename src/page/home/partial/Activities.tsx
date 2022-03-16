import {
    Box,
    Flex,
    Text,
} from "native-base";
import { Title } from "../../../component/Title";

const Activities = () => {
    return (
        <Box>
            <Title label="QUALIFICAÇÕES E ATIVIDADES PROFISSIONAIS" />
            <ul>
                <li>
                    <Text fontWeight="bold">Front-End</Text>
                    <ul>
                        <li><Text>HTML5, CSS3, Display Flex, Sass, Bootstrap, jQuery, NodeJS, JSON</Text></li>
                        <li>
                            <Flex>
                                <Text>Linguagem de programação JavaScript/TypeScript</Text>
                                <Text>- Angular, AngularJs, React Js, React Native, Redux</Text>
                            </Flex>
                        </li>
                        <li><Text>Npm, Bower, Yarn, Grunt, Gulp, BDD (Cucumber, Protractor)</Text></li>
                    </ul>
                </li>
                <li>
                    <Text fontWeight="bold">Backend-End</Text>
                    <ul>
                        <li><Text>Micro Services, Designer System, Components, Clean Code, API REST</Text></li>
                        <li><Text>Cloud: AWS S3, Digital Ocean</Text></li>
                        <li>
                            <Flex>
                                <Text>Linguagem de programação Dot Net - 4 Anos</Text>
                                <Text>- Entity Framework, NHibernate</Text>
                            </Flex>
                        </li>
                        <li>
                            <Flex>
                                <Text>Linguagem de programação PHP - 11 anos</Text>
                                <Text>- Yii Framework I e II, Silex, Symfony2</Text>
                            </Flex>
                        </li>
                        <li>
                            <Flex>
                                <Text>Linguagem de programação Java EE - 2 anos</Text>
                                <Text>- Hibernate, JSF, JSP</Text>
                            </Flex>
                        </li>

                    </ul>
                </li>
                <li>
                    <Text fontWeight="bold">Metodologia</Text>
                    <ul>
                        <li><Text>Agile: Scrum, Kanban e Lean</Text></li>
                    </ul>
                </li>
                <li>
                    <Text fontWeight="bold">Banco de dados</Text>
                    <ul>
                        <li><Text>Oracle, Postgres, MySql, SQL Server, Tibero, Mongo e Redis</Text></li>
                    </ul>
                </li>
                <li>
                    <Text fontWeight="bold">Geoprocessamento</Text>
                    <ul>
                        <li><Text>Openlayers, Postgis, Oracle e GeoServer</Text></li>
                    </ul>
                </li>
                <li>
                    <Text fontWeight="bold">Versionamento</Text>
                    <ul>
                        <li><Text>Git, SVN e TFS</Text></li>
                    </ul>
                </li>
            </ul>
        </Box>
    )
}

export default Activities;