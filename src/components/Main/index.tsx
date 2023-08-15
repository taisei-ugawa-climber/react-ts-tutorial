import { Box } from "@chakra-ui/react";

type MainProps = {
    children: React.ReactNode;
    flex?: string;
};

function Main({ children, flex }: MainProps) {
    return (
        <Box as="main" p={4} flex={flex}>
            {children}
        </Box>
    );
}

export default Main;