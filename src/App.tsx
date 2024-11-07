import { Header } from "./components/Header";

export default function App() {
  return (
    <div className="bg-[#cbc8c3] min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8 pt-16">
        <section
          id="quem-somos"
          className="p-8 rounded-lg flex flex-col md:flex-row items-start space-y-8 md:space-y-0 md:space-x-8"
        >
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-800">QUEM SOMOS</h2>
              <h3 className="text-xl font-semibold text-gray-700">
                GRUPO PARTILHAR
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="bg-blue-100 w-full h-24 rounded-full shadow-md flex items-center justify-center">
                    <img
                      src="imagemalgo.png"
                      alt="IMAGEM"
                      className="rounded-full object-cover w-full h-full"
                    />
                  </div>
                  <h4 className="text-gray-800 font-semibold">NOME</h4>
                  <p className="text-gray-600 text-sm">DESCRIÇÃO</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:flex flex-1">
            <div className="bg-blue-100 w-full h-80 rounded-lg shadow-inner flex items-center justify-center">
              <img
                src="image.jpg"
                alt="IMAGEM?"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </section>

        <section id="contato" className="p-8 rounded-lg space-y-8 md:mt-12">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-800">FALE CONOSCO</h2>
            <h3 className="text-xl font-semibold text-gray-700 mt-4">
              NOSSOS CONTATOS
            </h3>
            <p className="text-gray-600 leading-relaxed mt-4">
              Siga nossas redes sociais e fique por dentro de tudo o que
              acontece na ONG Partilhar: Iluminando Caminhos! Acompanhe
              histórias de transformação, novidades sobre nossos projetos e
              saiba como você pode fazer parte dessa jornada de impacto e
              solidariedade.
            </p>
          </div>

          <div className="flex justify-center md:justify-start space-x-6">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="instagram-icon.png"
                alt="Instagram"
                className="w-10 h-10 hover:scale-110 transition-transform"
              />
            </a>
            <a
              href="https://www.whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="whatsapp-icon.png"
                alt="WhatsApp"
                className="w-10 h-10 hover:scale-110 transition-transform"
              />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="facebook-icon.png"
                alt="Facebook"
                className="w-10 h-10 hover:scale-110 transition-transform"
              />
            </a>
          </div>

          <div className="text-center md:text-left mt-6">
            <button className="bg-transparent border border-gray-600 text-gray-800 px-6 py-2 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors">
              ENDEREÇO
            </button>
          </div>
        </section>

        <section className=" p-8 rounded-lg flex flex-col md:flex-row items-center justify-between md:mt-12">
          <div className="md:w-2/3 space-y-6">
            <h2 className="text-4xl font-bold text-gray-800">
              FAÇA SUA DOAÇÃO!
            </h2>
            <h3 className="text-xl font-semibold text-gray-700">
              SUA DOAÇÃO FAZ A DIFERENÇA!
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Faça sua doação para a ONG Partilhar: Iluminando Caminhos e ajude
              a transformar vidas! Nossa missão é proporcionar educação, saúde e
              oportunidades a crianças e jovens em situação de vulnerabilidade,
              oferecendo apoio emocional e ferramentas para que construam um
              futuro melhor. Cada contribuição nos ajuda a levar esperança,
              cuidado e novas perspectivas para quem mais precisa.
            </p>
          </div>

          <div className="mt-8 md:mt-0 md:w-1/3 flex flex-col items-center">
            <div className="p-4 flex flex-col items-center">
              <img
                src="qrcode.png" 
                alt="QR Code para doação"
                className="w-32 h-32 mb-4"
              />
              <p className="text-gray-800 font-semibold text-center">
                Chave PIX: 17.320.824/0001-41
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-gray-700 py-6 border-t-black">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold">Grupo Partilhar</p>
        
        <p className="mt-2">
          Endereço: Rua Estevão de Oliveira, 40, Santo Amaro, Recife, Brasil 50050-160
        </p>

        <p className="mt-2">
          CNPJ: 17.320.824/0001-41
        </p>
        
        <p className="mt-4 text-sm text-gray-500">
          © {new Date().getFullYear()} Grupo Partilhar. Todos os direitos reservados.
        </p>
      </div>
    </footer>
    </div>
  );
}
