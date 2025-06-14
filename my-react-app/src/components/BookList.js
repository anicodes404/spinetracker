import React from "react";

const dummyBooks = [
    {id: 1, title: '1984', author: 'George Orwell'},
    {id: 2, title: 'The Great Gatsby', author: 'F. Scott Fitgerald'},
]

function BookList() {
    return(
        <div>
            <h2>Your Books</h2>
            <ul>
                {dummyBooks.map(book => (
                    <li key={bookid}>
                        <strong>{book.title}</strong> by {book.author}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BookList