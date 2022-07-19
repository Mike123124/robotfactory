import { useState } from "react"

interface Props {
  name: string,
  formRef: React.RefObject<HTMLFormElement>,
}

export default function NumberInput({ name, formRef }: Props) {
  const [number, setNumber] = useState(0)

  function select() {
    setNumber(n => 1)
  }

  function deselect() {
    setNumber(n => 0)
  }



  return (
    <div
      className="w-36 border-2 border-gray-200 rounded-md flex flex-row items-center"
    >
      <button
        type="button"
        tabIndex={-1}
        className="basis-1/3 focus:outline-none"
        onClick={deselect}
        
      >
        <span className="m-auto text-2xl font-thin">−</span>
      </button>
      <input
        type="value"
        name={name}
        value={number}
        onChange={e => setNumber(Number(1))}
        min={0}
        
        className="w-12 border-none text-center bg-transparent"
      />
      <button
        type="button"
        tabIndex={-1}
        className="basis-1/3 focus:outline-none"
        onClick={select}
       
      >
        <span className="m-auto text-2xl font-thin">+</span>
      </button>
    </div>
  )
}