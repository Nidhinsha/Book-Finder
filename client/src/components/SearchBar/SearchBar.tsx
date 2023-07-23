import React,{useState} from 'react'
import { Box, Button, CircularProgress, InputAdornment, TextField, Typography } from '@mui/material'
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import searchBooks from '../../Api/Api'
import BookList, { BookData } from '../BookList/BookList';

function SearchBar() {
    const [term, setTerm] = useState<string | undefined>("")
    const [books, setBooks] = useState<BookData[]>([])
    const [loading, setLoading] = useState<boolean | undefined>(false)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTerm(event.target.value)
    }

    const handleSubmit = async () => {
        setLoading(true)
        try {
            const result = await searchBooks(term)
            setBooks(result)
        } catch (error) {
            console.log("error while fetching images:", error);
        }
        
        setLoading(false)
    }


  return (
    <Box >
    <Box display="flex" justifyContent="center" alignItems="center">
        <Box sx={{ maxWidth: "600px", width: "100%" }}>
            <Typography variant="h4" component="h4" textAlign="center" gutterBottom>
                Image Search Application
            </Typography>
            <TextField
                helperText="Please enter the search term"
                id="demo-helper-text-misaligned"
                label="Name"

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
        <BookList books={books} bookPerPage={6}/>
    </Box>
</Box>
  )
}

export default SearchBar
