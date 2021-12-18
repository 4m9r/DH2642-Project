function DetailsPresenter(props) {
    return (promiseNoData(props.model.currentMovie, props.model.currentMovieDetails, props.model.currentMovieError) ||
        <DetailsView
            addToList={e => props.model.addToFavourites(e)}
            //NEW
            removeMovie={e => props.model.removeFromFavList(e)}
            isMovieInFavourites={props.model.favourites.find(d => d.id== props.model.currentMovieDetails.id)}
            currentMovie={props.model.currentMovie}
            data={props.model.currentMovieDetails}

        />
    );
}