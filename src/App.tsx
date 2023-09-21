import About from "./components/about/About";
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
    </>
  );
}

export default App;
