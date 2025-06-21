import { useState } from 'react'; 
import BookShelf from '../components/BookShelf';
import BookDetails from '../components/BookDetails';

export default function bookShelfPage() {
    const [selectedBook, setSelectedBook] = useState(null); 

    return (
        <div className="grid grid-cols-3 h-screen">
            {/* Left: Bookshelf */}
            <div className="col-span-2 bg-dark p-4 overflow-y-auto">
                <BookShelf onSelect={setSelectedBook} /> 
            </div>

            {/* Right: Detail Panel */}
            <div className="col-span-1 bg-surface text-white p-4">
                <BookDetails book={selectedBook}/>
            </div>
        </div>
    )
}