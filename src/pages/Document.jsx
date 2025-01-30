import { FillOutDocument } from "../sections/FillOutDocument.jsx"
import { ProgressBar } from "../components/ProgressBar.jsx"
import { Inputs } from "../sections/Inputs.jsx"

export const Document = () => {
  return (
    <section className="px-14 pb-6">
      <h2 className="font-bold text-3xl border-b-2 border-solid border-gray-300">
        Contrato de arrendamiento de vivienda habitual 
      </h2>
      <div className="mt-6 flex justify-between gap-4">
        <Inputs />
        <FillOutDocument />
        <ProgressBar />
      </div>
    </section>
  )
}