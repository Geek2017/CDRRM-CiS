angular.module('newApp').controller('socnewCtrl', function($scope) {
    pageSetUp();

    var obj0, obj1, obj2;

    $scope.tojson0 = function(obj0) {

        var table0 = $('#table0').tableToJSON({

            extractor: function(cellIndex, $cell) {
                return $cell.find('input').val() || $cell.find("#type option:selected").text();
            }


        })
        return table0;

    }

    $scope.tojson1 = function(obj1) {

        var table1 = $('#table1').tableToJSON({

            extractor: function(cellIndex, $cell) {
                return $cell.find('input').val() || $cell.find("#type option:selected").text();
            }


        })
        return table1;

    }

    $scope.tojson2 = function(obj2) {

        var table2 = $('#table2').tableToJSON({

            extractor: function(cellIndex, $cell) {
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

    $('#newsoc').on('submit', function(e) {

        e.preventDefault();

        $scope.tojson0();
        $scope.tojson1();
        $scope.tojson2();

        console.log($scope.tojson0(obj0))
        console.log($scope.tojson1(obj1))
        console.log($scope.tojson2(obj2))


        var uid = firebase.database().ref().child('cswdo/soec/').push().key;

        var data = {
            date: datetoday,

            "type_disaster": $scope.type_disaster,
            "place_occurence": $scope.place_occurence,
            "asof": $scope.asof,

            "prefered_by": $scope.prefered_by,
            "prefered_by_designation": $scope.prefered_by_designation,

            "certified_by": $scope.certified_by,
            "certified_by_designation": $scope.certified_by_designation,

            "submmitted_by": $scope.submmitted_by,
            "submmitted_by": $scope.submmitted_by_designation,

            "details": $.extend(true,
                JSON.parse(localStorage.getItem('i0')),
                JSON.parse(localStorage.getItem('i1')),
                JSON.parse(localStorage.getItem('i2')))


        }

        var updates = {};
        updates['cswdo/soec/' + uid] = data;
        firebase.database().ref().update(updates);
        console.log(updates)

        if (updates) {


            $("#notif").append('<div class="alert alert-success fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Success</strong> Data had been save!.</div>');
            setTimeout(function() {
                window.location.href = "#/"
                window.location.href = "#socnew"
            }, 1500);
        } else {
            $("#notif").append('<div class="alert alert-danger fade in"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i><strong>Error</strong> Check your Input !</div>');
        }

    });



    var navListItems = $('ul.setup-panel li a'),
        allWells = $('.setup-content');

    navListItems.click(function(e) {
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


    $('.step-2').click(function() {
        $scope.tojson0();

        console.log($scope.tojson0(obj0))

        localStorage.setItem('i0', JSON.stringify($scope.tojson0(obj0)))
        $('ul.setup-panel li:eq(1)').removeClass('disabled');

        $('ul.setup-panel li a[href="#step-2"]').trigger('click');
    });


    $('.step-3').click(function() {
        $scope.tojson1();

        console.log($scope.tojson1(obj1))

        localStorage.setItem('i1', JSON.stringify($scope.tojson1(obj1)))
        $('ul.setup-panel li:eq(2)').removeClass('disabled');

        $('ul.setup-panel li a[href="#step-3"]').trigger('click');
    });


    $('.step-1').click(function() {
        $scope.tojson2();

        console.log($scope.tojson2(obj2))

        localStorage.setItem('i2', JSON.stringify($scope.tojson2(obj2)))
        $('ul.setup-panel li:eq(0)').removeClass('disabled');

        $('ul.setup-panel li a[href="#step-1"]').trigger('click');
    });






    var cnt = 0;
    $scope.addtr = function() {
        $("#appendhere0").append("<tr class='row_to_clone '> <td> <label class='input '> <input type='text' name='' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='text ' name=' ' placeholder=' '> </label> </td><td> <label class='input '> <input type='number ' name=' ' value=' ' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='number ' name=' ' value=' ' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='number ' name=' ' value=' ' class=' ' autocomplete='off'/> </label> </td>")


        $("#appendhere1").append("<tr class='row_to_clone '> <td> <label class='input '> <input type='text' name='' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='text ' name=' ' placeholder=' '> </label> </td><td> <label class='input '> <input type='number ' name=' ' value=' ' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='number ' name=' ' value=' ' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='number ' name=' ' value=' ' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='number ' name=' ' value=' ' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='number ' name=' ' value=' ' class=' ' autocomplete='off'/> </label> </td></tr>")

        $("#appendhere2").append("<tr class='row_to_clone '> <td> <label class='input '> <input type='text' name='' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='text ' name=' ' placeholder=' '> </label> </td><td> <label class='input '> <input type='number ' name=' ' value=' ' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='number ' name=' ' value=' ' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='number ' name=' ' value=' ' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='number ' name=' ' value=' ' class=' ' autocomplete='off'/> </label> </td><td> <label class='input '> <input type='number ' name=' ' value=' ' class=' ' autocomplete='off'/> </label> </td></tr>")



        cnt++;


    }

    $scope.removetr = function() {
        $('#appendhere0 tr:last').remove();
        $('#appendhere1 tr:last').remove();
        $('#appendhere2 tr:last').remove();
    }



});