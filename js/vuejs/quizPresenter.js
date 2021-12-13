function QuizPresenter(props) {
    return (promiseNoData(props.model.currentMovie, props.model.currentMovieDetails, props.model.currentMovieError) ||
        <div class="parent">
            <div class="quizz"><QuizView model={props.model}
            />
            </div>
        </div>
    )
}
