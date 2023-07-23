import { Card, CardContent, Grid, Button } from '@mui/material';
import { useState } from "react";
import "./BookList.css"

export interface BookData {
  title: string;
  description: string;
  authors: string[];
  coverImage: string;
}

interface BookListProps {
  books: BookData[];
  bookPerPage: number;
}

function BookList({ books, bookPerPage }: BookListProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Calculate the index range for the current page
  const indexOfLastBook = currentPage * bookPerPage;
  const indexOfFirstBook = indexOfLastBook - bookPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  const handleNextPage = () => {
    setCurrentPage((prevPage: number) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage: number) => prevPage - 1);
  };

  return (
    <Grid container spacing={2} justifyContent="space-between">
      {currentBooks.length > 0 ? (
        currentBooks.map((book) => (
          <Grid key={book.title} item xs={12} sm={6} md={4} style={{ marginTop: '20px' }}>
            <Card className="image-card">
              <img
                src={book.coverImage}
                alt={book.description}
                className="image"
              />
              <CardContent className="description">
                <h3>{book.title}</h3>
                <p>{book.authors.join(", ")}</p>
              </CardContent>
            </Card>
          </Grid>
        ))
      ) : (
        ""
      )}

      {/* pagination */}
      <Grid container justifyContent="center" mt={3}>
        <Button
          variant="contained"
          color="primary"
          disabled={currentPage === 1}
          onClick={handlePreviousPage}
        >
          Previous Page
        </Button>
        <Button
          variant="contained"
          color="primary"
          disabled={indexOfLastBook >= books.length}
          onClick={handleNextPage}
        >
          Next Page
        </Button>
      </Grid>
    </Grid>
  );
}

export default BookList;
