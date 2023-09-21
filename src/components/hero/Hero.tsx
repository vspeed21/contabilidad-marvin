import { Button } from "../shared";

function Hero() {
  return (
    <div className="flex flex-col gap-3 justify-center items-center h-[20rem] md:w-[32rem] md:mx-auto">
      <h2 className="uppercase font-bold text-center text-2xl md:text-3xl">soluciones financieras a tu alcance</h2>
      <p className="text-lg mx-2 text-center md:mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec
      </p>
      <div className="mt-4">
        <Button title="Contactar" />
      </div>
    </div>
  )
}

export default Hero;
