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
                    $("#notif").append('<div class="alert alert-danger fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Error</strong> Email Not Verified !</div>');
                    setTimeout(function() {
                        $("#notif").hide()
                    }, 10000);
                }
            })
            .catch(function(error) {
                console.log("Login Failed!", error.message);
                $("#notif").append('<div class="alert alert-danger fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Error</strong> ' + error.message + '</div>');
                setTimeout(function() {
                    $("#notif").hide()
                }, 10000);

            });
    }
});

firebase.auth().onAuthStateChanged(function(user) {

    if (user) {
        var umail = user.email;
        var uid = firebase.database().ref().child('users').push().key;
        var data = {
            role: "0"
        }
        var updates = {};
        updates['/users/' + umail] = data;
        firebase.database().ref().update(updates);
        console.log(updates)

        if (user.emailVerified) {

        }
    }
});

/*******************\
 * init Login UI *
\*******************/

// FirebaseUI config.
var uiConfig = {
    'signInSuccessUrl': "validation.html",
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