let loadingFromFirebase = false;

function persistModel(model) {
    const auth = firebase.auth();
    model.addObserver(function () {
        if (loadingFromFirebase)
            return;
        if (auth.currentUser) {
            firebase.database().ref("user").child(auth.currentUser.uid).set({  // object literal
                currentMovie: model.currentMovie,
                username: model.username,
                quizState: model.quizState,
                totalScore: model.totalScore,
                userID: model.userID,
                userNumber: model.userNumber,
                profilePic: model.profilePic,
                favourites: model.favourites,
                userNumber: model.userNumber

            });
            if (model.userNumber !== null)
                firebase.database().ref("learderboard").child(model.userNumber).set({
                    username: model.username,
                    totalScore: model.totalScore
                })
            if (model.totalUser !== null && model.totalUser !== 0)
                firebase.database().ref("totalUser").set({
                    total: model.totalUser

                })
        }
    });

    if (auth.currentUser)
        firebase.database().ref("user").child(auth.currentUser.uid).once("value", function (data) {
            loadingFromFirebase = true;
            try {
                if (data.val()) {
                    model.setCurrentMovie(data.val().currentMovie || null);
                    model.setUser(data.val().userID || null,
                        data.val().username || null)
                    model.setUserNumber(data.val().userNumber || 0)
                    model.setUserTotalScore(data.val().totalScore || 0)
                    model.setQuiz(data.val().quizState || [])
                    model.setProfilePic(data.val().profilePic || "https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg")
                    model.setFavourites(data.val().favourites || [])
                    model.setUserNumber(data.val().userNumber || null)

                }
            }
            catch (e) {
                console.log(e);
            }
            loadingFromFirebase = false;
        })



    firebase.database().ref("learderboard").on("value", function (data) {
        loadingFromFirebase = true;
        try {
            if (data.val())
                model.setLeaderboard(data.val() || []);
        }
        catch (e) {
            console.log(e)
        }
        loadingFromFirebase = false;
    });

    firebase.database().ref("totalUser").on("value", function (data) {
        loadingFromFirebase = true;
        try {
            if (data.val())
                model.setTotalUser(data.val().total || null);
        }
        catch (e) {
            console.log(e)
        }
        loadingFromFirebase = false;
    });

    firebase.database().ref('/user/').once('value').then(function (snapshot) {
        snapshot.forEach(function (childNodes) {
            model.addToUsers(childNodes.val());
        })

    });







}