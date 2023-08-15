import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Footer from "./components/Footer";

import Account from "./containers/Account";
import Contact from "./containers/Contact";
import Home from "./containers/Home";
import Todo from "./containers/Todo";

function App() {
  return (
    <Router>
      <Flex direction="column" minHeight="100vh">
        <Header />
        <Flex flex="1">
          <Sidebar />
          <Main>
            {/* ルートに応じて表示するコンポーネント（ページ）を切り替える */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/todo" element={<Todo />} />
              <Route path="/account" element={<Account />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Main>
        </Flex>
        <Footer />
      </Flex>
    </Router>
  );
}

export default App;