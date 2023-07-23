import React, { useState } from 'react'
import { Box, Button, CircularProgress, InputAdornment, TextField, Typography } from '@mui/material'
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import searchBooks from '../../Api/Api'
import BookList, { BookData } from '../BookList/BookList';

function SearchBar() {
    const [term, setTerm] = useState<string | undefined>("")
    const [books, setBooks] = useState<BookData[]>([])
    const [loading, setLoading] = useState<boolean | undefined>(false)
    const [error, setError] = useState<string >("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTerm(event.target.value)
    }

    const handleSubmit = async () => {
        if (term === undefined || term.trim() === "") {
            setError("Please enter something in the search bar.");
            return;
        }

        setLoading(true);
        setError("");

        try {
            const result = await searchBooks(term);
            setBooks(result);
        } catch (error) {
            console.error("error while fetching images:", error);
            setError("Error fetching book data. Please try again later.");
        }

        setLoading(false);
    };


    return (
        <Box >
            <Box display="flex" justifyContent="center" alignItems="center">
                <Box sx={{ maxWidth: "600px", width: "100%" }}>
                    <Typography variant="h4" component="h4" textAlign="center" gutterBottom>
                        Book Finder Application
                    </Typography>
                    <TextField
                        helperText="Please enter the search term"
                        id="demo-helper-text-misaligned"
                        label="Book Name"

                        InputProps={{
                            endAdornment: (
                                <Button onClick={handleSubmit}>
                                    <InputAdornment position="start" style={{ cursor: 'pointer' }} >
                                        <ImageSearchIcon />
                                    </InputAdornment>
                                </Button>
                            ),
                        }}

                        onChange={handleChange}
                        value={term}
                        fullWidth
                    />
                </Box>
            </Box>
            {/* loading */}
            {loading && (
                <Box textAlign="center" mt={3}>
                    <CircularProgress />
                </Box>
            )}
            {/* loading */}

            {/* showing the search result text after the search is done */}
            {books && books.length > 0 && (
                <Box textAlign="center" mb={5}>
                    <Typography variant="h5" component="h5" gutterBottom>
                        This is your search result
                    </Typography>
                </Box>
            )}
            <Box>
                <Box sx={{ color: "red", textAlign: "center" }}>
                    {error}
                </Box>
                <BookList books={books} bookPerPage={3} />
            </Box>
        </Box>
    )
}

export default SearchBar
