import "./styles/App.css";
import "./index.css";
import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Hero />
    </div>
  );
}

export default App;
