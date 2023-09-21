import { Button, Heading } from "../shared";
import Field from "./Field";
import Input from "./Input";
import Label from "./Label";



function Formulario() {

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <div className="mb-16" id="contacto">
      <Heading title="Contacto" />

      <form onSubmit={onSubmit} className="max-w-4xl md:mx-auto mx-3">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col md:flex-row gap-3 w-full">
            <Field>
              <Label title="Nombre" htmlFor="name" />
              <Input
                placeholder="Ingrese su nombre"
                id="name"
                title="Ingrese su nombre para poder comunicarse"
              />
            </Field>

            <Field>
              <Label title="Correo Electrónico" htmlFor="correo" />
              <Input
                placeholder="Ingrese su correo"
                id="correo"
                type="email"
              />
            </Field>
          </div>

          <Field>
            <Label title="Mensaje" htmlFor="message" />
            <Input as='textarea' placeholder="Ingrese el mensaje" id="message" />
          </Field>

        </div>

        <div className="md:flex md:justify-end mt-3 w-full">
          <Button type="submit" title="Contactar" className="w-full md:w-auto" />
        </div>

      </form>
    </div>
  );
}

export default Formulario;
