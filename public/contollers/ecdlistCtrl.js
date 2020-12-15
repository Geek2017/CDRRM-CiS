angular.module('newApp').controller('ecdlistCtrl', function($firebaseArray, $scope, $http, $timeout) {


    $scope.currentPage = 0;
    $scope.pageSize = 10;
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