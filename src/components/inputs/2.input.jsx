export const Twoinput = () => {
  return (
    <form action="">
      <p>La primera/única parte arrendadora (propietaria) de este contrato es una:</p>
      {/* La primera/única parte arrendataria (inquilino) de este contrato es una: */}
      <div>
        <input type="radio" placeholder="persona física" /> 
        <input type="radio" placeholder="persona jurídica"/>
      </div>
    </form>
  )
}