export const Threeinput = () => {
  return (
    <form action="">
      <div>
        <p>Nombre completo de la primera/única parte arrendadora (propietaria):</p>
        <input className="border-solid border-2 border-gray-400 p-1" type="text" placeholder="Ej: Antonio Maldonado" />
      </div>
      <div>
        <p>Seleccione el tipo de documento de identificación personal para identificar a la primera/única parte arrendadora (propietaria):</p>
        <select className="border-solid border-2 border-gray-400 p-1 w-32 text-center" name="" id="">
          <option value="">DNI/NIF</option>
          <option value="">NIE</option>
          <option value="">Pasaporte</option>
        </select>
      </div>
      <div>
        <p>Número del documento personal de identificación de la primera/única parte arrendadora (propietaria):</p>
        <input className="border-solid border-2 border-gray-400 p-1" type="number" placeholder="Ej: 750133344" />
      </div>
      <div>
        <p>Dirección completa en la que la primera/única parte arrendadora (propietaria) puede recibir notificaciones:</p>
        <input className="border-solid border-2 border-gray-400 p-1" type="text" placeholder="Ej: Av. Imaginaria 123"/>
      </div>
    </form>
  )
}