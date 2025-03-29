import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
  
    const response = await fetch("http://localhost:8000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
        username: "" // Se envía vacío para evitar el error 422
      }),
    });
  
    if (response.status === 422) {
      alert("Error 422: Contenido no procesable. Verifique los datos ingresados.");
      return;
    }
  
    const data = await response.json();
    console.log(data);
    
    setFormData({ email: "", password: "" });
    window.location.href="http://127.0.0.1:8000/docs";
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-400">
          Iniciar Sesión
        </h2>
        <form onSubmit={handleLogin} className="space-y-5">
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
              ref={emailRef}
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

          {/* Botón de Iniciar Sesión */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white font-semibold py-2 rounded-lg shadow-md"
          >
            Iniciar Sesión
          </button>
        </form>

        {/* Enlace para registrarse */}
        <div className="text-center mt-4 flex justify-center">
          <Link to="/register" className=" text-white flex">
            ¿No tienes cuenta? Regístrate
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;