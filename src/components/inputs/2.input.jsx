export const Twoinput = () => {
  return (
    <form action="">
      <p>La primera/única parte arrendadora (propietaria) de este contrato es una:</p>
      {/* La primera/única parte arrendataria (inquilino) de este contrato es una: */}
      <div className="flex flex-col gap-2 mt-2">
        <label className="flex items-center gap-1" htmlFor="">Persona física
          <input type="radio" />
        </label>
        <label className="flex items-center gap-1" htmlFor="">Persona jurídica
          <input type="radio" />
        </label>
      </div>
    </form>
  )
}