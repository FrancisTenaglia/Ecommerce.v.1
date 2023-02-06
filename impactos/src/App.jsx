import NavBar from "./components/NavBar";
import Promociones from "./components/Promociones";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar/>;
      <Promociones/>;
      <ItemListContainer mensaje={"Sitio en construcción"}/>
      <Footer /> 

    </div>
  );
}

export default App;
