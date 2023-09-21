
interface Props {
  title: string
  subtitle?: string
}

function Heading({ title, subtitle }: Props) {
  return (
    <div className="flex flex-col justify-center items-center gap-2 mb-12 max-w-2xl mx-auto">
      <h2
        className='text-3xl md:text-4xl pt-10 font-bold text-center'
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-color-parrafo dark:text-color-parrafo-dark md:text-xl mx-3 text-center">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default Heading;
