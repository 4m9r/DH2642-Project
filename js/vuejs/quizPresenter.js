function QuizPresenter(props) {
    return (promiseNoData(props.model.currentMovie, props.model.currentMovieDetails, props.model.currentMovieError) ||
        <div class="parent">
            <div class="quizz"><QuizView quizData={props.model.quizList}
                model={props.model}
                details={props.model.currentMovieDetails}
            />
            </div>
        </div>
    )


}

//[{ user: "hasti", score: 45 },
//{ user: "danika", score: 145 }, { user: "amir", score: 100005 }, { user: "vlad", score: 455 }]