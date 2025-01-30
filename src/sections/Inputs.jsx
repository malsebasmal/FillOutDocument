import { useState } from "react"
import { Oneinput } from "../components/inputs/1.input.jsx"
import { Twoinput } from "../components/inputs/2.input.jsx"
import { Threeinput } from "../components/inputs/3.input.jsx"
import { Fourinput } from "../components/inputs/4.input.jsx"

export const Inputs = () => {
  const inputs = [Oneinput, Twoinput, Threeinput, Fourinput]
  const [index, setIndex] = useState(0)
  const handleNextStep = () => {
    setIndex((prevIndex) => (prevIndex + 1 ) % inputs.length)
  }
  const handlePreviousStep = () => {
    setIndex((prevIndex) => (prevIndex - 1 + inputs.length) % inputs.length)
  }
  const CurrentInput = inputs[index]

  return (
    <aside className="w-[40%] pr-4 border-r-2 border-solid border-gray-300">
      <div className="mb-6">
        <CurrentInput />
      </div>

      <div className="flex gap-2">
        <button onClick={handlePreviousStep} className="px-2 py-1 border-2 border-solid border-black rounded-full hover:bg-black hover:text-white">Paso anterior</button>
        <button onClick={handleNextStep} className="px-2 py-1 border-2 border-solid border-black rounded-full hover:bg-black hover:text-white">Paso siguiente</button>
      </div>
    </aside>
  )
}