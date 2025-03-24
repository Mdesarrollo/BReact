import { useState } from "react";
import { Lock, Mail } from "lucide-react";
function login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleLogin = (e) => {
      e.preventDefault();
      console.log("Email:", email, "Password:", password);
    };
  
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-96">
          <h2 className="text-3xl font-bold text-center mb-6 text-blue-400">
            Iniciar Sesión
          </h2>
          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email */}
            <div>
              <label className="flex items-center text-gray-300 mb-1">
                <Mail className="mr-2 text-blue-400" />
                Correo Electrónico
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-400 outline-none text-white"
              />
            </div>
  
            {/* Password */}
            <div>
              <label className="flex items-center text-gray-300 mb-1">
                <Lock className="mr-2 text-blue-400" />
                Contraseña
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-400 outline-none text-white"
              />
            </div>
  
            {/* Botón de Login */}
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white font-semibold py-2 rounded-lg shadow-md"
            >
              Ingresar
            </button>
          </form>
  
          {/* Enlace de recuperación */}
          <div className="text-center mt-4">
            <a href="#" className="text-blue-400 hover:underline text-sm">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </div>
      </div>
    );
}

export default login;