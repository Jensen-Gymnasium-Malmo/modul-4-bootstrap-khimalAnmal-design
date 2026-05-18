 // Extrauppgift: Fixa så att headern och footern laddas in i varje sida från denna fil

 document.body.insertAdjacentHTML(
  "beforeend",

  `
  <footer class="bg-dark text-white text-center p-4">
    Footer
  </footer>
  `
)