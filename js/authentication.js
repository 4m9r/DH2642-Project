const auth = firebase.auth();

function signUp(model) {
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let username = document.getElementById("username");
  const promise = auth.createUserWithEmailAndPassword(email.value, password.value).then(userCredential => {

    let user = userCredential.user;
    model.clearModel();

    model.setUser(user.uid, username.value);
    model.setUserNumber(model.totalUser);
    model.setTotalUser(Number(model.totalUser) + 1);


  });
  promise.catch(e => alert(e.message));


}

function logIn(model) {
  let email = document.getElementById("emaillog");
  let password = document.getElementById("passwordlog");

  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));
}

function signOut() {
  auth.signOut();

}

