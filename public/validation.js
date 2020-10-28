firebase.auth().onAuthStateChanged(function(user) {
    console.log(user)
    if (user) {
        $('#email').val(user.email)
        $('#fullname').val(user.displayName)
            // testsave();
    } else {
        $("#notif").append('<div class="alert alert-danger fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Error</strong> Firebase Error contact your administrator !</div>');
        setTimeout(function() {
            $("#notif").hide()
        }, 10000);
    }


})

function testsave() {
    var uid = firebase.database().ref().child('users').push().key;

    var data = {
        email: $('#email').val(),
        fullname: $('#fullname').val(),
        role: '1'
    }

    var updates = {};
    updates['/users/' + uid] = data;
    firebase.database().ref().update(updates);

}



$('#login-form').on('submit', function(e) {
    e.preventDefault();

    var obj = [];

    var ref = firebase.database().ref("users");
    ref.orderByChild("email").equalTo($('#email').val()).once("child_added", function(snapshot) {

        var data = {
            email: $('#email').val(),
            fullname: $('#fullname').val(),
            role: $('#agency').val()
        }
        firebase.database().ref().child('users').push()
        var updates = {};

        updates['/users/' + snapshot.key] = data;
        firebase.database().ref().update(updates);

        console.log('old', updates);
        obj.push(updates);
        window.location.href = "./"
    });


    setTimeout(function() {
        if (obj.length === 0) {
            console.log(obj.length)
            var data = {
                email: $('#email').val(),
                fullname: $('#fullname').val(),
                role: $('#agency').val()
            }

            var uid = firebase.database().ref().child('chart_of_accounts').push().key;
            var updates = {};

            updates['/users/' + uid] = data;
            firebase.database().ref().update(updates);
            console.log('new');
            window.location.href = "./"
        }
    }, 2000);
})