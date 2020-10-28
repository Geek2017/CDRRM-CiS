$(document).ready(function() {
    pageSetUp();






    $('.chonav').hide()
    $('.depednav').hide()
    $('.brgynav').hide()
    $('.cswdonav').hide()
    $('.cdrrmonav').hide()

    $("ul.li").find(".chonav").css("background-color", "red");

    firebase.auth().onAuthStateChanged(function(user) {

        if (!user) {
            window.location.href = './login.html';
        } else {
            if (!user.emailVerified) {
                window.location.href = './login.html';
            }
        }
        $('#displayname').text(user.displayName);

        var ref = firebase.database().ref("users");
        ref.orderByChild("email").equalTo(user.email).once("child_added", function(snapshot) {
            console.log('users data', snapshot.val())

            if (snapshot.val().role) {
                if (snapshot.val().role == 0) {
                    $('.chonav').show()
                    $('.depednav').show()
                    $('.brgynav').show()
                    $('.cswdonav').show()
                    $('.cdrrmonav').show()
                } else if (snapshot.val().role == 1) {
                    $('.chonav').show()
                } else if (snapshot.val().role == 2) {
                    $('.depednav').show()
                } else if (snapshot.val().role == 3) {
                    $('.brgynav').show()
                } else if (snapshot.val().role == 4) {
                    $('.cswdonav').show()
                } else if (snapshot.val().role == 4) {
                    $('.cdrrmonav').show()
                }

            }

        })
    })
})