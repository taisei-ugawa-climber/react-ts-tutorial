import { Box, Heading } from "@chakra-ui/react";

function Header() {
    return (
        <Box as="header" bg="blue.800" color="white" p={4}>
            <Heading size="lg">React Tutorial App with TypeScript</Heading>
        </Box>
    );
}

export default Header;