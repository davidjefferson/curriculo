import { Tooltip, useColorMode, View } from 'native-base';
import * as ReactIcons from 'react-icons/all';

type GetIconProps = {
    icon: keyof typeof ReactIcons,
    label: string
}

export const Icon = ({ icon, label }: GetIconProps) => {
    const IconName = ReactIcons[icon];
    const { colorMode } = useColorMode();
    const color = colorMode === "light" ? "black" : "white";

    return (
        <Tooltip label={label} placement="top" >
            <View position="relative" borderColor={color} borderWidth={1} p={[1,2]} rounded="full" mr={[2, 3]} mt={[2, 3]}>
                <IconName color={color} size={20} />
            </View>
        </Tooltip>
    );
};
