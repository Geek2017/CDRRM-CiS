$(document).ready(function() {

    firebase.auth().onAuthStateChanged(function(user) {
        var ref = firebase.database().ref("users");
        ref.orderByChild("email").equalTo(user.email).once("child_added", function(snapshot) {
            console.log('users data', snapshot.val())

            if (snapshot.val().role) {
                if (snapshot.val().role === 0) {

                } else if (snapshot.val().role === 1) {

                } else if (snapshot.val().role === 2) {

                } else if (snapshot.val().role === 3) {

                } else if (snapshot.val().role === 4) {

                }

            }

        });
        if (!user) {
            window.location.href = './login.html';
        } else {
            if (!user.emailVerified) {
                window.location.href = './login.html';
            }
        }
        var user = firebase.auth().currentUser;
        console.log(user)

        $('#displayname').text(user.displayName);
    })
})