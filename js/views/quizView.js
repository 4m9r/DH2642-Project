function QuizView(props) {

    let scoreCounter = 0;

    if (props.model.quizState.find((e) => e.movie === props.model.currentMovie))
        return <div class="finishMassage">
            Good job you! Your score for this movie is
            {" " + (props.model.quizState.find((e) => e.movie === props.model.currentMovie)).score} <br />

            <button class="redirectButton" onClick={() => {
                window.location.hash = "#search";
            }
            }>
                Back to the main page
            </button>
        </div>

    if (props.model.currentMovieDetails.similars == null)
        return <div class="finishMassage">
            This movie does not have a quiz <br />

            <button class="redirectButton" onClick={() => {
                window.location.hash = "#search";
            }
            }>
                Back to the main page
            </button>
        </div>

    let similar1 = props.model.currentMovieDetails.similars[0]
    let similar2 = props.model.currentMovieDetails.similars[7]
    let similar3 = props.model.currentMovieDetails.similars[6]

    let theMovie = props.model.currentMovieDetails;

    if (similar1 === undefined || similar2 === undefined || similar3 === undefined || theMovie.year === undefined ||
        theMovie.directors === "" || similar1.directors === "" || similar2.directors === "" || similar3.directors === "")
        return <div class="finishMassage">
            This movie does not have a quiz <br />

            <button class="redirectButton" onClick={() => {
                window.location.hash = "#search";
            }
            }>
                Back to the main page
            </button>
        </div>


    return (
        <div class="quizSection">
            <p> Be aware that you can only take one quiz per movie</p><br />
            <fieldset>
                <legend>Who was the director of the movie "{props.model.currentMovieDetails.title}"?</legend>
                <input type="radio" name="q1" id="q1o1" /><label for="q1o1">{
                    (similar1.directors == !theMovie.directors) ? similar1.directors : false || "Ethan Coen"}</label><br />
                <input type="radio" name="q1" id="q1o2" /><label for="q1o2">{theMovie.directors}</label><br />
                <input type="radio" name="q1" id="q1o3" /><label for="q1o3">{
                    (similar2.directors == !theMovie.directors) ? similar2.directors : false ||
                        "Martin Scorsese"}</label><br />
                <input type="radio" name="q1" id="q1o4" /><label for="q1o4">{
                    (similar3.directors == !theMovie.directors) ? similar3.directors : false
                        || "David Lynch"}</label><br />
            </fieldset>

            <fieldset>
                <legend>In what year did the movie "{props.model.currentMovieDetails.title}" get released?</legend>
                <input type="radio" name="q2" id="q2o1" /><label for="q2o1">{parseInt(theMovie.year) + 5}</label><br />
                <input type="radio" name="q2" id="q2o2" /><label for="q2o2">{parseInt(theMovie.year) - 10}</label><br />
                <input type="radio" name="q2" id="q2o3" /><label for="q2o3">{parseInt(theMovie.year)}</label><br />
                <input type="radio" name="q2" id="q2o4" /><label for="q2o4">{parseInt(theMovie.year) - 15}</label><br />
            </fieldset>

            <fieldset>
                <legend>Who are the stars of the movie "{props.model.currentMovieDetails.title}" </legend>
                <input type="radio" name="q3" id="q3o1" /><label for="q3o1">{similar1.stars}</label><br />
                <input type="radio" name="q3" id="q3o2" /><label for="q3o2">{similar2.stars}</label><br />
                <input type="radio" name="q3" id="q3o3" /><label for="q3o3">{similar3.stars}</label><br />
                <input type="radio" name="q3" id="q3o4" /><label for="q3o4"> {theMovie.stars}</label><br />
            </fieldset>


            <fieldset>
                <legend>What Imdb score did the movie"{props.model.currentMovieDetails.title}" get? </legend>
                <input type="radio" name="q4" id="q4o1" /><label for="q4o1">{parseInt(theMovie.imDbRating)}</label><br />
                <input type="radio" name="q4" id="q4o2" /><label for="q4o2">{parseInt(theMovie.imDbRating) + 0.5}</label><br />
                <input type="radio" name="q4" id="q4o3" /><label for="q4o3">{parseInt(theMovie.imDbRating) - 1}</label><br />
                <input type="radio" name="q4" id="q4o4" /><label for="q4o4">{parseInt(theMovie.imDbRating) - 2}</label><br />
            </fieldset>


            <fieldset>
                <legend>Which set of genres describe the movie "{props.model.currentMovieDetails.title}" best? </legend>
                <input type="radio" name="q5" id="q5o1" /><label for="q5o1">{similar3.genres + ", Musical"}</label><br />
                <input type="radio" name="q5" id="q5o2" /><label for="q5o2">{similar1.genres + ", Comedy"}</label><br />
                <input type="radio" name="q5" id="q5o3" /><label for="q1o3">{similar2.genres + ", Sci-Fi"}</label><br />
                <input type="radio" name="q5" id="q5o4" /><label for="q1o4">{theMovie.genres}</label><br />
            </fieldset>


            <button class="quizButton" onClick={() => {
                if (document.getElementById("q1o2").checked)
                    scoreCounter = scoreCounter + 10;
                if (document.getElementById("q2o3").checked)
                    scoreCounter = scoreCounter + 10;
                if (document.getElementById("q3o4").checked)
                    scoreCounter = scoreCounter + 10;
                if (document.getElementById("q4o1").checked)
                    scoreCounter = scoreCounter + 10;
                if (document.getElementById("q5o4").checked)
                    scoreCounter = scoreCounter + 10;
                props.model.setUserTotalScore(scoreCounter);
                props.model.setQuizState({ movie: props.model.currentMovie, score: scoreCounter })
            }
            }>
                Finish
            </button>
        </div >
    )
}

