import { useState, useEffect } from "react";

const Perfil = () => {
  const [user, setUser] = useState(null);
  const [newName, setNewName] = useState("");
  const userEmail = "usuario@email.com"; // Reemplaza con el email real del usuario autenticado

  // Obtener datos del usuario
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/users`)
      .then((res) => res.json())
      .then((data) => {
        const foundUser = data.find((u) => u.email === userEmail);
        if (foundUser) {
          setUser(foundUser);
          setNewName(foundUser.username);
        }
      })
      .catch((err) => console.error("Error al obtener usuario:", err));
  }, []);

  // Actualizar nombre de usuario
  const updateUser = async () => {
    const response = await fetch(`http://127.0.0.1:8000/users/${userEmail}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: newName,
        email: userEmail,
        password: user.password,
      }),
    });
    if (response.ok) {
      alert("Nombre actualizado");
      setUser({ ...user, username: newName });
    } else {
      alert("Error al actualizar");
    }
  };

  // Eliminar cuenta
  const deleteUser = async () => {
    if (window.confirm("¿Seguro que quieres eliminar tu cuenta?")) {
      const response = await fetch(`http://127.0.0.1:8000/users/${userEmail}`, {
        method: "DELETE",
      });
      if (response.ok) {
        alert("Cuenta eliminada");
        setUser(null);
      } else {
        alert("Error al eliminar cuenta");
      }
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-4">Perfil</h2>
      {user ? (
        <div>
          <label className="block mb-2">Nombre:</label>
          <input
            type="text"
            className="w-full p-2 border rounded mb-4"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            onClick={updateUser}
          >
            Actualizar
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={deleteUser}
          >
            Eliminar Cuenta
          </button>
        </div>
      ) : (
        <p>No se encontró el usuario</p>
      )}
    </div>
  );
};

export default Perfil;
