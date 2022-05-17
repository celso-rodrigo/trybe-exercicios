const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

function getAuthorNames() {
  const authorNames = books.map((book) => book.author.name);
  const authorNameSplit = authorNames.map((name) => name.split(' '));
  return authorNameSplit;
}

function getCorrectAuthor(authorsNames) {
  const correctAuthor = authorsNames.find((authorsNames) => {
    return (authorsNames[0].endsWith('.') && authorsNames[0].length === 2) &&
    (authorsNames[1].endsWith('.') && authorsNames[1].length === 2) &&
    (authorsNames[2].endsWith('.') && authorsNames[2].length === 2)
  });
  return correctAuthor.join(' ');
}

function getCorrectBook(authorName) {
  const correctBook = books.filter((book) => book.author.name === authorName)
  return correctBook[0].name
}

function authorWith3DotsOnName() {
  const authorNameSplit = getAuthorNames();
  const correctAuthor = getCorrectAuthor(authorNameSplit);  
  const correctBook = getCorrectBook(correctAuthor);
  return correctBook;
}

console.log(authorWith3DotsOnName());
