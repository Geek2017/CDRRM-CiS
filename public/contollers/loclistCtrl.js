angular.module('newApp').controller('loclistCtrl', function($firebaseArray, $scope, $http, $timeout) {

    var ref = firebase.database().ref('/deped/loc');
    var ref2 = firebase.database().ref('/deped/loc');

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
        // console.log(users.$id);
        
        $scope.clickedUser = users;
        id = users;
        // document.getElementById("editDateOfDecampment").value = users.dateOfDecampment;
        // document.getElementById("editDateOfEvacuation").value = users.dateOfEvacuation;
        $('#myModal').modal('show');
    };

    $scope.selectUser2 = function(users) {
        // console.log(users);
        $scope.clickedUser = users;
        id = users;

        $('#myModal2').modal('show');
    };

    $scope.selectUser3 = function(users) {
        // console.log(users);
        $scope.clickedUser = users;
        id = users;
        $('#myModal3').modal('show');
    };

    $scope.updateUser = function() {
        var ref2 = firebase.database().ref("/deped/loc/" + id.$id);
        ref2.update({
            municipality: $('#municipality2').val(),
            municipalityNo: $('#municipalityNo2').val(),
            evacCenter: $('#evacCenter2').val(),
            evacCenterNo: $('#evacCenterNo2').val(),
            classroomNo: $('#classroomNo2').val(),
            familiesNo: $('#familiesNo2').val(),
            individualNo: $('#individualNo2').val(),
            personnel: $('#personnel2').val(),
            residentLearners: $('#residentLearners2').val(),
            evacueeLearners: $('#evacueeLearners2').val(),
            affectedSchool: $('#affectedSchool2').val(),
            affectedLearners: $('#affectedLearners2').val(),
            learnerCasualties: $('#learnerCasualties2').val(),
            causeOfDeath: $('#causeOfDeath2').val(),
            affectedTPNum: $('#affectedTPNum2').val(),
            affectedNTPNum: $('#affectedNTPNum2').val(),
            totalDamage: $('#totalDamage2').val(),
            partialMajorDamage: $('#partialMajorDamage2').val(),
            partialMinorDamage: $('#partialMinorDamage2').val(),
            TLSNeededNum: $('#TLSNeededNum2').val(),
            armchairDamage: $('#armchairDamage2').val(),
            tableChairDamage: $('#tableChairDamage2').val(),
            LMDamage: $('#LMDamage2').val(),
            computerDamage: $('#computerDamage2').val(),
            cleanUp: $('#cleanUp2').val(),
            PFA: $('#PFA2').val()
        })

        .catch(function(error) {
            console.log("Login Failed!", error.message);
            $("#notif").append('<div class="alert alert-danger fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Error</strong> ' + error.message + '</div>');
            setTimeout(function() {
                $("#notif").hide()
            }, 10000);

        });

        // window.location.href = "#ecdlist";

        $("#notif").append('<div class="alert alert-success fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Success</strong> Updated !</div>');
        setTimeout(function() {
            $("#notif").hide()
        }, 10000);

        $('#myModal').modal('hide');

    };

    $scope.deleteUser = function() {
        var ref = firebase.database().ref("/deped/loc/" + id.$id);
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
        $('#myModal3').modal('hide');
    };

    // $scope.camalig = $firebaseArray(ref2);
    // ref2.orderByChild("municipality").equalTo("Camalig").once("value")
    // .then(function(snapshot) {
    //     snapshot.forEach(function(childSnapshot2) {
    //         // var childKey = childSnapshot.key();
    //         var childData = childSnapshot2.val();
    //         // $scope.data = childSnapshot.val();
    //         // console.log(childSnapshot2.val());
    //         test.push(childSnapshot2.val());
    //         console.log(test.length)
    //         totalIndex = test.length;

    //     })



    // });

    // ref2.orderByChild("municipality").equalTo("Guinobatan").once("value")
    // .then(function(snapshot) {
    //     snapshot.forEach(function(childSnapshot2) {
    //         // var childKey = childSnapshot.key();
    //         var childData = childSnapshot2.val();
    //         // $scope.data = childSnapshot.val();
    //         // console.log(childSnapshot2.val());
    //         test2.push(childSnapshot2.val());
    //         // console.log(test.length)
    //         totalIndex = test.length;
        

    //     })



    // });

    // setTimeout(() => {
    //     console.log(totalIndex)
    // }, 3000);


    // $scope.camalig = test;
    // $scope.guinobatan = test2;
    // console.log($scope.camalig)


});