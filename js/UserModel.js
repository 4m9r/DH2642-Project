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




}