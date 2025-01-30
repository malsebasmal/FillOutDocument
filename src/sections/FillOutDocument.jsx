export const FillOutDocument = () => {
  return (
    <article className="w-[50%]">
      <h3 className="text-center text-xl font-black">CONTRATO DE ARRENDAMIENTO DE VIVIENDA</h3>
      <p className="pt-4 text-end">En <span>text</span>, a <span>text</span></p>
      
      <div className="flex flex-col gap-4">
        <div>
          <h4 className="font-bold">Partes:</h4>
          <p>Arrendador: <span>text</span>, con <span>text</span>, domicilio en <span>text</span>.</p>
          <p>Arrendatario: <span>text</span>, con <span>text</span>, domicilio en <span>text</span>.</p>
        </div>

        <div>
          <h4 className="font-bold">Objeto:</h4>
          <p>Arrendamiento de una vivienda ubicada en <span>text</span>, con una superficie de <span>text</span> m², para uso exclusivo como vivienda habitual del arrendatario.</p>
        </div>

        <div>
          <h4 className="font-bold">Duración:</h4>
          <p>El contrato tiene una duración de <span>text</span>, comenzando el <span>text</span>. Se prorrogará automáticamente hasta un máximo de 5 años, salvo que el arrendatario notifique su no renovación con 30 días de antelación.</p>
        </div>
        
        <div>
          <h4 className="font-bold">Renta:</h4>
          <ul>
            <li>Pago mensual: <span>text</span> €, pagadero dentro de los primeros 7 días de cada mes.</li>
            <li>Actualización anual: Según el Índice de Garantía de Competitividad (IGC).</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold">Gastos:</h4>
          <ul>
            <li>Arrendatario: Electricidad, agua, gas, basura, teléfono, internet.</li>
            <li>Arrendador: Comunidad, IBI, gastos extraordinarios de la comunidad.</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold">Fianza:</h4>
          <p>El arrendatario entrega una fianza de <span>text</span> €, que será devuelta al finalizar el contrato, previa comprobación del estado de la vivienda.</p>
        </div>

        <div>
          <h4 className="font-bold">Obras:</h4>
          <p>El arrendatario no podrá realizar obras sin autorización escrita del arrendador. El arrendador debe realizar reparaciones necesarias para mantener la habitabilidad.</p>
        </div>

        <div>
          <h4 className="font-bold">Cesión y subarriendo:</h4>
          <p>Prohibida la cesión del contrato o el subarriendo total o parcial de la vivienda.</p>
        </div>

        <div>
          <h4 className="font-bold">Finalización:</h4>
          <p>Al finalizar el contrato, el arrendatario debe entregar las llaves. En caso de retraso, pagará el doble de la renta diaria por cada día de demora.</p>
        </div>

        <div>
          <h4 className="font-bold">Jurisdicción:</h4>
          <p>Cualquier disputa se resolverá bajo la legislación española y los tribunales del lugar donde esté ubicada la vivienda.</p>
        </div>

        <div>
          <h4 className="font-bold">Firmas:</h4>
          <ul>
            <li>Arrendador: <span>text</span></li>
            <li>Arrendatario: <span>text</span></li>
          </ul>
        </div>
      </div>
    </article>
  )
}

