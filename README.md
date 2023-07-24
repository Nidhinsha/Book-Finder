# Book Finder App

Book Finder is a simple full-stack web application that allows users to search for books using the Google Books API. The application consists of a backend built with Node.js and Express, which interacts with the Google Books API to fetch book data. The frontend is built with React.js and TypeScript, allowing users to enter a search query and display a list of books based on their search.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/book-finder-app.git
```

2. Navigate to the project directory:

```bash
cd Book-Finder
```
## Backend Setup

1. Navigate to the project directory:

```bash
cd server
```
2. Install backend dependencies:
```bash
npm install
```
3. Set up the environment variables:

Add your Google Books API key to the .env file:
```bash
API_KEY=your-google-books-api-key

```
4. Start the backend  server :
```bash 
npm start 
```

## Frontend Setup

1. Navigate to the project directory:

```bash
cd client
```
2. Install frontend dependencies:
```bash
npm install
```
3. Start the frontend server :
```bash 
npm run dev
```


## Usage

1. Open your web browser and navigate to http://localhost:3000 to access the Book Finder application.

2. Enter a search query in the search bar and click the "Search" button to view a list of matching books.


3. Pagination support is available to browse through multiple pages of search results.

