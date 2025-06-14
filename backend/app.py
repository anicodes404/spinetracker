import requests
from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/api/search')
def search_books():
    query = request.args.get('q', '')
    if not query: 
        return jsonify({"error": "Query parameter 'q; is required"}), 400
    
    # Call Open Library Search API
    url = f'https://openlibrary.org/search.json?q={query}'
    response = requests.get(url)

    if response.status_code != 200: 
        return jsonify({"Error": "Failed to fetch data from Open Library"}), 500
                        
    data = response.json()

    # Extract book info from the results
    books = []
    for doc in data.get('docs', [])[:10]:
        books = {
            "title": doc.get("title"),
            "author":  ", ".join(doc.get("author_name", [])) if doc.get("author_name") else "Unknown",
            "first_publish_year": doc.get("first_publish_year"),
            "isbn": doc.get("isbn", [None])[0]
        }
        books.append(book)

    return jsonify(books)

