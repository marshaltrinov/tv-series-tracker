async function addSeries() {
    const seriesInput = document.getElementById('seriesInput');
    const seriesList = document.getElementById('seriesList');

    if (seriesInput.value.trim() !== "") {
        const response = await fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(seriesInput.value)}&apikey=4c8f70dd`);
        const data = await response.json();

        if (data.Response === "True") {
            const li = document.createElement('li');
            li.innerHTML = `
                <strong>${data.Title}</strong> (${data.Year})<br>
                <img src="${data.Poster}" alt="${data.Title} Poster" style="width:100px;"><br>
                <em>${data.Genre}</em><br>
                <p>${data.Plot}</p>
                <p><strong>Rating:</strong> ${data.imdbRating} (${data.imdbVotes} votes)</p>
            `;
            seriesList.appendChild(li);
            seriesInput.value = ""; // Clear input
        } else {
            alert("Series not found. Please try another title.");
        }
    } else {
        alert("Please enter a series name.");
    }
}
