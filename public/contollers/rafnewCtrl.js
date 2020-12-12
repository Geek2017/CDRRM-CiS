angular.module('newApp').controller('rafnewCtrl', function($scope) {
    pageSetUp();

    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    var datetoday = month + ":" + day + ":" + year;

    $('#newcf').on('submit', function(e) {
        e.preventDefault();


        var uid = firebase.database().ref().child('/barangay/intakesheet').push().key;

        var data = {
            date: datetoday,
            fullname: $scope.fullname,
            sex: $scope.sex,
            status: $scope.status,
            dob: $scope.dob,
            age: $scope.age,
            address: $scope.address,
            cdi: $scope.cdi,
            dpr: $scope.dpr,
            dnt: $scope.dnt,
            npr: $scope.npr,
        }

        var updates = {};
        updates['/barangay/raf/' + uid] = data;
        firebase.database().ref().update(updates);
        console.log(updates)

        if (updates) {


            $("#notif").append('<div class="alert alert-success fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Success</strong> Data had been save!.</div>');
            setTimeout(function() {
                window.location.href = "#/"
                window.location.href = "#intakesheetscswdonew"
            }, 1500);
        } else {
            $("#notif").append('<div class="alert alert-danger fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Error</strong> Check your Input !</div>');
        }

    });

});