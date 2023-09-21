import About from "./components/about/About";
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
    </>
  );
}

export default App;
