
interface Props {
  placeholder: string
  id: string
  type?: 'text' | 'email' | 'password' | 'number'
  title?: string
  as?: 'input' | 'textarea'
  value?: string | number
  setState?: (value: string | number) => void
}

function Input({ placeholder, id, type = 'text', title, as = 'input', value, setState }: Props) {
  return as == 'input' ? (
    <input
      className="bg-gray-50 border active:shadow p-2 rounded-sm pl-3 outline-0 focus:outline-1 focus:outline-gray-500"
      placeholder={placeholder}
      id={id}
      type={type}
      title={title}
      value={value}
      onChange={e => setState!(e.target.value)}
    />
  ) : (
    <textarea
      placeholder={placeholder}
      id={id}
      title={title}
      className="md:w-1/2 h-40 bg-gray-50 border active:shadow p-2 rounded-sm pl-3 outline-0 focus:outline-1 focus:outline-gray-500 resize-none"
      value={value}
      onChange={e => setState!(e.target.value)}
    ></textarea>
  );
}

export default Input;
