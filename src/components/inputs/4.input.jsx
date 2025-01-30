export const Fourinput = () => {
  return (
    <form action="">
      <div>
        <p>Nombre completo de la primera/única parte arrendataria (inquilino) del contrato de arrendamiento:</p>
        <input type="text" className="border-solid border-2 border-gray-400 p-1" placeholder="Ej: Sebastian Jaldo" />
      </div>
      <div>
        <p>Seleccione el tipo de documento de identificación personal para identificar a la primera/única parte arrendataria (inquilino):</p>
        <select className="border-solid border-2 border-gray-400 p-1 w-32 text-center" name="" id="">
          <option value="">DNI/NIF</option>
          <option value="">NIE</option>
          <option value="">Pasaporte</option>
        </select>
      </div>
      <div>
        <p>Número del documento personal de identificación de la primera/única parte arrendataria (inquilino) de este contrato:</p>
        <input type="number" className="border-solid border-2 border-gray-400 p-1" placeholder="Ej: 750132222"/>
      </div>
      <div>
        <p>Dirección completa en la que la primera/única parte arrendataria (inquilino) puede recibir notificaciones:</p>
        <input type="text" className="border-solid border-2 border-gray-400 p-1" placeholder="Ej: Av. Imaginaria 312"/>
      </div>
    </form>
  )
}