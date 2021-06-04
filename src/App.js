import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductsState from "./components/context/products/ProductsState";
import CartState from "./components/context/cart/CartState";
import AuthState from "./components/context/auth/State";
import SettingsState from "./components/context/settings/SettingsState";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <AuthState>
      <ProductsState>
        <CartState>
          <SettingsState>
            <div className="App block">
              <Router>
                <div className="block min-h-screen">
                  <Header />
                  <Home />
                </div>
              </Router>
                <Footer />
            </div>
          </SettingsState>
        </CartState>
      </ProductsState>
    </AuthState>
  );
}

export default App;
