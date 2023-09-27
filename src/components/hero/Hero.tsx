import { Button } from "../shared";

function Hero() {
  return (
    <div className="bg-hero-pattern bg-cover md:bg-no-repeat bg-center py-8 md:py-0">
      <div className="flex flex-col gap-3 justify-center items-center h-[20rem] md:h-[60vh] md:w-[45rem] md:mx-auto">
        <h2 className="uppercase font-bold text-center text-2xl md:text-4xl text-white mx-2 md:mx-0">
          soluciones financieras a tu alcance
        </h2>
        <div>
          {/* <p className="text-lg mx-2 text-center md:mx-auto text-gray-100">
            ¿Quieres que tus finanzas estén en orden por no tienes tiempos para hacerlo tú mismo?
          </p> */}
          <p className="text-lg mx-2 text-center md:mx-auto text-gray-100">
            Con nuestros servicios contables podrás ahorrar tiempo y dinero para tomar desiciones financieras mas acertadas.
          </p>
        </div>
        <div className="mt-4">
          <Button title="Contactar" />
        </div>
      </div>
    </div>
  )
}

export default Hero;
