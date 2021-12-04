function DetailsPresenter(props) {
    return (promiseNoData(props.model.currentMovie, props.model.currentMovieDetails, props.model.currentMovieError) ||
        <DetailsView 
        data = {currentMovieDetails}
        />
    );
}