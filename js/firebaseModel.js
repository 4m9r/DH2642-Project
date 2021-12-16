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
                userNumber: model.userNumber
            });
            firebase.database().ref("learboard").child(model.userNumber).set({
                username: model.username,
                totalScore: model.totalScore
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
                }
            }
            catch (e) {
                console.log(e);
            }
            loadingFromFirebase = false;
        })


    firebase.database().ref('/user/').once('value').then(function (snapshot) {
        snapshot.forEach(function (childNodes) {
            model.addToUsers(childNodes.val());
        })

    })





}