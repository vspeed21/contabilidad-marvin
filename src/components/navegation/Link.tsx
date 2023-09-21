
interface Props {
  title: string
  to: string
  onClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, to: string) => void
  path: string
}

function Link({ title, to, onClick, path }: Props) {
  return (
    <a
      href={to}
      onClick={e => onClick(e, to)}
      className={`font-bold text-white md:text-gray-800 text-lg ${path == to ? 'opacity-100' : 'opacity-70'} ${!title ? 'hidden' : 'block'}`}
    >
      {title}
    </a>
  )
}

export default Link;
