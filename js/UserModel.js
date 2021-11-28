class UserModel {
    constructor(questionNumber = 0) {
        this.setQuestionNumber(questionNumber)
    }

    setQuestionNumber(x) {
        if (x < 5)
            this.numberOfQuestion = x
        else
            throw "More than 10 questions"
    }






}