import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import {
  Home,
  Product,
  AboutPage,
  ContactPage,
  Cart,
  Login,
  Register,
  Checkout,
} from "./pages";
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
