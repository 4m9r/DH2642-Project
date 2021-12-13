const auth = firebase.auth();

function signUp(model) {
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let username = document.getElementById("username");
  const promise = auth.createUserWithEmailAndPassword(email.value, password.value).then(() => {

    let user = auth.currentUser;

    //let databaseref = firebase.database().ref();
    // let user_data = {
    //   username: username
    //   //useruid: user.uid
    // }
    //model.setUsername(username.value);
   // model.setUserID(user.uid);

   model.setUser(user.uid,username.value);
    console.log(model)
    // firebase.database().ref("users").child(user.uid).set(user_data);
    //firebase.database().ref("film-buff-33fbc-default-rtdb").child("user/" + user.uid).set(user_data); 
    //firebase.database().ref("user").child(user.uid).set(user_data); 

    //firebase.database().ref("user").child().set(user.uid);

    //firebase.database().ref().child('user/' + user.uid).set(user_data);
    //databaseref("users").child(user.uid).set(user_data);
    //databaseref.child('user/' + user.uid).set(user_data); 
  });
  promise.catch(e => alert(e.message));


}

function logIn() {
  let email = document.getElementById("email");
  let password = document.getElementById("password");

  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));


}

function signOut() {
  auth.signOut();

}

auth.onAuthStateChanged(function (user) {
  if (user) {
    let email = user.email;
    window.location.hash = "#search";
  }
  else {
    alert("No such user");
  }
});
