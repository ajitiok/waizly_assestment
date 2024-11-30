let books = []; // Tempat penyimpanan sementara untuk buku

// Membuat buku baru
const createBook = (req, res) => {
  const { title, author, year } = req.body;

  if (!title || !author || !year) {
    return res.status(400).json({ message: 'Please provide title, author, and year' });
  }

  const newBook = { id: books.length + 1, title, author, year };
  books.push(newBook);
  res.status(201).json({ message: 'Book created successfully', newBook });
};

// Mendapatkan daftar buku
const getBooks = (req, res) => {
  res.status(200).json({ books });
};

// Mengupdate buku
const updateBook = (req, res) => {
  const { id } = req.params;
  const { title, author, year } = req.body;

  const book = books.find(book => book.id === parseInt(id));
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  book.title = title || book.title;
  book.author = author || book.author;
  book.year = year || book.year;

  res.status(200).json({ message: 'Book updated successfully', book });
};

// Menghapus buku
const deleteBook = (req, res) => {
  const { id } = req.params;

  books = books.filter(book => book.id !== parseInt(id));
  res.status(200).json({ message: 'Book deleted successfully' });
};

module.exports = { createBook, getBooks, updateBook, deleteBook };
