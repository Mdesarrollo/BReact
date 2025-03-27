import { useState } from "react";
import { Link } from "react-router-dom";
import { User, Mail, Lock } from "lucide-react";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    const response = await fetch("http://localhost:8000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: formData.username,
        email: formData.email,
        password: formData.password,
      }),
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-400">
          Crear Cuenta
        </h2>
        <form onSubmit={handleRegister} className="space-y-5">
          {/* Nombre de Usuario */}
          <div>
            <label className="flex items-center text-gray-300 mb-1">
              <User className="mr-2 text-blue-400" />
              Nombre de Usuario
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-400 outline-none text-white"
            />
          </div>

          {/* Correo Electrónico */}
          <div>
            <label className="flex items-center text-gray-300 mb-1">
              <Mail className="mr-2 text-blue-400" />
              Correo Electrónico
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-400 outline-none text-white"
            />
          </div>

          {/* Contraseña */}
          <div>
            <label className="flex items-center text-gray-300 mb-1">
              <Lock className="mr-2 text-blue-400" />
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-400 outline-none text-white"
            />
          </div>

          {/* Confirmar Contraseña */}
          <div>
            <label className="flex items-center text-gray-300 mb-1">
              <Lock className="mr-2 text-blue-400" />
              Confirmar Contraseña
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-400 outline-none text-white"
            />
          </div>

          {/* Checkbox de Términos y Condiciones */}
          <div className="flex items-center">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="mr-2"
            />
            <label className="text-sm text-gray-400">
              Acepto los{" "}
              <a href="#" className="text-blue-400 hover:underline">
                términos y condiciones
              </a>
            </label>
          </div>

          {/* Botón de Registro */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white font-semibold py-2 rounded-lg shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!formData.termsAccepted}
          >
            Registrarme
          </button>
        </form>

        {/* Enlace para iniciar sesión */}
        <div className="text-center mt-4 flex justify-center">
        <Link
              to="/login"
              className=" text-white flex"
          >
            ¿Ya tienes una cuenta? Inicia sesion
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
