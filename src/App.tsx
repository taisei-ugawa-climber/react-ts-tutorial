import { Flex } from "@chakra-ui/react";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <Flex direction="column" minHeight="100vh">
      <Header />
      <Flex flex="1">
        <Sidebar />
        <Main>
          {/* 各ページの内容 */}
        </Main>
      </Flex>
      <Footer />
    </Flex>
  );
}

export default App;