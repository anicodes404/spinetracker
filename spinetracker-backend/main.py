from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from routers import google_books

app = FastAPI()

app.include_router(google_books.router)
app.include_router(books.router)

# enable CORS
app.add_middleware(
    CORSMiddleware, 
    allow_origins=["http://localhost:5173"], # frontend origin
    allow_methods=["*"], 
    allow_headers=["*"],
)
# simulated user store
users = {}

class User(BaseModel):
    email: str
    password: str

@ app.post("/api/login")
def login(user: User): 
    if users.get(user.email) != user.password: 
        raise HTTPException(status_code=401, detail="Invalid credentials")
    return {"message": "Login successful"}

@app.get("/")
def hello():
    return {"message": "FastAPI is working!!"}