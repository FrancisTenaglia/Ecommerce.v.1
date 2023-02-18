import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Promociones from "./components/Promociones";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import SobreNosotros from "./components/SobreNosotros";
import FetchMlListContainer from "./components/FetchMlListContainer";

function App() {
  return (
    <BrowserRouter>
      <div className="mainContainer">
        <NavBar />
        <Promociones />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"/catmarketplace/:marketplace"} element={<FetchMlListContainer />} />
          <Route path={"*"} element={<SobreNosotros />} />
        </Routes>        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
