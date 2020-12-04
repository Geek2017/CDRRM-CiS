angular.module('newApp').controller('eclnewCtrl', function($scope) {
    pageSetUp();

    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1;
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    var datetoday = month + ":" + day + ":" + year;

    $('#newcf').on('submit', function(e) {

        e.preventDefault();

        var uid = firebase.database().ref().child('/cdrmo/ecl').push().key;

        var data = {
            date: datetoday,
            ecs: $scope.ecs,
            iacs: $scope.iacs,
            ats: $scope.ats,
            lbs: $scope.lbs
        }

        var updates = {};
        updates['/cdrmo/ecl/' + uid] = data;
        firebase.database().ref().update(updates);
        console.log(updates)

        if (updates) {
            $("#notif").append('<div class="alert alert-success fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Success</strong> Data had been save!.</div>');
            setTimeout(function() {
                window.location.href = "#/"
                window.location.href = "#eclnew"
            }, 1500);
        } else {
            $("#notif").append('<div class="alert alert-danger fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Error</strong> Check your Input !</div>');
        }

    });

});