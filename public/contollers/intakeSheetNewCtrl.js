angular.module('newApp').controller('intakeSheetNewCtrl', function($scope) {
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
        // [$scope.tojson(obj)];

        var uid = firebase.database().ref().child('barangay/intakesheet').push().key;
        var orno = $scope.ornum;
        var sector = $scope.sector;
        var evacCenter = $scope.evacCenter;
        var purok = $scope.purok;
        var familyHead = $scope.familyHead;
        var roomAssignment = $scope.roomAssignment;
        var teacherIncharge = $scope.teacherIncharge;



        const [, ...rest] = newobj.reverse();
        const withoutLast = rest.reverse();
        const withoutLast2 = $scope.tojson(obj);
        // console.log(withoutLast)
        var data = {
            date: datetoday,
            evacCenter: evacCenter,
            purok: purok,
            familyHead: familyHead,
            roomAssignment: roomAssignment,
            teacherIncharge: teacherIncharge,
            family: withoutLast2,
        }

        var updates = {};
        updates['/barangay/intakesheet/'  + uid] = data;
        firebase.database().ref().update(updates);
        console.log(updates)

        if (updates) {


            $("#notif").append('<div class="alert alert-success fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Success</strong> Data had been save!.</div>');
            setTimeout(function() {
                window.location.href = "#/"
                window.location.href = "#intakesheetnew"
            }, 1500);
        } else {
            $("#notif").append('<div class="alert alert-danger fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Error</strong> Check your Input !</div>');
        }

    });
    var cnt = 0;
    $scope.addtr = function() {
        $("#appendhere").append('<tr><td class="col-md-2"> <label class="input"><input type="text" name="particulars"  placeholder="" required></label></td><td  class="col-md-1"><select name="interested " id="type" required class="form-control btn-block"><option value="0 " selected="true" disabled=" ">Select</option><option value="1" >Single</option><option value="2">Married</option><option value="3">Widowed</option><option value="4">Separated</option></select></td></td><td class="col-md-1"><label class="input"> <input type="text" name="amount" value="" class="" autocomplete="off" /></label></td><td class="col-md-2"><label class="input"> <input type="text" name="remarks" placeholder=""></label></td></td><td class="col-md-2"><label class="input"> <input type="text" name="amount" value="" class="" autocomplete="off" /></label></td><td class="col-md-1"><label class="input"> <input type="text" name="remarks" placeholder=""></label></td><td class="col-md-1"><label class="input"> <input type="text" name="remarks" placeholder=""></label></td><td class="col-md-2"><label class="input"> <input type="text" name="remarks" placeholder=""></label></td></td><td class="col-md-1"><label class="input col-md-10"> <input type="text" name="amount" value="" class="" autocomplete="off" /></label><label class="input col-md-1"> <button class="btn btn-danger btn-sm deleteb">X</button></label></td></tr>');
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