import { CustomImage, Heading } from "../shared";

function PorqueElegirnos() {
  return (
    <div className="mb-16">
      <Heading title="¿Porque elegirnos?" />

      <div className="flex flex-col gap-4 justify-center items-center md:flex-row max-w-3xl mx-auto w-[90%] mb-10">
        <p className="-mt-3 md:-mt-0 text-center md:text-start text-lg">
          Nos comprometemos a brindar un servicio personalizado para satisfacer las necesidades de cualquier empresa, desde pequeñas empresas hasta grandes corporaciones.
        </p>
        <CustomImage imageName="porque-elegirnos" type="jpg" className="md:w-[50rem] lg:w-[60rem]" />
      </div>
      <hr />
    </div>
  )
}

export default PorqueElegirnos;
