import {
    Box,
    Text,
} from "native-base";
import { Title } from "../../../component/Title";

const Cms = () => {
    return (
        <Box>
            <Title label="CMS" />

            <ul>
                <li><Text>Wordpress</Text></li>
                <li><Text>Magento</Text></li>
                <li><Text>Drupal</Text></li>
            </ul>
        </Box>
    )
}

export default Cms;