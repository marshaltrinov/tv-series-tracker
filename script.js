function addSeries() {
    const seriesInput = document.getElementById('seriesInput');
    const seriesList = document.getElementById('seriesList');

    if (seriesInput.value.trim() !== "") {
        const li = document.createElement('li');
        li.textContent = seriesInput.value;
        seriesList.appendChild(li);
        seriesInput.value = ""; // Clear input
    } else {
        alert("Please enter a series name.");
    }
}
