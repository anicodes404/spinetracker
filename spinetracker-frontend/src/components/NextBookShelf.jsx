import React, { useState, useEffect } from "react";

const NextBookShelf = ({ userId }) => {
    console.log('This is the Next Book Shelf')
    const [currentBook, setCurrentBook] = useState(null); 
    const [nextBook, setNextBook] = useState(null); 
    const [genreOrder, setGenreOrder] = useState([]); 
    const [availableGenres, setAvailableGenres] = useState([]);

    useEffect(() => {
        fetch(`/api/users/${userID}/genre-order`)
            .then(res => res.json())
            .then(data => setGenreOrder(data)); 

        fetch(`/api/users/${userId}/current-book`)
            .then(res => res.json())
            .then(data => setGenreOrder(data)); 

        fetch(`/api/users/${userId}/current-book`)
            .then(res => res.json())
            .then(data => setCurrentBook(data)); 

        fetch(`/api/genres`)
            .then(res => res.json())
            .then(data => setAvailableGenres(data)); 
    }, [userId]); 

    const handleGenreOrderChange = (index, value) => {
        const newOrder = [...genreOrder]; 
        newOrder[index] = value; 
        setGenreOrder(newOrder);
    };

    const saveGenre = () => {
        fetch(`/api/users/${userId}/next-book`)
            .then(res => res.json())
            .then(data => setNextBook(data));
    };

    return (
        <div className="p-6 max-w-3xl mx-auto bg-white rounded-xl shadow-md space-y-4">
            <h1 className="text-2xl font-bold">Next Book Shelf</h1>

            <div>
                <h2 className="text-xl font-semibold">Currently Reading:</h2>
                {currentBook ? (
                    <p>{currentBook.title} by {currentBook.author}</p>
                ) : (
                    <p>No book currently being read.</p>
                )}
            </div>

            <div>
                <h2 className="text-xl font-semibold">Your Genre Rotation:</h2>
                {genreOrder.map((genre, idx) => (
                    <select
                        key={idx}
                        value={genre}
                        onChange={e => handleGenreOrderChange(idx, e.target.value)}
                        className="block mb-2 p-2 border rounded"
                        >
                            {availableGenres.map(g => (
                                <option key={g} value={g}>{g}</option>
                            ))}
                        </select>
                ))}
                <button
                    onClick={saveGenreOrder}
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Save Genre Order
                    </button>
            </div>
        </div>
    )
}

export default NextBookShelf; 