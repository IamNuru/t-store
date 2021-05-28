import Home from "./components/Home";
import Header from "./components/Header";
import ProductsState from "./components/context/products/ProductsState";
import CartState from "./components/context/cart/CartState";
import AuthState from "./components/context/auth/State";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <AuthState>
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
    </AuthState>
  );
}

export default App;
