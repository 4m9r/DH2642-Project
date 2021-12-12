function persistModel(model) {
    console.log("here")
    let user = firebase.auth().currentUser;
    //let loadingFromFirebase = false;
    model.addObserver(function () {
        console.log("here")

        console.log(model)
        console.log(user.uid)

        // if (loadingFromFirebase)
        //     return;

        firebase.database().ref("user").child(user.uid).child("userModel").set({  // object literal
            currentMovie: model.currentMovie,
            username: model.username
        });
    });


    firebase.database().ref("user").child(user.uid).child("userModel").on("value", function (data) {
        try {
            if (data.val()) {
                model.setCurrentMovie(data.val().currentMovie || null);
                model.setUsername(data.val().username || null)
            }
        }
        catch (e) {
            console.log(e);
        }
    })

    // firebase.database().ref("user").child("ENbGmOTG0MY3RCskym96V5NYZQH3").child("username").on("value", function (data) {
    //     try {
    //         if (data.val()) {
    //                model.setUsername(data.val() || null);
    //         }
    //     }
    //     catch (e) {
    //         console.log(e);
    //     }
    // })

    firebase.database().ref("user").child("ENbGmOTG0MY3RCskym96V5NYZQH3/usersList").once("value", function (data) {
        try {
            data.forEach(function (childNodes) {
                model.addToUsersList(childNodes.val().listname || null);
            })
        }
        catch (e) {
            console.log(e);
        }
    })


    firebase.database().ref('/user/ENbGmOTG0MY3RCskym96V5NYZQH3/profilepic').once('value').then(function (snapshot) {
        model.setProfilePic(snapshot.val());
    })


    // firebase.database().ref("question").on("value", function (data) {
    //     try {
    //         if (data.val())
    //             model.setQuizList(data.val())
    //     }
    //     catch (e) {
    //         console.log(e);
    //     }
    // })


    firebase.database().ref('/friends/').once('value').then(function (snapshot) {
        snapshot.forEach(function (childNodes) {
            model.addToFriendList(childNodes.val());
        })

    })






}