from fastapi import APIRouter, Query
import httpx

router = APIRouter(prefix="/api/google-books", tags=["Google Books"])

#GOOGLE_BOOKS_API_KEY = os.getenv{"GOOGLE_BOOKS_API_KEY"}

@router.get("/")
async def search_google_books(q: str = Query(...)): 
    url = f"https://www.googleapis.com/books/v1/volumes?q={q}"
    async with httpx.AsyncClient() as client: 
        response = await client.get(url)
        return response.json()