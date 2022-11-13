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
                    <Text fontWeight="bold">Princípios POO</Text>
                    <ul>
                        <li>
                            <Text>
                                Classes, Herança, Objetos, Encapsulamento, Polimorfismo, Abstratas, Interfaces e Injeção de dependência.
                            </Text>
                        </li>
                        <li>
                            <Text>
                                S.O.L.I.D, D.D.D e Componentização
                            </Text>
                        </li>
                    </ul>
                </li>
                <li>
                    <Text fontWeight="bold">Front-End</Text>
                    <ul>
                        <li>
                            <Text>
                                HTML5, CSS3, SCSS, Display Flex, Sass, Bootstrap, PrimeFaces (PrimeNG), JSON,
                                Material Design, Native Base, jQuery, ECMAScript, Babel, NodeJS
                            </Text>
                        </li>
                        <li>
                            <Flex>
                                <Text>Linguagem de programação JavaScript/TypeScript</Text>
                                <Text>- Angular 2+, AngularJs, React Js, React Native, Redux, Context Api, Eslint/Prettier</Text>
                                <Text>- Jest, Async Storage</Text>
                            </Flex>
                        </li>
                        <li><Text>
                            Npm, Npx, Bower, Yarn, Grunt, Gulp, BDD (Cucumber, Protractor)
                        </Text>
                        </li>
                    </ul>
                </li>
                <li>
                    <Text fontWeight="bold">Backend-End</Text>
                    <ul>
                        <li><Text>Micro Serviços, Designer System, Components, Clean Code, API REST</Text></li>
                        <li><Text>Cloud: AWS S3, Digital Ocean</Text></li>
                        <li>
                            <Flex>
                                <Text>Linguagem de programação NodeJs - 1 Ano</Text>
                                <Text>- TypeScript, Express, TypeORM, Router, Celebrate (Joi), Migration, NestJs, JWT</Text>
                            </Flex>
                        </li>
                        <li>
                            <Flex>
                                <Text>Linguagem de programação Dot Net - 4 Anos</Text>
                                <Text>- Entity Framework, NHibernate, WPF, WCF</Text>
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
                        <li><Text>Agile: Scrum, Kanban e Lean (Jira, Azure DevOps)</Text></li>
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