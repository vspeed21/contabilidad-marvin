
interface Props {
  htmlFor: string
  id?: string
  title: string
}

function Label({ htmlFor, title, id }: Props) {
  return (
    <label
      id={id}
      htmlFor={htmlFor}
      className="font-bold text-gray-700"
    >
      {title}
    </label>
  )
}

export default Label;
