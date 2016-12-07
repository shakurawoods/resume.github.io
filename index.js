var api_key = 'keyQGpVy30XuK10ua';
var bookRecords = 'https://api.airtable.com/v0/appqBWrFDQR2mMpta/Books?api_key=' + api_key;

function renderRecords(data) {
  $(data.records).each(function(index, book) {
    var bookName = book.fields("Name");
    var bookAuthor = book.fields("Author");
    var bookPic = book.fields("Picture");
    var bookInfo = '';

    if (bookNames) {
      bookInfo += `<li>`;

      if (bookPics) {
        $.each(bookPics, function(i, pic) {
          bookInfo += `<img src="${pic.url}">`;
        });
      }

      bookInfo += ` Name: ${bookNames} <br> Author Name: ${bookAuthors}<br> Picture: ${bookPicture}`;
      bookInfo += `</li>`;
    }

    $('.book').append(bookInfo);
  });
}

$.get(book_Records, renderRecords);