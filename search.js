function searchMovies() {
    let input = document.getElementById('searchBar').value.toLowerCase();
    let movies = document.getElementsByClassName('movie-list-item');

    for (let i = 0; i < movies.length; i++) {
        let title = movies[i].getElementsByClassName('movie-list-item-title')[0].innerText.toLowerCase();
        let description = movies[i].getElementsByClassName('movie-list-item-desc')[0].innerText.toLowerCase();

        // Check if the search input matches either the title or description of the movie
        if (title.includes(input) || description.includes(input)) {
            movies[i].style.display = ''; // Show the movie
        } else {
            movies[i].style.display = 'none'; // Hide the movie
        }
    }
}
