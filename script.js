//Palīgmateriāls MDN Web Docs
function toggleBook() { //Funkcija ar kuras palīdzību nospiežot uz attēla, tas apvēršas un mainās//
  const book = document.getElementById('book');
  book.classList.toggle('opened');
}