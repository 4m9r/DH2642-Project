class UserModel {
    constructor(questionNumber = 0, currentMovie = null, userID = null, username = null, profilePic = null, usersList = [], friendsList = [], quizList = [], userData = [], observers = []) {
        this.setQuestionNumber(questionNumber);
        this.currentMovie = currentMovie;
        this.userID = userID;
        this.username = username;
        this.profilePic = profilePic;
        this.usersList = usersList;
        this.friendsList = friendsList;
        this.userData = userData;
        this.quizList = quizList;
        this.observers = observers;
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

    setUsername(name){
        this.username = name;
    }

    setProfilePic(source){
        this.profilePic = source;
        console.log("source is set to: " + source)
    }

    addToUsersList(list){
        this.usersList = [...this.usersList, list];
    }

    addToFriendList(name){
        this.friendsList = [...this.friendsList, name];
    }

    setCurrentMovie(id) {
        if (this.currentMovie === id)
            return;


        this.currentMovie = id;

        this.currentMovieDetails = null; this.currentMovieError = null;

        this.notifyObservers();

        if (this.currentMovie) {
            MovieSource.getMovieDetails(id)
                .then(dt => { if (this.currentMovie === id) this.currentMovieDetails = dt, this.notifyObservers(); })
                .catch(er => { if (this.currentMovie === id) this.currentMovieError = er, this.notifyObservers(); })

        }
    }


    addObserver(callback) {
        this.observers = [...this.observers, callback]
    }

    removeObserver(callback) {
        this.observers = this.observers.filter(obs => obs !== callback)
    }

    notifyObservers() {
        setTimeout(() => {
            try {
                this.observers.forEach(cb => cb.call())
            }
            catch (error) {
                console.log(error)
            }
        }, 0);
    }



}