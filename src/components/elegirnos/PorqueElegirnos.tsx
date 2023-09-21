import { Heading } from "../shared";

function PorqueElegirnos() {
  return (
    <div className="mb-16">
      <Heading title="¿Porque elegirnos?" />

      <div className="flex flex-col gap-4 justify-center items-center md:flex-row max-w-3xl mx-auto w-[90%]">
        <p className="-mt-3 md:-mt-0 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt fuga vero beatae accusamus blanditiis, aliquid omnis quaerat doloremque delectus exercitationem
        </p>
        <img className="w-80" src="https://placehold.co/600x400" />
      </div>
    </div>
  )
}

export default PorqueElegirnos;
