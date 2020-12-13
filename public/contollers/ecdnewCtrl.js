angular.module('newApp').controller('ecdnewCtrl', function ($scope) {
    pageSetUp();

    var obj0, obj1, obj2;

    var total1 = 0, total2 = 0, total3 = 0;
    $scope.tojson0 = function (obj0) {

        var table0 = $('#table0').tableToJSON({

            extractor: function (cellIndex, $cell) {
                return $cell.find('input').val() || $cell.find("#type option:selected").text();
            }


        })
        return table0;

    }

    $scope.tojson1 = function (obj1) {

        var table1 = $('#table1').tableToJSON({

            extractor: function (cellIndex, $cell) {
                return $cell.find('input').val() || $cell.find("#type option:selected").text();
            }


        })
        return table1;

    }

    $scope.tojson2 = function (obj2) {

        var table2 = $('#table2').tableToJSON({

            extractor: function (cellIndex, $cell) {
                return $cell.find('input').val() || $cell.find("#type option:selected").text();
            }


        })
        return table2;

    }

    const withoutLast0 = $scope.tojson0(obj0);
    const withoutLast1 = $scope.tojson1(obj1);
    const withoutLast2 = $scope.tojson2(obj2);

    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    var datetoday = month + ":" + day + ":" + year;

    $('#newecd').on('submit', function (e) {

        e.preventDefault($(".step-1").trigger("click"));

        setTimeout(function () {
            console.log('done')
            $scope.tojson0();
            $scope.tojson1();
            $scope.tojson2();

            console.log($scope.tojson0(obj0))
            console.log($scope.tojson1(obj1))
            console.log($scope.tojson2(obj2))

            var evacCenter = $scope.evacCenter;
            var roomNo = $scope.roomNo;
            var teacher = $scope.teacher;
            var cardColor = $scope.cardColor;
            var roomLeader = $scope.roomLeader;


            var uid = firebase.database().ref().child('/deped/ecd/').push().key;

            var data = {
                date: datetoday,
                total1: total1,
                total2: total2,
                total3: total3,
                


                "center": $.extend(true,
                    JSON.parse(localStorage.getItem('i0')),
                    JSON.parse(localStorage.getItem('i1')),
                    JSON.parse(localStorage.getItem('i2')))




            }

            var updates = {};
            updates['/deped/ecd/' + uid] = data;
            firebase.database().ref().update(updates);
            console.log(updates)

            if (updates) {


                $("#notif").append('<div class="alert alert-success fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Success</strong> Data had been save!.</div>');
                setTimeout(function () {
                    window.location.href = "#/"
                    window.location.href = "#ecdnew"
                }, 1500);
            } else {
                $("#notif").append('<div class="alert alert-danger fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Error</strong> Check your Input !</div>');
            }


        }, 2000);





    });



    var navListItems = $('ul.setup-panel li a'),
        allWells = $('.setup-content');

    navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
            $item = $(this).closest('li');

        if (!$item.hasClass('disabled')) {
            navListItems.closest('li').removeClass('active');
            $item.addClass('active');
            allWells.hide();
            $target.show();
        }
    });

    $('ul.setup-panel li.active a').trigger('click');


    $('.step-2').click(function () {
        $scope.tojson0();

        console.log($scope.tojson0(obj0))

        localStorage.setItem('i0', JSON.stringify($scope.tojson0(obj0)))
        $('ul.setup-panel li:eq(1)').removeClass('disabled');

        $('ul.setup-panel li a[href="#step-2"]').trigger('click');
    });


    $('.step-3').click(function () {
        $scope.tojson1();

        console.log($scope.tojson1(obj1))

        localStorage.setItem('i1', JSON.stringify($scope.tojson1(obj1)))
        $('ul.setup-panel li:eq(2)').removeClass('disabled');

        $('ul.setup-panel li a[href="#step-3"]').trigger('click');
    });


    $('.step-1').click(function () {
        $scope.tojson2();

        console.log($scope.tojson2(obj2))

        localStorage.setItem('i2', JSON.stringify($scope.tojson2(obj2)))
        $('ul.setup-panel li:eq(0)').removeClass('disabled');

        $('ul.setup-panel li a[href="#step-1"]').trigger('click');
    });


    var cnt = 0;
    $scope.addtr = function () {
        $("#appendhere0").append("<tr class='row_to_clone '> <td> <label class='input '> <input type='text' name='' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='text' name='' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='text' name='' class=' ' autocomplete='off'/> </label> </td> </tr>")


        $("#appendhere1").append("<tr class='row_to_clone '> <td> <label class='input '> <input type='text' name='' class='txt' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='text' name='' class='txt2' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='text' name='' class='txt3' autocomplete='off'/> </label> </td></tr>")

        $("#appendhere2").append("<tr class='row_to_clone '> <td> <label class='input '> <input type='date' name='' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='date' name='' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='text' name='' class=' ' autocomplete='off'/> </label> </td></tr>")



        cnt++;


    }

    $scope.removetr = function () {
        $('#appendhere0 tr:last').remove();
        $('#appendhere1 tr:last').remove();
        $('#appendhere2 tr:last').remove();
    }



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
        // $("#sum").html(sum.toFixed(2));
        total1 = sum.toFixed(2);
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
        // $("#sum2").html(sum.toFixed(2));
        total2 = sum.toFixed(2);
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
        // $("#sum3").html(sum.toFixed(2));
        total3 = sum.toFixed(2);
        console.log(sum.toFixed(2));
    }


    $("#table1").on("keyup", ".txt", function() {
        calculateSum();
    });

    $("#table1").on("keyup", ".txt2", function() {
        calculateSum2();
    });

    $("#table1").on("keyup", ".txt3", function() {
        calculateSum3();
    });






});