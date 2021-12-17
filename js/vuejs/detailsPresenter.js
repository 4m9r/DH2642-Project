function DetailsPresenter(props) {
    return (promiseNoData(props.model.currentMovie, props.model.currentMovieDetails, props.model.currentMovieError) ||
        <DetailsView
            addToList={e => props.model.addToFavourites(e)}
            isMovieInFavourites={props.model.favourites.find(d => d == props.model.currentMovieDetails)}
            currentMovie={props.model.currentMovie}
            data={props.model.currentMovieDetails}

        />
    );
}