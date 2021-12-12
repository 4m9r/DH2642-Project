function persistModel(model) {
    // let uID = firebase.auth.currentUser;
    let loadingFromFirebase = false;
    model.addObserver(function () {

        if (loadingFromFirebase)
            return;

        firebase.database().ref("user").child("ENbGmOTG0MY3RCskym96V5NYZQH3").child("userModel").set({  // object literal
            currentMovie: model.currentMovie,
        });
    });


    firebase.database().ref("user").child("ENbGmOTG0MY3RCskym96V5NYZQH3").child("userModel").on("value", function (data) {
        try {
            if (data.val()) {
                model.setCurrentMovie(data.val().currentMovie || null)
                model.setStateOfQuize(false)
            }
        }
        catch (e) {
            console.log(e);
        }
    })


    firebase.database().ref("question").on("value", function (data) {
        try {
            if (data.val())
                model.setQuizList(data.val())
        }
        catch (e) {
            console.log(e);
        }
    })

}

