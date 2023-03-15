import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Promociones from "./components/Promociones";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import SobreNosotros from "./components/SobreNosotros";
import FetchMlListContainer from "./components/FetchMlListContainer";
import IconWpp from "./components/IconWpp";
import CartContextProvider from "./context/CartContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import ThankYou from "./components/ThankYou";
import NotFound from "./components/NotFound";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="mainContainer">
          <NavBar />         
          <Routes>
            <Route path={"/"} element={<Promociones/>} />
            <Route path={"/category/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"/marketplace"} element={<FetchMlListContainer />} />
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"/checkout"} element={<Checkout />} />
            <Route path={"/thankyou/:orderId"} element={<ThankYou />} />
            <Route path={"/sobre-nosotros"} element={<SobreNosotros />} />
            <Route path={"*"} element={<NotFound />} />         
          </Routes>
          <IconWpp />
          <Footer />
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
