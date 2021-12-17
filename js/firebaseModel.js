let loadingFromFirebase = false;

// function fetchModel(model, onSuccess) {
//     const auth = firebase.auth();
//     if (auth.currentUser)
//         firebase.database().ref("user").child(auth.currentUser.uid).once("value", function (data) {
//             loadingFromFirebase = true;
//             try {
//                 if (data.val()) {
//                     model.setCurrentMovie(data.val().currentMovie || null);
//                     model.setUser(data.val().userID || null,
//                         data.val().username || null)
//                     model.setUserNumber(data.val().userNumber || 0)
//                     model.setQuizState(data.val().quizState || [])
//                     model.setUserTotalScore(data.val().totalScore || 0)
//                     onSuccess();
//                 }
//             }
//             catch (e) {
//                 console.log(e);
//             }
//             loadingFromFirebase = false;
//         })
// }

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
                // profilePic: model.profilePic,
                // favourites: model.favourites,
                // currentUser: model.currentUSer,
                //profileDescription: model.profileDescription,
            });
            firebase.database().ref("learderboard").child(model.userNumber).set({
                username: model.username,
                totalScore: model.totalScore
            })
            firebase.database().ref("userNumber").set({
                userNumber: model.userNumber

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
                    // model.setProfilePic("https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg" || null)
                    //model.setProfileDesription("Welcome to my page!")
                    // model.addToFavourites(data.val().favourites || null)
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

    firebase.database().ref("userNumber").on("value", function (data) {
        loadingFromFirebase = true;
        try {
            if (data.val())
                model.setUserNumber(data.val().userNumber || []);
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