let url = 'https://api.quotable.io/random';

fetch(url)
  .then((data) => data.json())
  .then((responsive) => {
    let quote = document.createElement('p');
    quote.textContent = responsive.content;
    quote.id = 'author';

    let author = document.createElement('p');
    author.textContent = responsive.author;
    author.id = 'quote';

    let div = document.createElement('div');
    div.appendChild(author);
    div.appendChild(quote);
    document.body.appendChild(div);
  });
