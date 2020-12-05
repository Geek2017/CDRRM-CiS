angular.module('newApp').controller('dcmnewCtrl', function($scope) {
    pageSetUp();

    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1;
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    var datetoday = month + ":" + day + ":" + year;

    $('#newcf').on('submit', function(e) {
        e.preventDefault();

        var uid = firebase.database().ref().child('/cdrmo/dcm/').push().key;

        var data = {
            date: datetoday,
            ons: $scope.ons,
            brgy: $scope.brgy,
            ecs: $scope.ecs,
            ncm: $scope.ncm,
            cpn: $scope.cpn
        }

        var updates = {};
        updates['/cdrmo/dcm/' + uid] = data;
        firebase.database().ref().update(updates);
        console.log(updates)

        if (updates) {
            $("#notif").append('<div class="alert alert-success fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Success</strong> Data had been save!.</div>');
            setTimeout(function() {
                window.location.href = "#/"
                window.location.href = "#dcmnew"
            }, 1500);
        } else {
            $("#notif").append('<div class="alert alert-danger fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Error</strong> Check your Input !</div>');
        }

    });

});