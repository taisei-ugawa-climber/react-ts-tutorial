import { Box, VStack, Button, Link } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, EmailIcon, EditIcon, InfoOutlineIcon, SunIcon } from '@chakra-ui/icons';
import { useState } from 'react';

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Box as="aside" bg="gray.300" width={isOpen ? "250px" : "80px"} p={4} transition="width 0.3s">
            <Button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <CloseIcon /> : <HamburgerIcon />}
            </Button>
            {isOpen && (
                <VStack align="start" spacing={5}>
                    {/* ホームページ */}
                    <Link href="/" marginTop={3}>
                        <InfoOutlineIcon marginRight={2} />Home
                    </Link>
                    {/* TODOリストページ */}
                    <Link href="/todo">
                        <EditIcon marginRight={2} />Todo
                    </Link>
                    {/* ユーザー情報ページ */}
                    <Link href="/account">
                        <SunIcon marginRight={2} />Account
                    </Link>
                    {/* お問い合わせページ */}
                    <Link href="/contact" className="">
                        <EmailIcon marginRight={2} />Contact
                    </Link>
                </VStack>
            )}
        </Box>
    );
}

export default Sidebar;