angular.module('newApp').controller('accesscardnewCtrl', function($scope) {
    pageSetUp();
    var obj;
    $scope.tojson = function(obj) {

        var table = $('#convert-table').tableToJSON({

            extractor: function(cellIndex, $cell) {
                return $cell.find('input').val() || $cell.find("#type option:selected").text();
            }


        })
        return table;

    }

    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    var datetoday = month + ":" + day + ":" + year;

    $('#newcf').on('submit', function(e) {
        $scope.tojson();

        e.preventDefault();

        console.log($scope.tojson(obj))

        var newobj = $scope.tojson(obj);

        var uid = firebase.database().ref().child('/cswdo/accesscard').push().key;

        var City = $scope.City;
        var EvacuationCenter = $scope.EvacuationCenter;
        var CaseNo = $scope.CaseNo;
        var Nameofamilyhead = $scope.Nameofamilyhead;
        var PlaceofOrigin = $scope.PlaceofOrigin;

        var Noofamilymembers = $scope.Noofamilymembers;
        var Occupation = $scope.Occupation;
        var FamilyIncome = $scope.FamilyIncome;
        var Chairman = $scope.Chairman;
        var cswdo = $scope.cswdo;



        const [, ...rest] = newobj.reverse();
        const withoutLast = rest.reverse();
        console.log(withoutLast)
        var data = {
            date: datetoday,

            City: City,
            EvacuationCenter: $scope.EvacuationCenter,
            CaseNo: $scope.CaseNo,
            Nameofamilyhead: $scope.Nameofamilyhead,
            PlaceofOrigin: $scope.PlaceofOrigin,

            Noofamilymembers: $scope.Noofamilymembers,
            Occupation: $scope.Occupation,
            FamilyIncome: $scope.FamilyIncome,
            Chairman: $scope.Chairman,
            cswdo: $scope.cswdo,
            list: newobj
        }

        var updates = {};
        updates['/cswdo/accesscard/' + uid] = data;
        firebase.database().ref().update(updates);
        console.log(updates)

        if (updates) {

            $("#notif").append('<div class="alert alert-success fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Success</strong> Data had been save!.</div>');
            setTimeout(function() {
                window.location.href = "#/"
                window.location.href = "#/accesscardnew"
            }, 1500);
        } else {
            $("#notif").append('<div class="alert alert-danger fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Error</strong> Check your Input !</div>');
        }

    });
    var cnt = 0;
    $scope.addtr = function() {
        $("#appendhere").append("<tr class='row_to_clone'> <td> <label class='input'> <input type='date' required> </label> </td><td><label class='input'> <input type='text' required> </label> </td><td> <label class='input '> <input type='text' required/> </label> </td></tr>");
        cnt++;
    }
    $scope.removetr = function() {
        $('#appendhere tr:last').remove();
        $('table thead th').each(function(i) {

        });
    }

});