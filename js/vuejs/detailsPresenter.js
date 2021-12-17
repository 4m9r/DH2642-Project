function DetailsPresenter(props) {
    return (promiseNoData(props.model.currentMovie, props.model.currentMovieDetails, props.model.currentMovieError) ||
        <DetailsView
            addToList={() => { props.model.addToFavourites(props.model.currentMovieDetails); window.alert("Movie added to your list") }}
            currentMovie={props.model.currentMovie}
            data={props.model.currentMovieDetails}
            isMovieAdded={props.model.favourites.find(e => e.id == props.model.currentMovie)}

        />
    );
}