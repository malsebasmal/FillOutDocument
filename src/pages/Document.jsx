import { FillOutDocument } from "../sections/FillOutDocument.jsx"
import { ProgressBar } from "../components/ProgressBar.jsx"
import { Inputs } from "../sections/Inputs.jsx"

export const Document = () => {
  return (
    <section className="px-14">
      <h2 className="text-blue-400 text-3xl">
        Contrato de arrendamiento de vivienda habitual 
      </h2>
      <div className="mt-6 flex justify-between gap-5">
        <Inputs />
        <FillOutDocument />
        <ProgressBar />
      </div>
    </section>
  )
}