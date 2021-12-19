class UserModel {
    constructor(
        currentMovie = null,
        userID = null,
        username = null,
        profilePic = null,
        quizState = [],
        favourites = [],
        users = [],
        currentFriend = 'anon',
        quizList = [],
        userData = [],
        observers = [],
        totalScore = 0,
        totalUser = 0,
        leaderboardData = [],
        userNumber = null) {

        this.quizState = quizState
        this.currentMovie = currentMovie;
        this.userID = userID;
        this.username = username;
        this.profilePic = profilePic;
        this.favourites = favourites;
        this.users = users;
        this.currentFriend = currentFriend;
        this.userData = userData;
        this.quizList = quizList;
        this.observers = observers;
        this.quizState = quizState;
        this.totalScore = totalScore;
        this.totalUser = totalUser;
        this.leaderboardData = leaderboardData;
        this.userNumber = userNumber;
    }

    // Use with great care
    clearModel() {
        this.currentMovie = null;
        this.userID = null;
        this.username = null;
        this.quizState = [];
        this.profilePic = null;
        this.favourites = [];
        this.users = [];
        this.currentFriend = 'anon';
        this.quizList = [];
        this.userData = [];
        this.totalScore = 0;
        this.userNumber = null;
        this.notifyObservers();
    }

    setLeaderboard(data) {
        this.leaderboardData = data;
    }

    setQuizState(obj) {
        this.quizState = [...this.quizState, obj];
        this.notifyObservers();
    }
    setQuiz(array) {
        this.quizState = [...this.quizState, ...array]
        this.notifyObservers();
    }
    setUserTotalScore(score) {
        this.totalScore = this.totalScore + score;
        this.notifyObservers();
    }


    setUserNumber(number) {
        if (this.userNumber == null)
            this.userNumber = number;
        this.notifyObservers();
    }
    setTotalUser(num) {
        this.totalUser = num;
    }

    setUser(uid, name) {
        this.userID = uid;
        this.username = name;
        this.notifyObservers();
    }

    // fetchUserData() {
    //     // If model was updated, notify obs
    //     fetchModel(this, () => this.notifyObservers());
    // }



    setProfilePic(source) {
        this.profilePic = source;
        this.notifyObservers();
    }

    setFavourites(movie) {
        this.favourites = movie;
        this.notifyObservers();
    }

    addToFavourites(movie) {
        if (this.favourites.includes(movie)) {
            this.notifyObservers();
            return;
        }
        else {
            this.favourites = [...this.favourites, movie];
            this.notifyObservers();
        }
    }

    removeFromFavList(movie) {
        this.favourites = this.favourites.filter(d => d.id !== movie.id);
        this.notifyObservers();
    }

    addToUsers(name) {
        this.users = [...this.users, name];
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