function persistModel(model) {

    let loadingFromFirebase = false;
    model.addObserver(function () {
        if (loadingFromFirebase)
            return;
        firebase.database().ref("userModel").set({  // object literal
            nQuestion: model.numberOfQuestion,
            currentMovie: model.currentMovie
        });
    });


    firebase.database().ref("userModel").on("value", function (data) {
        try {
            if (data.val()) {
                model.setCurrentMovie(data.val().currentMovie || null)
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

