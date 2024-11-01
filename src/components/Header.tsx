import logo from '../assets/logo.svg'
export function Header() {
  return (
    <header className="bg-green-200 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <nav className="hidden md:flex space-x-8 text-green-900">
          <a href="#quem-somos" className="hover:text-green-700">
            Quem Somos
          </a>
          <a href="#projetos" className="hover:text-green-700">
            Projetos
          </a>
          <a href="#doe" className="text-green-800 hover:text-green-700">
            Doe
          </a>
        </nav>

        <div className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Logo Grupo Partilhar"
            className="w-10 h-10"
          />
        </div>
        <a
          href="#contato"
          className="text-[#726e62] border border-[#726e62] rounded-full px-4 py-2 hover:bg-green-[#726e62] hover:text-[#726e62] transition"
        >
          Contato
        </a>
      </div>
    </header>
  )
}