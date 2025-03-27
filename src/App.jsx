import { Link } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
        <h1 className="text-2xl font-bold text-gray-700 mb-6">Bienvenido</h1>
        <p className="text-gray-500 mb-4">Elige una opción para continuar</p>
        <div className="flex gap-4">
          <Link
            to="/register"
            className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"
          >
            Registro
          </Link>
          <Link
            to="/login"
            className="px-6 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 transition"
          >
            Iniciar Sesión
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
