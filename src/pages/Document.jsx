import { FillOutDocument } from "../sections/FillOutDocument.jsx"
import { ProgressBar } from "../components/ProgressBar.jsx"
import { Inputs } from "../sections/Inputs.jsx"

export const Document = () => {
  return (
    <section>
      <div className="text-amber-400">
        Contrato de arrendamiento de vivienda habitual 
      </div>
      <Inputs />
      <FillOutDocument />
      <ProgressBar />
    </section>
  )
}