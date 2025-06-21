import { Heading, Chip } from "@skeletonlabs/skeleton"; 

const BookDetails = ({ books }) => {
    if (!book) return <p className="text-neutral-300">Select a book to see details</p>; 

    return (
        <div className="space-y-4">
            <img 
                src={book.cover || "https://via.placeholder.com/150"}
                alt="Book Cover"
                className="rounded shadow-lg w-full h-48 object-cover"
            />

            <Heading level={2}>{book.title}</Heading>
            <p className="text-sm text-neutral-300">by John Smith</p>

            <div className="text-warning">Star Rating</div>
            <div className="text-3xl">Emoji to go with star rating</div>
             
             <section>
                <Heading level={4}>Summary</Heading>
                <p className="text-sm text-neutral-400">
                    A brief overview of the books' themes and style - AI book summary
                </p>
             </section>

            <section>
                <Heading level={4}>Recommended</Heading>
                <div className="flex gap-3 mt-2">
                    {[{ title:"Eragon" }, { title:"Saphira" }].map((rec, idx) => {
                        <div id={idx} className="text-center">
                            <img srcs="#"/>
                            <p className="text-xs mt-1 text-neutral-300">{rec.title}</p>
                        </div>
                    })}
                </div>

            </section>


        </div>
    );
};

export default BookDetails; 