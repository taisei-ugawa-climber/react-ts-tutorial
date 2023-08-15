import { Box, Text } from "@chakra-ui/react";

function Footer() {
    return (
        <Box as="footer" bg="gray.100" p={4}>
            <Text>&copy; {new Date().getFullYear()} Taisei Ugawa. All rights reserved.</Text>
        </Box>
    );
}

export default Footer;