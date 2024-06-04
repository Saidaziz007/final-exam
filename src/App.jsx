import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Basket from "./pages/basket/Basket.jsx";
import Blog from "./pages/blog/Blog.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Delivery from "./pages/delivery/Delivery.jsx";
import Garant from "./pages/garant/Garant.jsx";
import Notfound from "./pages/not-found/Notfound.jsx";
import Return from "./pages/return/Return.jsx";
import Single from "./pages/single/Single.jsx";
import Wishlist from "./pages/wishlist/Wishlist.jsx";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/garant" element={<Garant />} />
        <Route path="/not-found" element={<Notfound />} />
        <Route path="/return" element={<Return />} />
        <Route path="/single" element={<Single />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
