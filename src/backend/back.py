from fastapi import FastAPI, HTTPException, Depends
from pymongo import MongoClient
from pydantic import BaseModel
from bson import ObjectId
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Configurar CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Conexión a MongoDB
client = MongoClient("mongodb://localhost:27017")
db = client["auth_db"]
users_collection = db["users"]

class User(BaseModel):
    username: str
    password: str

@app.post("/register")
def register(user: User):
    if users_collection.find_one({"username": user.username}):
        raise HTTPException(status_code=400, detail="Usuario ya registrado")
    users_collection.insert_one(user.dict())
    return {"message": "Usuario registrado exitosamente"}

@app.post("/login")
def login(user: User):
    stored_user = users_collection.find_one({"username": user.username, "password": user.password})
    if not stored_user:
        raise HTTPException(status_code=400, detail="Credenciales incorrectas")
    return {"message": "Inicio de sesión exitoso"}

@app.get("/users")
def get_users():
    users = list(users_collection.find({}, {"_id": 0}))
    return users
