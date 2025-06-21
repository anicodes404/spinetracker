import { useState } from "react"; 
import { Card, Heading } from "@skeletonlabs/skeleton"; 



const BookShelf = ({ onSelect }) => {
    const books = [
        // Incorporate import of the API reads personalized to each user
    { title: "I AM AI", section: "Currently Reading", color: "variant-filled-primary" },
    { title: "Future Murder", section: "Coming Up", color: "variant-filled-secondary" },
    { title: "Beyond", section: "Currently Reading", color: "variant-filled-neutral" },
    { title: "Thriller", section: "Genre", color: "variant-filled-tertiary" },
    { title: "Nonfiction", section: "Genre", color: "variant-filled-warning" },
    ]; 

    const sections = ["Currently Reading", "Next Book", "Genre" ] 

    return (
        <div>
            {sections.map((section) => (
                <div key={section} className="mb-6">
                    <Heading level={3}>{section}</Heading>
                    <div className="flex gap-2 mt-2">
                        {books
                          .filter((b) => b.section === section)
                          .map((book, idx) => (
                            <Card
                               key={idx}
                               className={`h-32 w-12 rounded rotate-[-5deg] text-center cursor-pointer ${book.color}`}
                               onClick={() => onSelect(book)}
                               >
                                <p className="rorate-90 whitespace-nowrap text-sm text-white mt-10">
                                    {book.title}
                                </p>
                               </Card>
                          ))}
                    </div>
                </div>
            ))}
        </div>
    )
};

export default BookShelf; 