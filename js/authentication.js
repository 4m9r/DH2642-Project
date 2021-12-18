const auth = firebase.auth();

function signUp(model) {
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let username = document.getElementById("username");
  const promise = auth.createUserWithEmailAndPassword(email.value, password.value).then(userCredential => {

    let user = userCredential.user;
    model.clearModel();
    // firebase.database().ref("user").child(user.uid).set({  // object literal
    //   currentMovie: model.currentMovie,
    //   username: model.username,
    //   quizState: model.quizState,
    //   totalScore: model.totalScore,
    //   userID: model.userID,
    // });

    model.setUser(user.uid, username.value);
    model.setUserNumber(model.totalUser);
    model.setTotalUser(Number(model.totalUser) + 1);


  });
  promise.catch(e => alert(e.message));


}

function logIn() {
  let email = document.getElementById("emaillog");
  let password = document.getElementById("passwordlog");

  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));


}

function signOut() {
  auth.signOut();

}

auth.onAuthStateChanged(function (user) {
  if (user) {
    //let email = user.email;
    window.location.hash = "#search";
  }

});
