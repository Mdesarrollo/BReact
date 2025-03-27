import { Link } from "react-router-dom";
function start() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white py-6 shadow-lg ">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-bold">Gestión y Bienestar RH</h1>
          <nav>
            <a href="#benefits" className="mx-4 hover:underline">Beneficios</a>
            <a href="#testimonials" className="mx-4 hover:underline">Testimonios</a>
            <a href="#contact" className="mx-4 hover:underline">Contacto</a>

            <Link
              to="/register"
              className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition mr-3"
            >
              Registro
            </Link>

            <Link
              to="/login"
              className="px-6 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 transition"
            >
              Iniciar Sesión
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-16 bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?office,team')" }}>
        <div className="bg-black bg-opacity-50 p-10 rounded-xl max-w-3xl mx-auto text-white">
          <h2 className="text-4xl font-bold mb-4">El bienestar de los empleados es el éxito de la empresa</h2>
          <p className="text-lg">Descubre cómo una buena gestión de Recursos Humanos mejora la productividad y satisfacción laboral.</p>
          <a href="#benefits" className="mt-6 inline-block bg-yellow-400 text-black py-3 px-6 rounded-lg font-semibold hover:bg-yellow-500 transition">Descubrir más</a>
        </div>
      </section>

      {/* Beneficios */}
      <section id="benefits" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-10">Beneficios de una buena gestión de RH</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Mayor Productividad", img: "https://cdn.escala.com/wp-content/uploads/2022/04/que-es-productividad-empresarial-escal.png" },
              { title: "Menos Rotación", img: "https://ide.marketing/wp-content/uploads/2025/03/BigData.png" },
              { title: "Mejor Clima Laboral", img: "https://ntfor.com/wp-content/uploads/2023/07/blog.png" }
            ].map((benefit, index) => (
              <div key={index} className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
                <img src={benefit.img} alt={benefit.title} className="w-full h-40 object-cover" />
                <div className="p-6 text-center">
                  <h4 className="text-xl font-semibold">{benefit.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section id="testimonials" className="py-16 bg-gray-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-10">Lo que dicen los empleados</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "Juan Pérez", text: "Desde que la empresa invierte en bienestar, mi motivación ha crecido increíblemente." },
              { name: "Ana Gómez", text: "Un ambiente laboral saludable ha cambiado mi forma de trabajar y sentirme más feliz." }
            ].map((testimony, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-600 italic">"{testimony.text}"</p>
                <h4 className="font-semibold mt-4">{testimony.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contact" className="py-16 bg-blue-600 text-white text-center">
        <h3 className="text-3xl font-bold">¿Quieres saber más?</h3>
        <p className="mt-2 mb-6">Contáctanos para conocer cómo mejorar la gestión de RH en tu empresa.</p>
        <a href="#" className="bg-yellow-400 text-black py-3 px-6 rounded-lg font-semibold hover:bg-yellow-500 transition">Contáctanos</a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 text-center py-4">
        <p>© 2025 Gestión y Bienestar RH. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default start;