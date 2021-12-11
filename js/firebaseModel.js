function persistModel(model) {
    // let uID = firebase.auth.currentUser;
    let loadingFromFirebase = false;
    model.addObserver(function () {

        if (loadingFromFirebase)
            return;

        firebase.database().ref("user").child("ENbGmOTG0MY3RCskym96V5NYZQH3").child("userModel").set({  // object literal
            nQuestion: model.numberOfQuestion,
            currentMovie: model.currentMovie
        });
    });


    firebase.database().ref("user").child("ENbGmOTG0MY3RCskym96V5NYZQH3").child("userModel").on("value", function (data) {
        try {
            if (data.val()) {
                model.setCurrentMovie(data.val().currentMovie || null)
            }
        }
        catch (e) {
            console.log(e);
        }
    })

    firebase.database().ref("user").child("ENbGmOTG0MY3RCskym96V5NYZQH3").child("username").on("value", function (data) {
        try {
            if (data.val()) {
                model.setUsername(data.val().currentMovie || null);
            }
        }
        catch (e) {
            console.log(e);
        }
    })

    firebase.database().ref("user").child("ENbGmOTG0MY3RCskym96V5NYZQH3/usersList").once("value", function (data) {
        try {
            if (data.val()) {
                model.addToUsersList(data.val().currentMovie || null);
            }
        }
        catch (e) {
            console.log(e);
        }
    })

    firebase.database().ref('/user/ENbGmOTG0MY3RCskym96V5NYZQH3/usersList').once('value').then(function (snapshot) {
        snapshot.forEach(function (childNodes){
            model.addToUsersList(childNodes.val());
        })
       
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


    firebase.database().ref('/friends/').once('value').then(function (snapshot) {
        snapshot.forEach(function (childNodes){
            model.addToFriendList(childNodes.val());
        })
       
      })



    
    

}