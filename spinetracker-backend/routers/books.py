from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(prefix="/api/books", tags=["Books"])

class BookCreate(BaseModel): 
    title: str
    authors: list[str]
    description: str | None = None
    thumbnail: str | None = None

@router.post("/")
async def save_book(books: BookCreate): 
    #TODO: SAVE TO DATABASE SALAlchemy
    print("Saving book:", book)
    return {"message": "Book saved successfully,", "book": book}

