function RecommendPresenter(props) {
    return (promiseNoData(props.model.currentMovie, props.model.currentMovieDetails, props.model.currentMovieError) ||
        <div>
            <span class="similar"> Similar Movies to {props.model.currentMovieDetails.title} </span>
            <SearchResultsView
                searchResults={props.model.currentMovieDetails.similars}
                movieChosen={id => props.model.setCurrentMovie(id)}
            />
           
        </div>
    );
}