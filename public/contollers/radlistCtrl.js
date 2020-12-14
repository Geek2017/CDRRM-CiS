angular.module('newApp').controller('radlistCtrl', function ($firebaseArray, $scope, $http, $timeout) {

    var ref = firebase.database().ref('/cswdo/rad');
    var ref2 = firebase.database().ref('/cswdo/rad');

    var test = [];
    var test2 = [];

    var acc = document.getElementsByClassName("accordion");
    var i;

    var accomodated2, host2, role, id;
    var totalIndex;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
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
    ref.once('value', function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
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



    $scope.selectUser = function (users) {
        // console.log(users);

        $scope.clickedUser = users;
        id = users;
        document.getElementById("date").value = users.date;
        // document.getElementById("editDateOfEvacuation").value = users.dateOfEvacuation;
        $('#myModal').modal('show');
    };

    $scope.selectUser2 = function (users) {
        console.log(users.$id);
        $scope.clickedUser = users;
        id = users;
        $('#myModal2').modal('show');
    };

    $scope.updateUser = function () {
        var ref2 = firebase.database().ref("/cswdo/rad/" + id.$id);
        ref2.update({
                date: $('#date').val(),
                evacCenter: $scope.clickedUser.evacCenter,
                items: $scope.clickedUser.items,
                noOfEvacuess: $scope.clickedUser.noOfEvacuess,
                quantity1: $scope.clickedUser.quantity1,
                noOfVolunteers: $scope.clickedUser.noOfVolunteers,
                quantity2: $scope.clickedUser.quantity2,
                total: $scope.clickedUser.total,
                delivered: $scope.clickedUser.delivered
            })
            .catch(function (error) {
                console.log("Login Failed!", error.message);
                $("#notif").append('<div class="alert alert-danger fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Error</strong> ' + error.message + '</div>');
                setTimeout(function () {
                    $("#notif").hide()
                }, 10000);

            });

        // window.location.href = "#ecdlist";

        $("#notif").append('<div class="alert alert-success fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Success</strong> Data had been save!.</div>');
        setTimeout(function () {
            window.location.href = "#/"
            window.location.href = "#radlist"
        }, 1500);

        $('#myModal').modal('hide');

    };

    $scope.deleteUser = function () {
        var ref = firebase.database().ref("cswdo/rad/" + id.$id);
        ref.remove()
            .catch(function (error) {
                console.log("Login Failed!", error.message);
                $("#notif").append('<div class="alert alert-danger fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Error</strong> ' + error.message + '</div>');
                setTimeout(function () {
                    $("#notif").hide()
                }, 10000);

            });;

        // $("#notif").show();
        // window.location.href = "#ecdlist";

        $("#notif").append('<div class="alert alert-success fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Success</strong> Deleted !</div>');
        setTimeout(function () {
            window.location.href = "#/"
            window.location.href = "#radlist"
        }, 1500);


        $('#myModal2').modal('hide');
    };

    $scope.close = function () {
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

    $scope.printit = function (users) {
        // document.getElementById("sum").innerHTML = users.total;
        // document.getElementById("sum2").innerHTML = users.total2;
        // document.getElementById("sum3").innerHTML = users.total3;


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

        console.log($scope.clickedUser.operationfor)


        $('#printit').modal('show');
        setTimeout(function () {
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



});