from fastapi import FastAPI, HTTPException
from pymongo import MongoClient
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from bson import ObjectId
import os
from dotenv import load_dotenv

# Cargar variables de entorno
load_dotenv()

# Conexión a MongoDB
MONGO_URL = "mongodb://localhost:27017"
DATABASE_NAME = "users"
client = MongoClient(MONGO_URL)

print(MONGO_URL)

# Conectar a MongoDB

db = client["users"]
users_collection = db["user"]

app = FastAPI()

# Configurar CORS para conectar con React Vite
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

try:
    client.server_info()
    print(f"Conectado a MongoDB en {MONGO_URL}, Base de datos: {DATABASE_NAME}")
except Exception as e:
    raise Exception(f"Error conectando a MongoDB: {e}")


# Modelo de usuario
class User(BaseModel):
    username: str
    email: str
    password: str


# Registrar usuario
@app.post("/register")
def register(user: User):
    if users_collection.find_one({"email": user.email}):
        raise HTTPException(status_code=400, detail="Email ya registrado")

    users_collection.insert_one(user.dict())
    return {"message": "Usuario registrado exitosamente"}


# Iniciar sesión
@app.post("/login")
def login(user: User):
    stored_user = users_collection.find_one(
        {"email": user.email, "password": user.password}
    )
    if not stored_user:
        raise HTTPException(status_code=400, detail="Credenciales incorrectas")

    return {"message": "Inicio de sesión exitoso", "username": stored_user["username"]}


# Obtener todos los usuarios (CRUD - Read)
@app.get("/users")
def get_users():
    users = list(users_collection.find({}, {"_id": 0}))
    return users


# Actualizar usuario (CRUD - Update)
@app.put("/users/{email}")
def update_user(email: str, user: User):
    result = users_collection.update_one({"email": email}, {"$set": user.dict()})
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Usuario no encontrado")
    return {"message": "Usuario actualizado"}


# Eliminar usuario (CRUD - Delete)
@app.delete("/users/{email}")
def delete_user(email: str):
    result = users_collection.delete_one({"email": email})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Usuario no encontrado")
    return {"message": "Usuario eliminado"}


@app.get("/")
def read_root():
    return {"message": "API funcionando correctamente"}
