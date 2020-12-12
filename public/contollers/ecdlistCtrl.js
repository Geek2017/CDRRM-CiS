angular.module('newApp').controller('ecdlistCtrl', function($firebaseArray, $scope, $http, $timeout) {


    $scope.currentPage = 0;
    $scope.pageSize = 5;
    $scope.data = [];

    $scope.numberOfPages = () => {
        return Math.ceil(
            $scope.data.length / $scope.pageSize
        );
    }

    for (var i = 0; i < 10; i++) {
        $scope.data.push(`Question number ${i}`);
    }


    var ref = firebase.database().ref('/deped/ecd');
    var ref2 = firebase.database().ref('/deped/ecd');

    var test = [];
    var test2 = [];

    var acc = document.getElementsByClassName("accordion");
    var i;

    var accomodated2, host2, role, id;
    var totalIndex;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }

    $scope.data = $firebaseArray(ref);
    ref.once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            // var childKey = childSnapshot.key();
            var childData = childSnapshot.val();
            // $scope.data = childSnapshot.val();
            // console.log(childSnapshot.val());

            // address = childSnapshot.child('address').val();
            // country = childSnapshot.child('country').val();
            // number = childSnapshot.child('number').val();
            // email = childSnapshot.child('email').val();
            // role = childSnapshot.child('role').val();

        })
    });

    $scope.selectUser = function(users) {
        // console.log(users);

        $scope.clickedUser = users;
        id = users;
        document.getElementById("editDateOfDecampment").value = users.dateOfDecampment;
        document.getElementById("editDateOfEvacuation").value = users.dateOfEvacuation;
        $('#myModal').modal('show');
    };

    $scope.selectUser2 = function(users) {
        console.log(users.$id);
        $scope.clickedUser = users;
        id = users;
        $('#myModal2').modal('show');
    };

    $scope.updateUser = function() {
        var ref2 = firebase.database().ref("/deped/ecd/" + id.$id);
        ref2.update({
                municipality: $('#editMunicipality').val(),
                host: $('#editHost').val(),
                accomodated: $('#editAccomodated').val(),
                families: $('#editFamilies').val(),
                individuals: $('#editIndividuals').val(),
                classrooms: $('#editClassrooms').val(),
                dateOfEvacuation: $('#editDateOfEvacuation').val(),
                dateOfDecampment: $('#editDateOfDecampment').val(),
                remarks: $('#editRemarks').val()
            })
            .catch(function(error) {
                console.log("Login Failed!", error.message);
                $("#notif").append('<div class="alert alert-danger fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Error</strong> ' + error.message + '</div>');
                setTimeout(function() {
                    $("#notif").hide()
                }, 10000);

            });

        // window.location.href = "#ecdlist";

        $("#notif").append('<div class="alert alert-success fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Success</strong> Evacuation School Site Updated !</div>');
        setTimeout(function() {
            $("#notif").hide()
        }, 10000);

        $('#myModal').modal('hide');

    };

    $scope.deleteUser = function() {
        var ref = firebase.database().ref("deped/ecd/" + id.$id);
        ref.remove()
            .catch(function(error) {
                console.log("Login Failed!", error.message);
                $("#notif").append('<div class="alert alert-danger fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Error</strong> ' + error.message + '</div>');
                setTimeout(function() {
                    $("#notif").hide()
                }, 10000);

            });;

        // $("#notif").show();
        // window.location.href = "#ecdlist";

        $("#notif").append('<div class="alert alert-success fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Success</strong> Deleted !</div>');
        setTimeout(function() {
            $("#notif").hide()
        }, 10000);


        $('#myModal2').modal('hide');
    };

    $scope.close = function() {
        $('#myModal').modal('hide');
        $('#myModal2').modal('hide');
    };

}).filter('startFrom', function() {
    return function(input, start) {
        if (!input || !input.length) { return; }
        start = +start; //parse to int
        return input.slice(start);
    }
})