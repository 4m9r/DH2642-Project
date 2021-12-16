function DetailsPresenter(props) {
    return (promiseNoData(props.model.currentMovie, props.model.currentMovieDetails, props.model.currentMovieError) ||
        <DetailsView
            addToList = {e=> props.addToFavourites(e)}
            currentMovie = {props.model.currentMovie}
            data={props.model.currentMovieDetails}

        />
    );
}