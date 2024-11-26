import { useState } from "react";
import Header from "./components/header/Header";
import ProductList from "./components/productList/ProductList";
import Footer from "./components/footer/Footer";
import Shop from "./pages/Shop";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((darkMode) => !darkMode);
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      {/* <ProductList /> */}
      <Shop />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
