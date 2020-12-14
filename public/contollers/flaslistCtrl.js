angular.module('newApp').controller('flaslistCtrl', function($firebaseArray, $scope, $http, $timeout) {

    var ref = firebase.database().ref('/deped/flas');
    var ref2 = firebase.database().ref('/deped/flas');

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
    $scope.printit = function(users) {
        // document.getElementById("sum").innerHTML = users.total;
        // document.getElementById("sum2").innerHTML = users.total2;
        // document.getElementById("sum3").innerHTML = users.total3;

        var dateObj = new Date();
        var month = dateObj.getUTCMonth() + 1; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();

        var hr = dateObj.getHours();
        // var hr = (hr + 24 - 2) % 24;
        $scope.mid = 'am';
        if (hr == 0) { //At 00 hours we need to show 12 am
            hr = 12;
        } else if (hr > 12) {
            hr = hr % 12;
            $scope.mid = 'pm';
        }
        var mins = dateObj.getMinutes();
        var time = dateObj.getTime();

        $scope.datetoday = month + "/" + day + "/" + year;
        $scope.time = hr;
        $scope.time2 = time;
        for (let index = 0; index < $scope.data.length; index++) {
            // console.log($scope.cfs[index].key)
            // console.log(users.key)
            if (users.key == $scope.data[index].key) {
                // console.log($scope.cfs[index])
                $scope.usersClicked = $scope.data[index];
                // console.log($scope.usersClicked.needs)
            }

        }


        $scope.clickedUser = users;
        id = users;
        // document.getElementById("editDateOfDecampment").value = users.dateOfDecampment;
        // document.getElementById("editDateOfEvacuation").value = users.dateOfEvacuation;

        console.log($scope.clickedUser)


        $('#printit').modal('show');
        setTimeout(function() {
            // document.getElementById("btnPrint").onclick = function() {
            printElement(document.getElementById("printThis"));

            var modThis = document.querySelector("#printSection .modifyMe");
            modThis.appendChild(document.createTextNode(""));

            window.print();



            function printElement(elem) {


                var domClone = elem.cloneNode(true);

                var $printSection = document.getElementById("printSection");

                if (!$printSection) {
                    var $printSection = document.createElement("div");
                    $printSection.id = "printSection";
                    document.body.appendChild($printSection);
                }

                $printSection.innerHTML = "";

                $printSection.appendChild(domClone);

                $('#printit').modal('hide');

            }


        }, 100);
    };

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
        var ref2 = firebase.database().ref("/deped/flas/" + id.$id);
        ref2.update({
                    division: $('#division2').val(),
                    municipality: $('#municipality2').val(),
                    divisionNo: $('#divisionNo2').val(),
                    municipalityNo: $('#municipalityNo2').val(),
                    schoolNo: $('#schoolNo2').val(),
                    evacCenter: $('#evacCenter2').val(),
                    affectedSchool: $('#affectedSchool2').val(),
                    families: $('#families2').val(),
                    individuals: $('#individuals2').val(),
                    residentLearners: $('#residentLearners2').val(),
                    displacedLearners: $('#displacedLearners2').val(),
                    totalLearners: $('#totalLearners2').val(),
                    residentPersonnel: $('#residentPersonnel2').val(),
                    displacedPersonnel: $('#displacedPersonnel2').val(),
                    evacueePersonnel: $('#evacueePersonnel2').val(),
                    totalPersonnel: $('#totalPersonnel2').val(),
                    totalClassrooms: $('#totalClassrooms2').val(),
                    numClassroom: $('#numClassroom2').val(),
                    neededTLS: $('#neededTLS2').val(),
                    totalTLS: $('#totalTLS2').val(),
                    additionalTLS: $('#additionalTLS2').val()
        })
        .catch(function(error) {
            console.log("Login Failed!", error.message);
            $("#notif").append('<div class="alert alert-danger fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Error</strong> ' + error.message + '</div>');
            setTimeout(function() {
                $("#notif").hide()
            }, 10000);

        });

        // window.location.href = "#ecdlist";

        $("#notif").append('<div class="alert alert-success fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Success</strong> Flood/Landslide Affected Schools Updated !</div>');
        setTimeout(function() {
            $("#notif").hide()
        }, 10000);

        $('#myModal').modal('hide');

    };

    $scope.deleteUser = function() {
        var ref = firebase.database().ref("/deped/flas/" + id.$id);
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