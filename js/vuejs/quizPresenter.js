function QuizPresenter(props) {
    console.log(props.model.quizList)
    return (
        <div class="parent">
            <div class="quizz"><QuizView quizData={props.model.quizList}
                model={props.model} />
                <div class="menue"><MenuView /></div>
            </div>
        </div>
    )


}

//[{ user: "hasti", score: 45 },
//{ user: "danika", score: 145 }, { user: "amir", score: 100005 }, { user: "vlad", score: 455 }]