export const Navbar = () => {
  return (
    <header className="px-14 w-full h-20 flex justify-between items-center">
      <h1>Fill Out Document</h1>
      <nav className="flex gap-5">
        <a className="border-2 border-solid px-4 py-2" href="#">
          Inicio
        </a>
        <a className="border-2 border-solid px-4 py-2" href="#">
          Documentos
        </a>
        <a className="border-2 border-solid px-4 py-2" href="#">
          Faq
        </a>
      </nav>
    </header>
  )
}