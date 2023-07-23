import axios from "axios";
import { Request, Response } from "express";

// searching the books
exports.searchBook = async (req: Request, res: Response) => {
    const q: string = req.query.q as string
    if (!q) {
        // Handle the case when q is not provided or is an empty string
        return res.status(400).json({ error: "Search query is missing or empty" });
    }

    const apiKey: string | undefined = process.env.API_KEY

    if (!apiKey) {
        // Handle the case when API key is not provided or is invalid
        return res.status(500).json({ error: "Invalid Google Books API key" });
    }

    try {

        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
            q
        )}&key=${apiKey}`)

        const bookData = response.data.items.map((item: any) => {
            const volumeInfo = item.volumeInfo
            const title = volumeInfo.title
            const description = volumeInfo.description
            const authors = volumeInfo.authors || []
            const coverImage = volumeInfo.imageLinks?.thumbnail || ""

            return {
                title,
                description,
                authors,
                coverImage
            }
        })

        res.send(bookData)
        
    } catch (error) {
        console.error("Error fetching book data", error);
        res.status(500).json({ error: "Error fetching book data" });
    }
}