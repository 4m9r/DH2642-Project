function QuizView(params) {

    return (
        <div>{
            params.data.map(e => {
                return <div>
                    <span> {e.Question} </span><div>
                        <button>option1</button>
                        <button>option2</button>
                        <button>option3</button>
                        <button>option4</button>
                    </div>
                </div>

            })

        }
        </div >
    )
}