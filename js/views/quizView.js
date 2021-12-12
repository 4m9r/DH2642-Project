function QuizView(props) {

    // console.log(params.details)
    if (props.model.quizState === true)
        return <div>
            good job you did it your score is 0 <br />

            <button onClick={() => {
                window.location.hash = "#search";
            }
            }>
                Back to the main page
            </button>
        </div>

    return (
        <div>
            <fieldset>
                <legend>Question1</legend>
                <input type="radio" name="action" id="track" value="track" /><label for="track">ooption1</label><br />
                <input type="radio" name="action" id="event" value="event" /><label for="event">ooption1</label><br />
                <input type="radio" name="action" id="message" value="message" /><label for="message">ooption1</label><br />
                <input type="radio" name="action" id="message" value="message" /><label for="message">ooption1</label><br />
            </fieldset>

            <fieldset>
                <legend>Question2</legend>
                <input type="radio" name="action1" id="track" value="track" /><label for="track">ooption1</label><br />
                <input type="radio" name="action1" id="event" value="event" /><label for="event">ooption1</label><br />
                <input type="radio" name="action1" id="message" value="message" /><label for="message">ooption1</label><br />
                <input type="radio" name="action1" id="message" value="message" /><label for="message">ooption1</label><br />
            </fieldset>

            <fieldset>
                <legend>Question2</legend>
                <input type="radio" name="action2" id="track" value="track" /><label for="track">ooption1</label><br />
                <input type="radio" name="action2" id="event" value="event" /><label for="event">ooption1</label><br />
                <input type="radio" name="action2" id="message" value="message" /><label for="message">ooption1</label><br />
                <input type="radio" name="action2" id="message" value="message" /><label for="message">ooption1</label><br />
            </fieldset>


            <fieldset>
                <legend>Question3</legend>
                <input type="radio" name="action3" id="track" value="track" /><label for="track">ooption1</label><br />
                <input type="radio" name="action3" id="event" value="event" /><label for="event">ooption1</label><br />
                <input type="radio" name="action3" id="message" value="message" /><label for="message">ooption1</label><br />
                <input type="radio" name="action3" id="message" value="message" /><label for="message">ooption1</label><br />
            </fieldset>


            <fieldset>
                <legend>Question4</legend>
                <input type="radio" name="action4" id="track" value="track" /><label for="track">ooption1</label><br />
                <input type="radio" name="action4" id="event" value="event" /><label for="event">ooption1</label><br />
                <input type="radio" name="action4" id="message" value="message" /><label for="message">ooption1</label><br />
                <input type="radio" name="action4" id="message" value="message" /><label for="message">ooption1</label><br />
            </fieldset>

            <fieldset>
                <legend>Question5</legend>
                <input type="radio" name="action5" id="track" value="track" /><label for="track">ooption1</label><br />
                <input type="radio" name="action5" id="event" value="event" /><label for="event">ooption1</label><br />
                <input type="radio" name="action5" id="message" value="message" /><label for="message">ooption1</label><br />
                <input type="radio" name="action5" id="message" value="message" /><label for="message">ooption1</label><br />
            </fieldset>

            <button onClick={() => {
                props.model.setStateOfQuize()
            }
            }>
                Finish
            </button>
        </div >
    )
}


// function btnName(x) {
//     console.log(x)
//     if (x === 2)
//         return "Finish"
//     else
//         return "Next"
// }


{/* <div>
                    <span>Quiz about {params.details.title} <br /> </span>
                    <span> {params.quizData[params.model.numberOfQuestion].Question} </span>
                    <div>
                        <input type="radio" id="o1" name="fav_language" value="HTML" />
                        <label for="o1">{eval(params.quizData[params.model.numberOfQuestion].option1)}</label>
                        <button >{eval(params.quizData[params.model.numberOfQuestion].option1)}</button>
                        <button>{params.quizData[params.model.numberOfQuestion].option2}</button>
                        <button>{params.quizData[params.model.numberOfQuestion].option3}</button>
                        <button>{params.quizData[params.model.numberOfQuestion].option4}</button>

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
                </div> */}