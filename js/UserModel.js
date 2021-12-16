class UserModel {
    constructor(
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
        totalScore = 0,
        userNumber = 0) {

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
        this.userNumber = userNumber;
    }


    setQuizState(obj) {
        this.quizState = [...this.quizState, obj];
        this.notifyObservers();
    }
    setUserNumber(num) {
        this.userNumber = num;
        this.notifyObservers();
    }

    setUser(uid, name) {
        this.userID = uid;
        this.username = name;
        this.userNumber = this.userNumber + 1;
        this.notifyObservers();
    }
    // setUserID(uid) {
    //     this.userID = uid;
    // }

    //setUsername(name) {
    //    this.username = name;
    //}
    setUserTotalScore(score) {
        this.totalScore = this.totalScore + score;
        this.notifyObservers();
    }

    setProfilePic(source) {
        this.profilePic = source;
        this.notifyObservers();
    }

    addToUsersList(list) {
        this.usersList = [...this.usersList, list];
        this.notifyObservers();
    }

    addToFriendList(name) {
        this.friendsList = [...this.friendsList, name];
        this.notifyObservers();
    }

    setCurrentFriend(friend) {
        this.currentFriend = friend;
        this.notifyObservers();
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

    setTotalScore(int) {
        this.totalScore = this.totalScore + int;
        this.notifyObservers();
    }


}