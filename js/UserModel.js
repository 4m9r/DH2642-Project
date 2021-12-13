class UserModel {
    constructor(
        questionNumber = 0,
        currentMovie = null,
        userID = null,
        username = null,
        quizState = [],
        profilePic = null,
        usersList = [],
        friendsList = [],
        currentFriend = 'anon',
        quizList = [],
        userData = [],
        observers = [],
        totalScore = 0) {

        //this.setQuestionNumber(questionNumber);
        this.quizState = quizState
        this.currentMovie = currentMovie;
        this.userID = userID;
        this.username = username;
        this.profilePic = profilePic;
        this.usersList = usersList;
        this.friendsList = friendsList;
        this.currentFriend = currentFriend;
        this.userData = userData;
        this.quizList = quizList;
        this.observers = observers;
        this.quizState = quizState;
        this.totalScore = totalScore;
    }

    // setQuestionNumber(x) {
    //     if (x < 5)
    //         this.numberOfQuestion = x;
    //     else
    //         throw "More than 10 questions";
    // }
    setStateOfQuize(obj) {
        this.quizState = [...this.quizState, obj]
    }

    setQuizState(obj) {
        this.quizState = [...this.quizState, obj];
    }
    setUserID(uid) {
        this.userID = uid;
        this.notifyObservers();
    }

    setUsername(name) {
        this.username = name;
        this.notifyObservers();
    }

    setProfilePic(source) {
        this.profilePic = source;
    }

    addToUsersList(list) {
        this.usersList = [...this.usersList, list];
    }

    addToFriendList(name) {
        this.friendsList = [...this.friendsList, name];
    }

    setCurrentFriend(friend) {
        this.currentFriend = friend;
    }

    setCurrentMovie(id) {
        if (this.currentMovie === id)
            return;


        this.currentMovie = id;

        this.currentMovieDetails = null; this.currentMovieError = null;

        this.randomMovieDetails1 = null; this.randomMovieError1 = null;
        this.randomMovieDetails2 = null; this.randomMovieError2 = null;
        this.randomMovieDetails3 = null; this.randomMovieError3 = null;

        this.notifyObservers();

        if (this.currentMovie) {
            MovieSource.getMovieDetails(id)
                .then(dt => { if (this.currentMovie === id) this.currentMovieDetails = dt, this.notifyObservers(); })
                .catch(er => { if (this.currentMovie === id) this.currentMovieError = er, this.notifyObservers(); })

            MovieSource.getRandomMovieDetails(id)
                .then(dt => { if (this.currentMovie === id) this.randomMovieDetails1 = dt, this.notifyObservers(); })
                .catch(er => { if (this.currentMovie === id) this.randomMovieError1 = er, this.notifyObservers(); })
            MovieSource.getRandomMovieDetails(id)
                .then(dt => { if (this.currentMovie === id) this.randomMovieDetails2 = dt, this.notifyObservers(); })
                .catch(er => { if (this.currentMovie === id) this.randomMovieError2 = er, this.notifyObservers(); })
            MovieSource.getRandomMovieDetails(id)
                .then(dt => { if (this.currentMovie === id) this.randomMovieDetails3 = dt, this.notifyObservers(); })
                .catch(er => { if (this.currentMovie === id) this.randomMovieError3 = er, this.notifyObservers(); })

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

    setTotalScore(int) {
        this.totalScore = this.totalScore + int;
    }


}