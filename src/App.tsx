import About from "./components/about/About";
import Formulario from "./components/contacto/Formulario";
import PorqueElegirnos from "./components/elegirnos/PorqueElegirnos";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";

import Header from "./layout/Header";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <hr />
      <Services />
      <About />
      <PorqueElegirnos />
      <Formulario />
    </>
  );
}

export default App;
