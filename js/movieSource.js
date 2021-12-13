const MovieSource = {
    apiCall(params) {
        return fetch(BASE_URL + params, {
            "method": "GET",
        }).then(response => {
            if (response.status != 200)
                throw new Error(response.statusText);
            else
                return response;
        })
            .then(response => response.json());

    }

    ,
    // returns a promise which as data has an array of objects
    // you can get movie id, image, title  
    searchMovie(title) {
        return MovieSource.apiCall("SearchMovie/" + API_KEY + title).then(data => data.results);
    }
    ,
    // returns a promise which as data has an object that contains all the information about the movie 
    getMovieDetails(id) {
        return MovieSource.apiCall("Title/" + API_KEY + id);
    },
    getTopMovies() {
        return (MovieSource.apiCall("Top250Movies/" + API_KEY));
    }









}