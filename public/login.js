$('#login-form').on('submit', function(e) {
    e.preventDefault();


    if ($('#email').val() != '' && $('#password').val() != '') {
        //login the user
        var data = {
            email: $('#email').val(),
            password: $('#password').val()
        };
        firebase.auth().signInWithEmailAndPassword(data.email, data.password)
            .then(function(authData) {
                auth = authData;
                if (authData.emailVerified) {
                    window.location.replace("./");
                    console.log(authData);
                } else {
                    alert('email not verified, please check your email for confirmation');
                }
            })
            .catch(function(error) {
                console.log("Login Failed!", error.message);
                alert(error.message + ' Check your input');

            });
    }
});

firebase.auth().onAuthStateChanged(function(user) {

    if (user) { // if already logged in
        if (user.emailVerified) {
            window.location.href = './';
        } else {
            alert('Account not yet verify check your email!')
        }
    }
});

/*******************\
 * init Login UI *
\*******************/

// FirebaseUI config.
var uiConfig = {
    'signInSuccessUrl': false,
    'signInOptions': [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    // Terms of service url.
    'tosUrl': false,
};
// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);