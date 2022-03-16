import { Text } from "native-base";
import { TitleModel } from "../models/TitleModel";

export const Title = ({ label } : TitleModel) => {
    return (
        <Text fontSize={['md', 'lg']} fontWeight="bold">{label}</Text>
    );
};
