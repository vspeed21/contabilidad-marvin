
interface Props {
  children: JSX.Element[]
}

function Field({ children }: Props) {
  return (
    <div className="flex flex-col gap-3 w-full mb-4">
      {children}
    </div>
  )
}

export default Field
