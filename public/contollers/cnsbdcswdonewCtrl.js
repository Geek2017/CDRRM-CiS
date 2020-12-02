angular.module('newApp').controller('cnsbdcswdonewCtrl', function($scope) {
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

        var uid = firebase.database().ref().child('cswdo/cnsbd').push().key;
        var orno = $scope.ornum;
        var sector = $scope.sector;
        var leadAgency = $scope.leadAgency;
        var operation = $scope.operation;
        var operationfor = $scope.operationfor;



        const [, ...rest] = newobj.reverse();
        const withoutLast = rest.reverse();
        console.log(withoutLast)
        var data = {
            date: datetoday,
            sector: sector,
            leadAgency: leadAgency,
            operationfor: operationfor,
            needs: withoutLast,
            total: $('#sum').text(),
            total2: $('#sum2').text(),
            total3: $('#sum3').text()
        }

        var updates = {};
        updates['/cswdo/cnsbd/' + uid] = data;
        firebase.database().ref().update(updates);
        console.log(updates)

        if (updates) {


            $("#notif").append('<div class="alert alert-success fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Success</strong> Data had been save!.</div>');
            setTimeout(function() {
                window.location.href = "#/"
                window.location.href = "#cnsbdcswdonew"
            }, 1500);
        } else {
            $("#notif").append('<div class="alert alert-danger fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Error</strong> Check your Input !</div>');
        }

    });
    var cnt = 0;
    $scope.addtr = function() {
        $("#appendhere").append("<tr class='row_to_clone'> <td lass='col-md-3'> <label class='textarea'> <textarea rows='3' required></textarea> </label></td><td class='col-md-2'><label class='input'> <input type='text' name='remarks' placeholder=''> </label></td></td><td class='col-md-2'> <label class='input '> <input type='text' name='amount' value='' class='txt' autocomplete='off'/> </label> </td><td class='col-md-2'><label class='input'> <input type='text' name='remarks' placeholder=''> </label></td></td><td class='col-md-1'> <label class='input '> <input type='text' name='amount' value='' class='txt2' autocomplete='off'/> </label> </td><td class='col-md-1'><label class='input'> <input type='text' name='remarks' placeholder=''> </label></td></td><td class='col-md-1'> <label class='input '> <input type='text' name='amount' value='' class='txt3' autocomplete='off'/> </label> </td></tr>");
        cnt++;
        $('table thead th').each(function(i) {

        });

    }
    $scope.removetr = function() {

        $('#appendhere tr:last').remove();
        $('table thead th').each(function(i) {

        });
        calculateSum();
        calculateSum2();
        calculateSum3();
    }

    $("#appendhere").on('click', '.deleteb', function() {
        $(this).closest("tr").remove();
        $('table thead th').each(function(i) {

        });
        calculateSum();
        calculateSum2();
        calculateSum3();
    });


    function calculateSum() {
        var sum = 0;
        //iterate through each textboxes and add the values
        $(".txt").each(function() {

            //add only if the value is number
            if (!isNaN(this.value) && this.value.length != 0) {
                sum += parseFloat(this.value);
            }

        });
        //.toFixed() method will roundoff the final sum to 2 decimal places
        $("#sum").html(sum.toFixed(2));
        console.log(sum.toFixed(2));
    }

    function calculateSum2() {
        var sum = 0;
        //iterate through each textboxes and add the values
        $(".txt2").each(function() {

            //add only if the value is number
            if (!isNaN(this.value) && this.value.length != 0) {
                sum += parseFloat(this.value);
            }

        });
        //.toFixed() method will roundoff the final sum to 2 decimal places
        $("#sum2").html(sum.toFixed(2));
        console.log(sum.toFixed(2));
    }

    function calculateSum3() {
        var sum = 0;
        //iterate through each textboxes and add the values
        $(".txt3").each(function() {

            //add only if the value is number
            if (!isNaN(this.value) && this.value.length != 0) {
                sum += parseFloat(this.value);
            }

        });
        //.toFixed() method will roundoff the final sum to 2 decimal places
        $("#sum3").html(sum.toFixed(2));
        console.log(sum.toFixed(2));
    }

    $("#convert-table").on("keyup", ".txt", function() {
        calculateSum();
    });

    $("#convert-table").on("keyup", ".txt2", function() {
        calculateSum2();
    });

    $("#convert-table").on("keyup", ".txt3", function() {
        calculateSum3();
    });





});