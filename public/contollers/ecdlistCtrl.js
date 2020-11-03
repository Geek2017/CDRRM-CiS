angular.module('newApp').controller('ecdlistCtrl', function($firebaseArray, $scope, $http, $timeout) {

    var ref = firebase.database().ref('/ecd');
    var ref2 = firebase.database().ref('/ecd');

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
        console.log(users.$id);
        
        $scope.clickedUser = users;
        id = users;
        document.getElementById("editDateOfDecampment").value = users.dateOfDecampment;
        document.getElementById("editDateOfEvacuation").value = users.dateOfEvacuation;
        $('#myModal').modal('show');
    };

    $scope.selectUser2 = function(users) {
        // console.log(users);
        $scope.clickedUser = users;
        id = users;
        $('#myModal2').modal('show');
    };

    $scope.updateUser = function() {
        var ref2 = firebase.database().ref("ecd/" + id.$id);
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

        $('#myModal').modal('hide');

    };

    $scope.deleteUser = function() {
        var ref = firebase.database().ref("ecd/" + id.$id);
        ref.remove();
        $('#myModal2').modal('hide');
    };

    $scope.close = function() {
        $('#myModal').modal('hide');
        $('#myModal2').modal('hide');
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