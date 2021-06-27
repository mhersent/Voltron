const express = require('express');
const app = express();
const pool = require("./db");

app.use(express.json()); // req.body

// ROUTES

// get all 

app.get("/books", async (req, res) => {
    try {
        const allBooks = await pool.query("SELECT * FROM books");

        res.json(allBooks.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// get one 

app.get("/books/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const book = await pool.query(
            "SELECT * FROM books WHERE bookid = $1",
            [id]
        );

        res.json(book.rows[0]);

    } catch (err) {
        console.error(err.message);
    }
});

// create one

app.post("/books", async (req, res) => {
    try {
        // Recuperation de l'ancien plus gros id
        const id = await pool.query("SELECT MAX(bookid) FROM books");

        // insertion 
        const { title, authors, average_rating, isbn, isbn13, language_code, num_pages, ratings_count, text_reviews_count, publication_date, publisher } = req.body;
        const newBook = await pool.query(
            "INSERT INTO books (bookid, title, authors, average_rating, isbn, isbn13, language_code, \"  num_pages\", ratings_count, text_reviews_count, publication_date, publisher) " +
            "VALUES (" + (id.rows[0].max +1) + ", $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *",
            [title, authors, average_rating, isbn, isbn13, language_code, num_pages, ratings_count, text_reviews_count, publication_date, publisher ]
        );



        res.json(newBook.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// update one (juste le titre à ameliorer si besoin)

app.put("/books/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { title } = req.body;

        const updateBook = await pool.query(
            "UPDATE books SET title = $1 WHERE bookid = $2",
            [title, id]
        );

        res.json("Book was updated");
    } catch (err) {
        console.error(err.message);
    }
});

// delete one

app.delete("/books/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteBook = await pool.query("DELETE FROM books WHERE bookid = $1",
            [id]);

        res.json("Suppression effectuée !");
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(3000, () => {
    console.log("server is listening to port 3000");
});