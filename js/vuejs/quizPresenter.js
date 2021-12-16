function QuizPresenter(props) {
    return (promiseNoData(props.model.currentMovie, props.model.currentMovieDetails, props.model.currentMovieError) ||
        <div class="quiz">
            <QuizView model={props.model} />
        </div>
    )
}
