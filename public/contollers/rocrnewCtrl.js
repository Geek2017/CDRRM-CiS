angular.module('newApp').controller('rocrnewCtrl', function($scope) {
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

    $('#newrocr').on('submit', function(e) {
        $scope.tojson();

        e.preventDefault();

        console.log($scope.tojson(obj))

        var newobj = $scope.tojson(obj);
        // [$scope.tojson(obj)];

        var uid = firebase.database().ref().child('/cswdo/rocr').push().key;
        var orno = $scope.ornum;
        var sector = $scope.sector;
        var evacCenter = $scope.evacCenter;
        var incharge = $scope.incharge;
        var recievedBy = $scope.recievedBy;
        var receivedDesignation = $scope.receivedDesignation;
        var date1 = $scope.date1;
        var releasedBy = $scope.releasedBy;
        var releasedDesignation = $scope.releasedDesignation;
        var date2 = $scope.date2;



        const [, ...rest] = newobj.reverse();
        const withoutLast = rest.reverse();
        const withoutLast2 = $scope.tojson(obj);
        // console.log(withoutLast)
        var data = {
            date: datetoday,
            evacCenter: evacCenter,
            incharge: incharge,
            recievedBy: recievedBy,
            receivedDesignation: receivedDesignation,
            date1: $('#date1').val(),
            releasedBy: releasedBy,
            releasedDesignation: releasedDesignation,
            date2: $('#date2').val(),
            donors: withoutLast2,
        }

        var updates = {};
        updates['/cswdo/rocr/'  + uid] = data;
        firebase.database().ref().update(updates);
        console.log(updates)

        if (updates) {


            $("#notif").append('<div class="alert alert-success fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Success</strong> Data had been save!.</div>');
            setTimeout(function() {
                window.location.href = "#/"
                window.location.href = "#rocrnew"
            }, 1500);
        } else {
            $("#notif").append('<div class="alert alert-danger fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Error</strong> Check your Input !</div>');
        }

    });
    var cnt = 0;
    $scope.addtr = function() {
        $("#appendhere").append(' <tr class="row_to_clone"><td class="col-md-2"> <label class="input"> <input type="text" name="remarks" placeholder="" required></label></td></td><td class="col-md-1"> <label class="input"> <input type="date" name="remarks" placeholder="" ></label></td></td><td class="col-md-2"><label class="input"> <input type="text" name="remarks" placeholder=""></label></td></td><td class=""><label class="input"> <input type="number" name="remarks" placeholder=""></label></td></td><td class="col-md-2"><label class="input"> <input type="text" name="remarks" placeholder=""></label></td></td><td class="col-md-1"><label class="input"> <input type="number" name="remarks" placeholder=""></label></td></td><td class="col-md-1"><label class="input"> <input type="number" name="remarks" placeholder=""></label></td></td><td class="col-md-2"><label class="input"> <input type="text" name="amount" value="" class="" autocomplete="off" /></label></td></tr>');
        cnt++;
        $('table thead th').each(function(i) {

        });

    }
    $scope.removetr = function() {

        $('#appendhere tr:last').remove();
        $('table thead th').each(function(i) {

        });
        // calculateSum();
    }

    $("#appendhere").on('click', '.deleteb', function() {
        $(this).closest("tr").remove();
        $('table thead th').each(function(i) {

        });
        // calculateSum();
    });


    // function calculateSum() {
    //     var sum = 0;
    //     //iterate through each textboxes and add the values
    //     $(".txt").each(function() {

    //         //add only if the value is number
    //         if (!isNaN(this.value) && this.value.length != 0) {
    //             sum += parseFloat(this.value);
    //         }

    //     });
    //     //.toFixed() method will roundoff the final sum to 2 decimal places
    //     $("#sum").html(sum.toFixed(2));
    //     console.log(sum.toFixed(2));
    // }

    // $("#convert-table").on("keyup", ".txt", function() {
    //     calculateSum();
    // });

    

    

   
});