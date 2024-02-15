// Consider an array of objects representing books
const books = [
    { title: 'Book 1', author: 'Author 1', year: 2020 },
    { title: 'Book 2', author: 'Author 2', year: 2021 }
  ];
  
  // Combination of array and object destructuring to extract values
  const [{ title: firstTitle, author: firstAuthor }, { title: secondTitle }] = books;
  