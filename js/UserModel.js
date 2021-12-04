class UserModel {
    constructor(questionNumber = 0, currentMovie = null, userID = null, usersList = [], quizList = [], userData = []) {
        this.setQuestionNumber(questionNumber);
        this.currentMovie = currentMovie;
        this.userID = userID;
        this.usersList = usersList;
        this.userData = userData;
        this.quizList = quizList;
    }

    setQuestionNumber(x) {
        if (x < 5)
            this.numberOfQuestion = x;
        else
            throw "More than 10 questions";
    }

    setQuizList(x) {
        this.quizList = x;
    }
    setCurrentMovie(id) {
        if (this.currentMovie === id)
            return;


        this.currentMovie = id;

        this.currentMovieDetails = null; this.currentMovieError = null;

        //     this.notifyObservers();

        if (this.currentMovie) {
            MovieSource.getMovieDetails(id)
                .then(dt => { if (this.currentMovie === id) this.currentMovieDetails = dt, console.log(this.currentMovieDetails) }) // {TODO} add observer in the end of it
                .catch(er => { if (this.currentMovie === id) this.currentMovieError = er }) //  {TODO}add observer in the end of it


        }

    }



}