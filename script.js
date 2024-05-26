let url = 'https://api.quotable.io/random';

fetch(url)
  .then((data) => data.json())
  .then((responsive) => {
    let quote = document.createElement('h1');
    quote.textContent = responsive.content;
    quote.id = 'quote';

    let author = document.createElement('h1');
    author.textContent = responsive.author;
    author.id = 'author';

    document.body.appendChild(quote);
    document.body.appendChild(author);
  });
