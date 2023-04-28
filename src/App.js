import "./App.css";
import Aside from "./Components/Aside";
import Box from "./Components/Box";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

import Main from "./Components/Main";
import Questions from "./Components/Questions";

function App() {

  return (
    <div className="App">
      <Header />
      <Aside />
      <Main />
      <Box />
      <Questions />
      <Footer />
    </div>
  );
}

export default App;