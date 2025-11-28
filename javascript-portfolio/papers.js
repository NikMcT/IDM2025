document.addEventListener('DOMContentLoaded', function() {
    
    let books = [];
    let currentIndex = 0;
    let intervalId;


    const bookDisplay = document.getElementById('bookDisplay');
    const pauseBtn = document.getElementById('pauseBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    function displayBook(index) {
        const book = books[index];
        const slider = document.getElementById("bookDisplay");

        slider.style.opacity = 0;

        const eachPaper = document.createElement("div");
        eachPaper.className = "paperSingle";
        eachPaper.innerHTML = document.getElementById("template").innerHTML;

        eachPaper.querySelector(".paperTitle").textContent = book.title;
        eachPaper.querySelector(".authors").textContent = book.authors;
        eachPaper.querySelector(".year").textContent = book.year;
        eachPaper.querySelector(".terms").textContent = book.terms;

        slider.innerHTML = "";          // clear previous
        slider.appendChild(eachPaper);  // show new one

        slider.style.opacity = 1;
    }


    function nextBook() {
        currentIndex = (currentIndex + 1) % books.length;
        displayBook(currentIndex);
    }
    function prevBook() {
        currentIndex = (currentIndex - 1 + books.length) % books.length;
        displayBook(currentIndex);
    }

    // Event listeners
    prevBtn.addEventListener('click', () => {
        prevBook();
    });

    nextBtn.addEventListener('click', () => {
        nextBook();
    });

    // Load the JSON file
    fetch('papers.json')
        .then(response => response.json())
        .then(data => {
            books = data;
            console.log('Successfully loaded', books.length, 'papers');
            displayBook(currentIndex);
        })
        .catch(error => console.log("Error Fetching Images", error))

});
