angular.module('newApp').controller('dcmlistCtrl', function($firebaseArray, $scope, $http, $timeout) {

    pageSetUp();

    var id;

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

    firebase.database().ref('/cdrmo/dcm/').orderByChild('uid').on("value", function(snapshot) {


        $timeout(function() {
            $scope.$apply(function() {

                var tcol = 0;
                let returnArr = [];
                snapshot.forEach(childSnapshot => {
                    let item = childSnapshot.val();
                    item.key = childSnapshot.key;
                    returnArr.push(item);

                });
                $scope.cfs = returnArr;

                console.log(returnArr)
            });

        }, 100);


    });


    $scope.selectUser = function(users) {



        for (let index = 0; index < $scope.cfs.length; index++) {
            // console.log($scope.cfs[index].key)
            // console.log(users.key)
            if (users.key == $scope.cfs[index].key) {
                // console.log($scope.cfs[index])
                $scope.usersClicked = $scope.cfs[index];
                // console.log($scope.usersClicked.needs)
            }

        }


        $scope.clickedUser = users;
        id = users;

        console.log($scope.clickedUser)

        $scope.date = $scope.clickedUser.date
        $scope.ons = $scope.clickedUser.ons
        $scope.brgy = $scope.clickedUser.brgy
        $scope.ecs = $scope.clickedUser.ecs
        $scope.ncm = $scope.clickedUser.ncm
        $scope.cpn = $scope.clickedUser.cpn

        $('#myModal').modal('show');
    };

    $scope.printit = function(users) {

        for (let index = 0; index < $scope.cfs.length; index++) {
            // console.log($scope.cfs[index].key)
            // console.log(users.key)
            if (users.key == $scope.cfs[index].key) {
                // console.log($scope.cfs[index])
                $scope.usersClicked = $scope.cfs[index];
                // console.log($scope.usersClicked.needs)
            }

        }


        $scope.clickedUser = users;
        id = users;

        console.log($scope.clickedUser.operationfor)


        $('#printit').modal('show');


        setTimeout(function() {

            printJS({
                printable: 'newcfp',
                type: 'html',
                targetStyles: ['*'],
                maxWidth: 'auto'
            })

            $('#printit').modal('hide');
        }, 1000);

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
        var ref2 = firebase.database().ref("/cdrmo/dcm/" + id.$id);
        ref2.update({
            date: $scope.date,
            ecs: $scope.ecs,
            iacs: l$scope.iacs,
            ats: $scope.ats,
            lbs: $scope.lbs
        })

        .catch(function(error) {
            console.log("Login Failed!", error.message);
            $("#notif").append('<div class="alert alert-danger fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Error</strong> ' + error.message + '</div>');
            setTimeout(function() {
                $("#notif").hide()
            }, 10000);

        });



        $('#myModal').modal('hide');

    };

    $scope.deleteUser = function() {
        var ref = firebase.database().ref("/cdrmo/dcm/" + id.key);
        ref.remove()
            .catch(function(error) {
                console.log("Login Failed!", error.message);
                $("#notif").append('<div class="alert alert-danger fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Error</strong> ' + error.message + '</div>');
                setTimeout(function() {
                    $("#notif").hide()
                }, 1500);

            });;



        $("#notif").append('<div class="alert alert-success fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Success</strong> Deleted !</div>');
        setTimeout(function() {
            // window.location.href = "#/"
            window.location.href = "#ecllist"
        }, 1500);
        $('#myModal2').modal('hide');
    };

    $scope.close = function() {
        $('#myModal').modal('hide');
        $('#myModal2').modal('hide');
        $('#myModal3').modal('hide');
    };


    $('#newcf').on('submit', function(e) {

        e.preventDefault();


        var data = {
            date: $scope.date,
            ecs: $scope.ecs,
            iacs: $scope.iacs,
            ats: $scope.ats,
            lbs: $scope.lbs
        }

        var updates = {};

        updates['/cdrmo/dcm/' + id.key] = data;
        firebase.database().ref().update(updates);
        console.log(updates)

        if (updates) {
            $('#myModal').modal('hide');

            $("#notif").append('<div class="alert alert-success fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Success</strong> Data had been save!.</div>');
            setTimeout(function() {
                window.location.href = "#/"
                window.location.href = "#ecllist"
            }, 1500);
        } else {
            $("#notif").append('<div class="alert alert-danger fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Error</strong> Check your Input !</div>');
        }

    });



}).filter('startFrom', function() {
    return function(input, start) {
        if (!input || !input.length) { return; }
        start = +start; //parse to int
        return input.slice(start);
    }
})