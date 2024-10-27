async function addSeries() {
    const seriesInput = document.getElementById('seriesInput');
    const seriesList = document.getElementById('seriesList');

    if (seriesInput.value.trim() !== "") {
        const response = await fetch(`http://www.omdbapi.com/?t=${encodeURIComponent(seriesInput.value)}&apikey=4c8f70dd`);
        const data = await response.json();

        if (data.Response === "True") {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${data.Title}</strong> (${data.Year}) - ${data.Genre}`;
            seriesList.appendChild(li);
            seriesInput.value = ""; // Clear input
        } else {
            alert("Series not found. Please try another title.");
        }
    } else {
        alert("Please enter a series name.");
    }
}
