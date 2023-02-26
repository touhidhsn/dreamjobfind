import "./App.css";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import Jobs from "./components/Jobs";
import Value from "./components/Value";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Search />
      <Jobs />
      <Value />
      <Footer />
    </div>
  );
}

export default App;
