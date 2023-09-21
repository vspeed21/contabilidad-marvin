import { useState } from 'react';
import Link from './Link';

interface ILink {
  title: string
  to: string
}

interface Props {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}

function Navegation({ isOpen, setIsOpen }: Props) {
  const [path, setPath] = useState('');

  const scrollNav = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, to: string) => {
    e.preventDefault();
    setIsOpen(false);
    setPath(to);
    const seccion = document.querySelector(to);
    seccion!.scrollIntoView({ behavior: 'smooth' });
  }

  const links: ILink[] = [
    {
      title: '',
      to: '',
    },
    {
      title: 'Servicios',
      to: '#servicios',
    },
    {
      title: 'Nosotros',
      to: '#nosotros',
    },
    {
      title: 'Contacto',
      to: '#contacto',
    },
  ]

  return (
    <nav className={`flex flex-col md:flex-row gap-10 md:gap-3 justify-center items-center absolute md:static top-[10%] bg-[rgb(0,0,0,0.9)] md:bg-transparent md:w-auto w-[70vw] h-[90%] md:h-auto ${isOpen ? 'right-0' : '-right-[1000px]'} transition-all duration-500 z-30 ease-in`}>
      {links.map(link => (
        <Link
          title={link.title}
          to={link.to}
          path={path}
          key={link.to}
          onClick={scrollNav}
        />
      ))}
    </nav>
  )
}

export default Navegation;
