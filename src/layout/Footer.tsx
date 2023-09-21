

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-col justify-center md:justify-between items-center bg-[#DDD] py-8">
      <p className='text-center text-lg'>
        Copyright &copy; {''}
        <span className='font-bold'>{year}</span> {''}
        Todos los derechos reservados
      </p>
    </footer>
  )
}

export default Footer;
