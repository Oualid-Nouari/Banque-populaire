import { useState } from "react";
import "./App.css";
import Aside from "./Components/Aside";
import Box from "./Components/Box";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

import Main from "./Components/Main";
import Questions from "./Components/Questions";

function App() {
  const [openAside, setOpenAside] = useState(false)
  return (
    <div className="App">
      {openAside && <div className="overlay" onClick={() => setOpenAside(false)}></div>}
      <Header />
      <Aside openAside={openAside} setOpenAside={setOpenAside} />
      <Main />
      <Box />
      <Questions />
      <Footer />
    </div>
  );
}

export default App;