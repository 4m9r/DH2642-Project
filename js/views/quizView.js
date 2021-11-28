function QuizView(params) {
    if (params.model.numberOfQuestion === 3)
        return <div>
            good job you did it your score is 0 you db
        </div>

    return (

        <div>
            <div>
                <span> {params.data[params.model.numberOfQuestion].Question} </span>
                <div>
                    <button >option1</button>
                    <button>option2</button>
                    <button>option3</button>
                    <button>option4</button>

                </div>
                <div>
                    <button disabled={params.model.numberOfQuestion == 0} onClick={() =>
                        params.model.setQuestionNumber(params.model.numberOfQuestion - 1)}>
                        Privous
                    </button>
                    <button onClick={() =>
                        params.model.setQuestionNumber(params.model.numberOfQuestion + 1)}>
                        {
                            btnName(params.model.numberOfQuestion)
                        }
                    </button>
                </div>
            </div>

            )


        </div >
    )
}


function btnName(x) {
    console.log(x)
    if (x === 2)
        return "Finish"
    else
        return "Next"
}
