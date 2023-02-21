import "./App.css";
import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import Text from "./components/Text/Text";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header title={"Nurai"}>
        <Button>Click</Button>
      </Header>
      <Text title={"JavaScript"} />
      {/* <Button title={"Click me!"} /> */}
      <Main text={"Lorem ipsum dolor sit amet"} />
      {/* <Button title={"follow"} /> */}
      <Footer />
    </div>
  );
}

export default App;
