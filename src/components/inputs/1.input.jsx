export const Oneinput = () => {
  return (
    <form action="" className="flex flex-col gap-4">
      <div>
        <p>Localidad en la que se firma este contrato de arrendamiento de vivienda habitual:</p>
        <input placeholder="Ej: Lima, Perú" type="text" className="border-solid border-2 border-gray-400 p-1"/>
      </div>
      <div>
        <p>Fecha en la que se firma este contrato de arrendamiento de vivienda habitual:</p>
        <input type="date" className="border-solid border-2 border-gray-400 p-1"/>
      </div>
      <div>
        <p>Número de personas que firman el contrato en tanto que arrendadores (propietario):</p>
        <select className="border-solid border-2 border-gray-400 p-1 w-22 text-center" name="" id="">
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
        </select>
      </div>
    </form>
  )
}