import { HStack, Switch, Text, useColorMode } from "native-base";

export const ToggleDarkMode = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <HStack space={2}>
            <Text>Noturno</Text>
            <Switch
                isChecked={colorMode === "dark"}
                onToggle={toggleColorMode}
                aria-label={
                    colorMode === "light" ? "switch to dark mode" : "switch to light mode"
                }
            />
        </HStack>
    );
};