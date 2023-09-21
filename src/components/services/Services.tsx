import services from "../../lib/constants/Servicios";
import { Heading } from "../shared"
import Service from "./Service";

function Services() {
  return (
    <div id="servicios">
      <Heading title="Mis servicios" />

      <div className="contenedor flex flex-wrap gap-3 justify-center items-center">
        {services.map(service => (
          <Service service={service} key={service.title} />
        ))}
      </div>

    </div>
  )
}

export default Services;
