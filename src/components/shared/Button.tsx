import { MouseEventHandler } from "react"

interface Props {
  title: string
  variant?: 'outlined' | 'full'
  type?: 'button' | 'submit'
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: string
}

function Button({ title, variant, onClick, type = 'button', className }: Props) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${className} border border-gray-900 transition-all active:scale-90 ${variant == 'outlined' ? 'hover:bg-gray-800 hover:text-white' : 'bg-gray-800 hover:bg-gray-900 text-white'} px-6 py-2 rounded-md font-bold`}
    >
      {title}
    </button>
  )
}

export default Button;
