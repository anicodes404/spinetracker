import React, { useState } from 'react'; 

const BookSearch = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]); 

    const searchBooks = async () => {
        const res = await fetch(`/api/google-books/search?q=${query}`)
        const data = await res.json(); 
        setResults(data.items || []); 
    };

    const saveBook = async (book) => {
        const payload = {
            title: book.volumeInfo.title, 
            authors: book.volumeInfo.authors || [], 
            description: book.volumeInfo.description || '', 
            thumbnail: book.volumeInfo.imageLinks?.thumnail || '', 
        }; 

        const result = await res.json(); 
        alert(result.message); 
    }; 

    return (
        <div className="p-6 max-w-4xl mx-auto space-y-4">
            <h2 className="text-2xl font-bold">Search for Books</h2>
            <input
            className="border p-2 flex-1"
            placeholder="e.g Atomic Habits"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            />
            <button
                onclick={searchBooks}
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >
                Search
            </button>

            <ul>
                {results.map((book) => (
                    <li key={book.id} className="border p-4 mb-2 rounded flex justify-between items-center">
                        <div>
                            <h3 className="text-lg font-semibold">{book.volumeInfo.title}</h3>
                            <p className="text-sm">{book.volumeInfo.authors?.join(' , ')}</p>
                        </div>
                        <button
                            onClick={() => saveBook(book)}
                            className="bg-green-600 text-white px-3 py-1 rounded"
                            >
                            Save
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BookSearch; 