export const Fetch = () => {
    fetch("https://devru-bigflix-movies-download-v1.p.rapidapi.com/movieList.php?pageIndex=1&resultsperpage=10", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "devru-bigflix-movies-download-v1.p.rapidapi.com",
            "x-rapidapi-key": "2256433345msh3b85f2aa1c465c6p1f4990jsn6a9efd5edaf6"
        }
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    });
}