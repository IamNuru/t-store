import Home from "./components/Home";
import Header from "./components/Header";
import ProductsState from "./components/context/products/ProductsState";
import CartState from "./components/context/cart/CartState";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <ProductsState>
      <CartState>
        <div className="App">
          <Router>
            <div className="block">
              <Header />
              <Home />
            </div>
          </Router>
        </div>
      </CartState>
    </ProductsState>
  );
}

export default App;
